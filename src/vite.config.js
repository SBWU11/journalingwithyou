import { defineConfig } from 'vite'

export default defineConfig({
  base: '/journalingwithyou/', // Updated to match your repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    open: true
  }
})
