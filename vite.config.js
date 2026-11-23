import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/prueba/", // <-- Añade esta línea para que cargue desde /prueba/
});
