import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/entropy-field-guide/",
  plugins: [react()],
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
