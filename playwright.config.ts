import { devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './src/pom-test',
  use: {
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    // baseURL: 'https://grinfer.com/',
    actionTimeout: 0,
    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    //       extraHTTPHeaders: {
    //           'Accept': 'application/vnd.github.v3+json',
    //           'Authorization': `token ${process.env.API_TOKEN}`,
    //           // "Authorization": "Bearer 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",
    // },
  },
  //   retries: 0,
  reporter: [["dot"], 
  ["json", {
    outputFile: "test-result.json"
  }],
  ['allure-playwright'], 
  ["html", {
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