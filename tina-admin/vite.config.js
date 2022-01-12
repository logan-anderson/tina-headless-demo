import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {
      VITE_CLIENT_URL: process.env.VITE_CLIENT_URL,
    },
  },
  plugins: [react()],
});
