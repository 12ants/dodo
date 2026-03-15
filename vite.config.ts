import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5137,
    allowedHosts: true,
    host: true,
  },
})
