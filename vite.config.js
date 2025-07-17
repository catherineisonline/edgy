import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  server: {
    historyApiFallback: true,
  },
  css: {
    minify: "esbuild",
  },
  build: {
    cssCodeSplit: true,
  },
});
