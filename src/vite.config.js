import { defineConfig } from 'vite'

export default defineConfig({
  base: '/windsurf-project/', // Replace with your repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    open: true
  }
})
