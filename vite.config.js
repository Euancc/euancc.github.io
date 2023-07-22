import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default {
  // ...other configuration options...
  build: {
    outDir: 'build', // Customized output directory (not the default 'dist')
  },
}
