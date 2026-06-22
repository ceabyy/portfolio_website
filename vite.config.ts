import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { meta } from 'vite-plugin-meta-tags'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    meta ({
      title: "Ceaby's Portfolio",
      description: "A website porfolio by and for Ceaby Kian Fernandez showcasing projects, experience and background.",
      img: null,
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
