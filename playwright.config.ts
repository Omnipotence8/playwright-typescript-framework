import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './src/tests',
  
  use: {
    
    actionTimeout: 0,
    baseURL: "https://api.github.com",
        extraHTTPHeaders: {
           'Accept': 'application/vnd.github.v3+json',
            // 'Authorization': `token ${process.env.API_TOKEN}`,
            "Authorization": "Bearer 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",
        },
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],

};

export default config;