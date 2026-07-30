import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Deliberately no `sourcemap` setting. Lighthouse flags "Missing source maps for
    // large first-party JavaScript", but that audit is unscored and satisfying it means
    // publishing readable source for the whole app. If you later add error tracking
    // (Sentry etc.), use `sourcemap: 'hidden'` and upload the maps there instead of
    // serving them.
    rollupOptions: {
      output: {
        // Split the rarely-changing vendor code out of the entry chunk so it stays
        // cached across deploys instead of being invalidated by every app change.
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-socket': ['socket.io-client'],
          'vendor-i18n': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
        },
      },
    },
  },
})
