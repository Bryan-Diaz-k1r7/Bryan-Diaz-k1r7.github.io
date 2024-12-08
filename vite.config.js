import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/bryandiaz-dev.github.io/',
  server: {
    host: '0.0.0.0',    // Permite acceso desde cualquier IP
    port: 80,           // Puerto 80
  }
})
