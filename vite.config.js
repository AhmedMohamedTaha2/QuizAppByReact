import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite"; // استيراد plugin Tailwind CSS

export default defineConfig({
  plugins: [
    tailwindcss(), // إضافة plugin Tailwind CSS لقائمة الـ plugins
  ],
});
