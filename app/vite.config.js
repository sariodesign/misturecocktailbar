import { defineConfig } from 'vite'

const { resolve } = require('path')

// vite.config.js
export default defineConfig({
    build: {
        cssCodeSplit: false,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                sede: resolve(__dirname, 'scopri-la-sede/index.html'),
                staff: resolve(__dirname, 'lo-staff-di-misture/index.html'),
                eventi: resolve(__dirname, 'eventi-e-news/index.html'),
                cocktail: resolve(__dirname, 'lista-dei-cocktail/index.html')
            }
        }
    }
})