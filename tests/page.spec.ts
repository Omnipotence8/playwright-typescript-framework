import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config({
  path:`.env.test`,
  override: true
});

test('homepage analysis', async ({ page }) => {
  console.log(process.env.SEARCH);
  console.log(process.env.SEARCH_RESULT);
  await page.goto('/');
  await expect(page).toHaveTitle(/Grinfer/);
  expect(await page.title()).toBe('Top Online Courses | Grinfer');
  const getStarted = page.locator('text=Log In');
  await expect(getStarted).toHaveAttribute('href', '/sign-in')
  await page.locator('text=Try for Free').first().click();
  await expect(page).toHaveURL('https://grinfer.com/subscription');
  await page.goto('/');
  await expect(page).toHaveTitle(/Grinfer/);
  await page.locator('text=Create account').click();
  await expect(page).toHaveURL('https://grinfer.com/sign-up');
  await page.locator('text=I\'m a tutor').click();
  await page.goto('/');
  await expect(page).toHaveTitle(/Grinfer/);
  await page.locator('[placeholder="What do you want to learn today\\?"]').click();
  await page.locator('[placeholder="What do you want to learn today\\?"]').fill(process.env.SEARCH);
  await page.locator('text=Search').click();
  await expect(page).toHaveURL(process.env.SEARCH_RESULT);
});

test('SEARCH RESULT analysis', async ({ page }) => {
  await page.goto(process.env.SEARCH_RESULT);
  await page.locator('button:has-text("Topic")').click();
  await page.locator('text=Lifestyle').first().click();
  await expect(page).toHaveURL('https://grinfer.com/search?page=1&query=courses%20for%20me&categories=8c7ed4fd-2963-4e17-9073-735e1bdb3822');
  await page.locator('button:has-text("Sort by: Popular")').click();
  await page.locator('text=Date').click();
  await expect(page).toHaveURL('https://grinfer.com/search?page=1&query=courses%20for%20me&categories=8c7ed4fd-2963-4e17-9073-735e1bdb3822&sort=createdAt&direction=DESC');
});


test('health and fitness analysis', async ({ page }) => {
  await page.goto(process.env.HEALTH_FITNESS);
  await page.locator('button:has-text("Sort by: Popular")').click();
  await page.locator('text=Date').click();
  await expect(page).toHaveURL('https://grinfer.com/courses/health-and-fitness?sort=createdAt&direction=DESC');
  await page.locator('text=Next').click();
  await expect(page).toHaveURL('https://grinfer.com/courses/health-and-fitness?sort=createdAt&direction=DESC&page=2');
  await page.locator('h1:has-text("Health & Fitness Courses")').click();
  await page.locator('.sc-beq3f1-5').click();
  await page.locator('#topics-sidebar-container-id >> text=Lifestyle').click();
  await expect(page).toHaveURL('https://grinfer.com/courses/lifestyle');

});

test('LogIn from .env.test', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Grinfer/);
  const getStarted = page.locator('text=Log In');
  await expect(getStarted).toHaveAttribute('href', '/sign-in');
  await getStarted.click();
  await expect(page).toHaveURL(/.*sign-in/);
  await page.locator('#email').fill(process.env.USERNAME);
  await page.locator('#password').fill(process.env.PASSWORD);
  await page.locator('.sc-p4qn9p-0.guvpYR').click();
  await expect(page).toHaveURL(/.*subscription/);
});

