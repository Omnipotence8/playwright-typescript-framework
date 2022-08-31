import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({
  path:`.env.test`,
  override: true
 });
 export const USER = process.env.USER;
 export const REPO = process.env.REPO;

test.beforeAll(async ({ request }) => {
  // Create a new repository
  const response = await request.post('/user/repos', {
    data: {
      name: REPO
    }
  });
console.log(response.body)
expect(response.ok()).toBeTruthy();
});

test('should create a bug report', async ({ request }) => {
  const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
    data: {
      title: '[BUG]Begging you',
      body: 'I beg you (the test) to run',
    }
  });
  expect(newIssue.ok()).toBeTruthy();

  const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
  // expect(issues.ok()).toBeTruthy();
  expect(await issues.json()).toContainEqual(expect.objectContaining({
    title: '[BUG]Begging you',
    body: 'I beg you (the test) to run'
  }));
});
test('should create a feature request', async ({ request }) => {
  const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
    data: {
      title: '[Feature] always and forever',
      body: 'Feature works always and forever',
    }
  });
  expect(newIssue.ok()).toBeTruthy();

  const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
  // expect(issues.ok()).toBeTruthy();
  expect(await issues.json()).toContainEqual(expect.objectContaining({
    title: '[Feature] always and forever',
    body: 'Feature works always and forever'
  }))
});
test.afterAll(async ({ request }) => {
  const response = await request.delete(`/repos/${USER}/${REPO}`);
  expect(response.ok()).toBeTruthy();
});
