import { test } from "@playwright/test";
import dotenv from 'dotenv';

dotenv.config({
  path:`.env.test`,
  override: true
});
const USER = 'omnipotence8';

test("Read API response", async ({ page }) => {
    await page.goto(`/users/${USER}`);
  
    const [response] = await Promise.all([
        page.waitForResponse(response =>
            response.status() == 200
            &&
            response.url() == "https://api.github.com/users/omnipotence8"
            &&
            response.body().then(b => {
                console.log(b);
                return b.includes("Omnipotence8")
            })
        ),
    
    ])
    
    console.log('RESPONSE ' + (await response.body()));

})