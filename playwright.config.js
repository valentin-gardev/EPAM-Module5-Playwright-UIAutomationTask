// @ts-check
import { defineConfig, devices } from "@playwright/test";
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, ".env") });

const rpConfig = {
  apiKey: process.env.RP_TOKEN, // Loaded from your .env file
  endpoint: "https://reportportal.epam.com/api/v2", // Your ReportPortal instance API endpoint
  project: "valentin_gardev_personal", // Must match your exact project namespace (case-sensitive)
  launch: "Playwright JS Test Launch", // The execution name displayed on your dashboard
  description: "JavaScript E2E Automated regression run",
  attributes: [{ key: "env", value: "staging" }, { value: "javascript" }],
  uploadVideo: true, // Automatically uploads Playwright videos to ReportPortal on failure
  uploadTrace: true,

  // Automatically uploads Playwright trace files to ReportPortal on failure
};

export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 2,
  /* Opt out of parallel tests on CI. */
  workers: 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["list", { printSteps: true }],
    ["html", { open: "on-failure", outputFolder: "playwright-report" }],
    ["@reportportal/agent-js-playwright", rpConfig],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: true,
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
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

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
