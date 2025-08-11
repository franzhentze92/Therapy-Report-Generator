import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/generate-comments": "https://therapy-report-generator-production.up.railway.app",
      "/generate-soil-comments": "https://therapy-report-generator-production.up.railway.app",
      "/extract-soil-report": "https://therapy-report-generator-production.up.railway.app",
    },
  },
  plugins: [
    react()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
}));
