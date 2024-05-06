import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable minification (removes comments and whitespace)
    minify: 'terser',
    // Configure Terser options
    terserOptions: {
      compress: {
        // Remove console logs
        drop_console: true,
      },
    },
  },
})
