import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(async () => {
  const { default: tailwindcss } = await import('tailwindcss');
  const { default: autoprefixer } = await import('autoprefixer');

  return {
    plugins: [react()],
    css: {
      postcss: {
        plugins: [
          tailwindcss(),
          autoprefixer(),
        ],
      },
    },
  };
});
