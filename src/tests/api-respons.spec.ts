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
        page.waitForResponse(res =>
            res.status() == 200
            &&
            res.body().then(b => {
                console.log(b);
                return b.includes("User")
            })
        ),
    
    ])
    
    console.log('RESPONSE ' + (await response.body()));

})