import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    host: true,
    // port: 3001,
  },
  resolve: {
    alias: {
      "@": "/src", // 将 "/src" 目录映射到 "@"
    },
  },
});
