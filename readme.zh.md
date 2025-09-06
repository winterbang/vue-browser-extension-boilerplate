
# Vue 浏览器扩展样板工程
一个现代化的、可用于生产环境的样板项目，用于使用 Vue 3、Vite 和 Tailwind CSS 构建跨浏览器扩展。

[English](./readme.md)
## 🚀 特性
- ⚡ Vue 3 - 组合式 API 与 <script setup> 语法

- 📦 Vite - 快速的构建和开发时热重载

- 🎨 Tailwind CSS - 实用优先的 CSS 框架，用于快速 UI 开发

- 🛠️ Manifest V3 - 最新的 Chrome 扩展规范

- 🌐 跨浏览器 - 支持 Chrome、Firefox 和 Edge


## 📦 支持的扩展组件
- 弹出页面 (Popup Page)

- 选项页面 (Options Page)

- 内容脚本 (Content Scripts)

- 后台服务 Worker (Background Service Worker)

- 开发者工具面板 (DevTools Panel，可选)

- 侧边面板 (Side Panel，可选)

## 🏗️ 项目结构
```text
project/
├── public/
│   ├── manifest.json # Extension manifest
│   └── icons # Icons
├── src/
│   ├── content_scripts/ # Content scripts
│   ├── options/ # options page
│   │   ├── App.vue
│   │   ├── main.js        
│   │   └── style.css
│   ├── popup/ # Popup page
│   │   ├── App.vue
│   │   ├── main.js        
│   │   └── style.css
│   └── background.js # Service Worker (background script)
├── options.html
├── popup.html
├── package.json
├── readme.zh.md
├── readme.md
└── vite.config.js
```
## 🚦 快速开始
```bash
# 克隆仓库
git clone https://github.com/winterbang/vue-browser-extension-boilerplate.git

# 安装依赖
npm install

# 为 Chrome 开发
npm run dev

# 构建生产版本
npm run ext
```

## 🛠️ 开发
```bash
# 带热重载的开发模式
npm run dev
```
## 🌟 选择此样板工程的理由？
- 现代技术栈：使用最新的 Vue 3、Vite 和 Tailwind CSS，以获得最佳性能和样式。

- 开发体验：热重载、调试设置和开发工具。

- 生产就绪：包含优化的构建和最佳实践。

- 可扩展：易于定制和添加新功能。

- 文档完善：全面的文档和示例。

## 📋 先决条件
- Node.js 18+

- npm、yarn 或 pnpm

- 支持扩展的现代浏览器

## 🤝 贡献
欢迎贡献！请随时提交 Pull Request。

## 📄 许可证
MIT 许可证 - 可自由地将此项目用于个人或商业目的。

### 几分钟内即可开始构建您的浏览器扩展！ 🎉