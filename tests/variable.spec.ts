import type { PlaywrightTestConfig } from '@playwright/test';
import dotenv from 'dotenv';
// import path from 'path';

// Read from default ".env" file.
dotenv.config();

// // Alternatively, read from "../my.env" file.
// dotenv.config({ path: path.resolve(__dirname, '..', 'my.env') });

const config: PlaywrightTestConfig = {
  use: {
    baseURL: process.env.STAGING === '1' ? 'http://staging.example.test/' : 'http://example.test/',
  }
};
export default config;