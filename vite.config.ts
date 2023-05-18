// vite.config.ts
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins: [reactRefresh()],
  css: { modules: { localsConvention: "camelCase" } },
  server: {
    proxy: {
      "/api": "http://127.0.0.1:5000",
    },
  },
});
