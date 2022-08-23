import { test } from '@playwright/test';
import type { PlaywrightTestConfig } from '@playwright/test';
import dotenv from 'dotenv';
// import path from 'path';

test('good example from Playwright ', async ({ page }) => {
  dotenv.config();

// // Alternatively, read from "../my.env" file.
// dotenv.config({ path: path.resolve(__dirname, '..', 'my.env') });

const config: PlaywrightTestConfig = {
  use: {
    baseURL: process.env.STAGING === '1' ? 'http://staging.example.test/' : 'http://example.test/',
  }
};
});
