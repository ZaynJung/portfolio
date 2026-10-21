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
        project1: fileURLToPath(new URL("./project-1.html", import.meta.url)),
        project2: fileURLToPath(new URL("./project-2.html", import.meta.url)),
        project3: fileURLToPath(new URL("./project-3.html", import.meta.url)),
      },
    },
  },
});
