import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this project from /<repo-name>/, so assets must be
  // referenced with that base path in production builds.
  base: process.env.GITHUB_ACTIONS ? '/codeChallenge_PersonalWebsite/' : '/',
  plugins: [react(), tailwindcss()]
})
