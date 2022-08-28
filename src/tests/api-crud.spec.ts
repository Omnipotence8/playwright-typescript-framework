import { test, expect } from '@playwright/test';

const REPO = 'playwright-multiple-environment';
const USER = 'omnipotence8';

test("Create an Incident", async ({ request }) => {
  const _response = await request.post(`/repos/${USER}/${REPO}/issues`, {
    data: {
      title: '[NEW] report 1',
      body: 'New Report description',
    }
  });
  expect(_response.ok()).toBeTruthy();

  const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
  expect(issues.ok()).toBeTruthy();
  expect(await issues.json()).toContainEqual(expect.objectContaining({
    title: '[NEW] report 1',
    body: 'New Report description'
  }));

  test('should create a feature request', async ({ request }) => {
    const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
      data: {
        title: '[Feature] request 1',
        body: 'Feature description',
      }
    });
    expect(newIssue.ok()).toBeTruthy();
  
    const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    expect(issues.ok()).toBeTruthy();
    expect(await issues.json()).toContainEqual(expect.objectContaining({
      title: '[Feature] request 1',
      body: 'Feature description'
    }));
  });
});