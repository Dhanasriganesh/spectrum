import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Uncomment and update the proxy target if you want to proxy to a deployed serverless function
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://your-deployed-function.vercel.app',
  //       changeOrigin: true,
  //     }
  //   }
  // }
})
