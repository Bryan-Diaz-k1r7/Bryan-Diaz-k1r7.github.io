import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        format: 'es',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.jpeg') || 
              assetInfo.name.endsWith('.jpg') || 
              assetInfo.name.endsWith('.png')) {
            return 'assets/images/[name].[ext]';
          }
          return 'assets/[name].[ext]';
        },
        chunkFileNames: 'assets/js/[name].[hash].js',
        entryFileNames: 'assets/js/[name].[hash].js'
      }
    }
  },
  server: {
    headers: {
      'Content-Type': 'application/javascript'
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  }
})
