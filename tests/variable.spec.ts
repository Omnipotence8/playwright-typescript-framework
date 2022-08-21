import { test, expect } from '@playwright/test';
import type { PlaywrightTestConfig } from '@playwright/test';
import dotenv from 'dotenv';

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  dotenv.config();

// Alternatively, read from "../my.env" file.
// dotenv.config({ path: path.resolve(__dirname, '..', 'my.env') });

const config: PlaywrightTestConfig = {
  use: {
    baseURL: process.env.STAGING === '1' ? 'http://staging.example.test/' : 'http://example.test/',
  }
};
});
