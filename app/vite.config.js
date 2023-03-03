import { defineConfig } from 'vite'
import nunjucksPlugin from 'vite-plugin-nunjucks'

const { resolve } = require('path')

// vite.config.js
export default defineConfig({
    build: {
        cssCodeSplit: false,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                cocktail: resolve(__dirname, 'cocktail/index.html'),
                food: resolve(__dirname, 'food/index.html'),
                wine: resolve(__dirname, 'wine-and-bubbles/index.html'),
                backoffice: resolve(__dirname, 'backoffice/index.html'),
                dashboard: resolve(__dirname, 'dashboard/index.html')
            }
        }
    },
    plugins: [
        nunjucksPlugin(),
    ]
})