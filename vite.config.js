import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/BryanDiaz-dev.github.io/',
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  build: {
    rollupOptions: {
      output: {
        format: 'es'
      }
    }
  }
})
