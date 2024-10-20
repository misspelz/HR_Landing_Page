import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "src/assets"),
      "@layout": resolve(__dirname, "src/layouts/"),
      "@components": resolve(__dirname, "src/components"),
      "@pages": resolve(__dirname, "src/pages"),
      "@types": resolve(__dirname, "src/types"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@utils": resolve(__dirname, "src/utils"),
    },
  },
})
