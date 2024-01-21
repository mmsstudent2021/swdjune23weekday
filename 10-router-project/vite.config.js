import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsonServer from "vite-plugin-json-server";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // jsonServer({
    //   delay: 3000,
    // }),
    react(),
  ],
});
