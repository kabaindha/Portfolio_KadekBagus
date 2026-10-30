import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this project from /<repo-name>/, so assets must be
  // referenced with that base path in production builds. The repo name is read
  // from the Actions environment so renaming the repo doesn't break the deploy.
  base: process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
    : '/',
  plugins: [react(), tailwindcss()]
})
