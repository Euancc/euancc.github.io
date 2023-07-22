import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // Replace '/subpath/' with your actual subpath
  plugins: [react()],
  // other configuration options...
})
