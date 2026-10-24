import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import dts from 'unplugin-dts/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    dts({
      processor: 'vue',
      tsconfigPath: './tsconfig.app.json',
      // bundleTypes: true,
    }),
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
