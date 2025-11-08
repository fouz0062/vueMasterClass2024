import { fileURLToPath, URL } from 'node:url'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
// 💡 Re-add standard ES imports for Tailwind and Autoprefixer
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// Note: Removed the unused `import type { Plugin } from 'postcss'`

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // 1. VueRouter MUST be placed before the main Vue plugin
    VueRouter({
      /* You can add options here if needed, like your pages directory */
    }),
    // 2. Main Vue plugin
    vue(),
    // 3. DevTools (can be placed anywhere after core plugins)
    vueDevTools()
  ],
  css: {
    postcss: {
      plugins: [
        // ✅ Call the imported default exports as functions
        tailwind,
        autoprefixer()
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
