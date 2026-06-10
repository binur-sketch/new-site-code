import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Raise warning threshold (our app is content-heavy)
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Split large vendor bundles for better caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'supabase': ['@supabase/supabase-js'],
          'editor': ['marked', 'dompurify'],
          'animation': ['framer-motion'],
        },
      },
    },
  },
})
