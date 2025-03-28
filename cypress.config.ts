import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.spec.js',
    supportFile: false, 
    baseUrl: 'http://localhost:3001',
  },
})
