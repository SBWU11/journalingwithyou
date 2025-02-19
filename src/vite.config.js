import { defineConfig } from 'vite'

export default defineConfig({
  base: '/journalingwithyou/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html',
      },
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|mov|mp4|webm/i.test(ext)) {
            return `assets/media/[name][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
      },
    },
  },
  server: {
    open: true
  }
})
