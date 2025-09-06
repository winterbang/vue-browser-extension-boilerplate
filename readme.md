# Vue Browser Extension Boilerplate

A modern, production-ready boilerplate for building cross-browser extensions with Vue 3, Vite, and Tailwind CSS.

[中文](./readme.zh.md)

## 🚀 Features

- ⚡ **Vue 3** - Composition API with `<script setup>` syntax
- 📦 **Vite** - Fast builds and hot reload for development
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🛠️ **Manifest V3** - Latest Chrome extension specification
- 🌐 **Cross-Browser** - Supports Chrome, Firefox, and Edge
- 📱 **Responsive** - Mobile-friendly popup design

## 📦 Supported Extension Components

- Popup Page
- Options Page
- Content Scripts
- Background Service Worker
- DevTools Panel (optional)
- Side Panel (optional)

## 🏗️ Project Structure
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

## 🚦 Getting Started

```bash
# Clone the repository
git clone https://github.com/winterbang/vue-browser-extension-boilerplate.git

# Install dependencies
npm install

# Develop for Chrome
npm run dev

# Build for production
npm run ext
```
## 🛠️ Development
```bash
# Develop with hot reload
npm run dev
```
## 🌟 Why Choose This Boilerplate?
Modern Stack: Uses the latest Vue 3, Vite, and Tailwind CSS for optimal performance and styling.

Type Safety: Full TypeScript support with strict type checking.

Developer Experience: Hot reload, debugging setup, and dev tools.

Production Ready: Optimized builds and best practices included.

Extensible: Easy to customize and add new features.

Well Documented: Comprehensive documentation and examples.

## 📋 Prerequisites
- Node.js 18+

- npm or yarn

- Modern browser with extension support

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License
MIT License - feel free to use this project for personal or commercial purposes.

### Start building your browser extension in minutes, not hours! 🎉