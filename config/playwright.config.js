const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  fullyParallel: true,

  workers: 4,

  timeout: 30000,

  expect: {
    timeout: 5000
  },

 use: {
  baseURL: process.env.BASE_URL || 'https://simple-books-api.glitch.me',

  headless: false,

  screenshot: 'only-on-failure',

  video: 'retain-on-failure',

  trace: 'on-first-retry',

  extraHTTPHeaders: {
    'Content-Type': 'application/json'
  }
},

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' }
    }
  ]
});