import { devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './src/tests',
  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    baseURL: 'https://grinfer.com/',
    actionTimeout: 0,
  //   baseURL: "https://api.github.com",
  //       extraHTTPHeaders: {
  //          'Accept': 'application/vnd.github.v3+json',
  //           // 'Authorization': `token ${process.env.API_TOKEN}`,
  //           "Authorization": "Bearer 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",
  // },
  },
  retries: 0,
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
}], ["html", {
    open: "never"
}]],

projects: [
  {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
    },
  },
],
}
export default config