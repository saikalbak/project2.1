import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://saikalbak.github.io/project2.1/",
  plugins: [react()],
  server:{
    open: true,
  }
})
