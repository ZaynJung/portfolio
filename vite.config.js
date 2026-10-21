import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL("./index.html", import.meta.url)),
        about: fileURLToPath(new URL("./about.html", import.meta.url)),
        projects: fileURLToPath(new URL("./projects.html", import.meta.url)),
      },
    },
  },
});
