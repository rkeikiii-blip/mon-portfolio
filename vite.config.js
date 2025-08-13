import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mon-portfolio/', // nom EXACT de ton dépôt GitHub
  css: {
    postcss: './postcss.config.js'
  }
})
