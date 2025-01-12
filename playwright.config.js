// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['allure-playwright'],
    ['html', { outputFolder: 'html-report' }]
  ],
  use: {
    screenshot: 'only-on-failure',
    video: 'on',
    trace: 'on',
    headless: true,
    testTimeout: 60000,
    launchOptions: {
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
      ],
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  //  {
  //   name: 'firefox',
  //    use: { ...devices['Desktop Firefox'] },
  //  },
  //  {
    //  name: 'webkit',
    //  use: { ...devices['Desktop Safari'] },
    //},
    //{
    //  name: 'Mobile Chrome',
    // use: { ...devices['Pixel 5'] },
    //},
    //{
    //  name: 'Mobile Safari',
    //  use: { ...devices['iPhone 12'] },
    //},
    //{
    //  name: 'Microsoft Edge',
    //  use: { ...devices['Desktop Edge'], channel: 'msedge' },
    //},
    //{
    //  name: 'Google Chrome',
    //  use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    //},
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
