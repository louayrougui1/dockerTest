import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Explicitly set to localhost
    port: 5173,
    strictPort: true, // Fail if port is already in use
  },
});
