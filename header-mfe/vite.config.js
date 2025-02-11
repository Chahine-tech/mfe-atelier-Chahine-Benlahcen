// header-mfe/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'header',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/components/Header.jsx'
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: false
        },
        'react-dom': {
          singleton: true,
          requiredVersion: false
        }
      }
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    outDir: 'dist',
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: '[name].js'
      }
    }
  },
  server: {
    port: 5001,
    cors: true,
    strictPort: true,
    origin: 'http://localhost:5001'
  },
  preview: {
    port: 5001,
    strictPort: true,
    cors: true
  }
})