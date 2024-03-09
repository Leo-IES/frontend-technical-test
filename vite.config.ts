import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@Components': '/src/components',
      '@Pages': '/src/pages',
      '@Services': '/src/services',
      '@Assets': '/src/assets',
      '@Models': '/src/models',
      '@Features': '/src/features',
    },
  },
})
