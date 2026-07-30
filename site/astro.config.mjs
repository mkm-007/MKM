// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://mkm-007.github.io",
  base: "/MKM",
  vite: {
    plugins: [tailwindcss()],
  },
});
