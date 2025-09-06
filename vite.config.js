import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(({mode}) => {
  return {
    base: './',
    plugins: [
      tailwindcss(),
      vue(),
      viteStaticCopy({
        targets: [
          {
            src: 'public/manifest.json',
            dest: './',
            transform: (contents) => {
              const originalData = JSON.parse(contents.toString())
              const { name, version } = originalData
              return JSON.stringify({
                ...originalData,
                name: mode === 'production' 
                  ? name
                  : `${name} TEST`,
                version: mode === 'production'
                  ? version
                  : '0.0.1'
              }, null, 2)
            }
          },
        ]
      })
    ],
    build: {
      outDir: 'dist',
      sourcemap: true,
      rollupOptions: {
        input: {
          options: path.resolve(__dirname, 'options.html'),
          popup: path.resolve(__dirname, 'popup.html'),
          background: path.resolve(__dirname, 'src/background.js'),
          'page-script': path.resolve(__dirname, 'src/content_scripts/page-script.js'),
        },
        output: {
          chunkFileNames: chunkInfo => {
            if (chunkInfo.name === '_plugin-vue_export-helper') return 'assets/plugin-vue_export-helper-[hash].js'
            return 'assets/[name]-[hash].js'
          },
          entryFileNames: ({facadeModuleId, name}) => {
            // 如果是content_scripts 目录下的脚本，则放到content_scripts目录下
            if(facadeModuleId.includes('src/content_scripts') && facadeModuleId.endsWith('.js')) {
              return `content_scripts/${name}.js`
            }
            if(name === 'background') return 'background.js'
            return 'assets/[name]-[hash].js'
          }
        }
        
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
      },
    },
    server: {
      port: 3000,
    },
  }
});