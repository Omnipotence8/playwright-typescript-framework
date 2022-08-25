import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://grinfer.com/');
  await expect(page).toHaveTitle(/Grinfer/);
  expect(await page.title()).toBe('Top Online Courses | Grinfer');
  const getStarted = page.locator('text=Log In');
  await expect(getStarted).toHaveAttribute('href', '/sign-in')
  await page.locator('text=Try for Free').first().click();
  await expect(page).toHaveURL('https://grinfer.com/subscription');
  await page.goto('https://grinfer.com/');
  await expect(page).toHaveTitle(/Grinfer/);
  await page.locator('text=Create account').click();
  await expect(page).toHaveURL('https://grinfer.com/sign-up');
  await page.locator('text=I\'m a tutor').click();
  await page.goto('https://grinfer.com/');
  await expect(page).toHaveTitle(/Grinfer/);
  await page.locator('[placeholder="What do you want to learn today\\?"]').click();
  await page.locator('[placeholder="What do you want to learn today\\?"]').fill('courses for me');
  await page.locator('text=Search').click();
  await expect(page).toHaveURL('https://grinfer.com/search?page=1&query=courses+for+me');
  await page.locator('button:has-text("Topic")').click();
  await page.locator('text=Lifestyle').first().click();
  await expect(page).toHaveURL('https://grinfer.com/search?page=1&query=courses%20for%20me&categories=8c7ed4fd-2963-4e17-9073-735e1bdb3822');
  await page.locator('button:has-text("Sort by: Popular")').click();
  await page.locator('text=Date').click();
  await expect(page).toHaveURL('https://grinfer.com/search?page=1&query=courses%20for%20me&categories=8c7ed4fd-2963-4e17-9073-735e1bdb3822&sort=createdAt&direction=DESC');
});