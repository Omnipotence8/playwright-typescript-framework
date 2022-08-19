import { test, expect } from '@playwright/test';

test('homepage has Grinfer in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Grinfer/);
  const getStarted = page.locator('text=Log In');
  await expect(getStarted).toHaveAttribute('href', '/sign-in');
  await getStarted.click();
  await expect(page).toHaveURL(/.*sign-in/);
});