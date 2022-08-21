import { test, expect } from '@playwright/test';
import type { PlaywrightTestConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

test('My test variable from .env.test', async ({ page }) => {
  dotenv.config({
    path:`.env.test`,
    //to get the password and username from a file and not from a global variable
    override: true
  });
  console.log(process.env.USERNAME);
  console.log(process.env.PASSWORD);
  const uname = process.env.USERNAME;
  const upass = process.env.PASSWORD;

  await page.goto('/');
  await expect(page).toHaveTitle(/Grinfer/);
  const getStarted = page.locator('text=Log In');
  await expect(getStarted).toHaveAttribute('href', '/sign-in');
  await getStarted.click();
  await expect(page).toHaveURL(/.*sign-in/);
  await page.locator('#email').fill(process.env.USERNAME);
  await page.locator('#password').fill(process.env.PASSWORD);
  await page.locator('.sc-p4qn9p-0.guvpYR').click();
},
);