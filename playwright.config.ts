import type { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  testDir: './src/tests',
  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    baseURL: 'https://grinfer.com/'
  },
  retries: 0,
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
}], ["html", {
    open: "never"
}]]
};

export default config;