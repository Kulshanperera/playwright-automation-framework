import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

// Load .env variables
const env = process.env.TEST_ENV || 'qa';
dotenv.config({path:`.env.${env}` });
console.log(`BASE_URL loaded:`, process.env.BASE_URL);  // Debug line

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : 2,

  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],

  timeout: 60000,
  globalTimeout: 20000,
  expect: {
    timeout: 15000, // 15 seconds default for all assertions
  },
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

});
