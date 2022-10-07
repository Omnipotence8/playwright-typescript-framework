import { test, expect } from "@playwright/test";
import dotenv from 'dotenv';

dotenv.config({
 path:`.env.test`,
 override: true
});
export const USER = process.env.USER;

test('Get', async ({ request }) => {
    const response = await request.get('https://api.github.com/users/omnipotence8', {});
    console.log(await response.json());
    expect(response.status()).toBe(200);
  });
test('Read API response', async ({ request }) => {
    const response = await request.get(`/users/${USER}`)
    expect(response.status()).toBe(200)
    const body = JSON.parse(await response.text())
    expect(body.id).toBe(45335405)
    expect(body.type).toBe('User')
  });
     
 