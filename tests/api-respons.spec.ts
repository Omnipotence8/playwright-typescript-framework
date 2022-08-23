import { test } from "@playwright/test";

test("Read API response", async ({ page }) => {
    await page.goto("https://letcode.in/elements");
    // verify response status | URL | Body


    const [response] = await Promise.all([
        page.waitForResponse(res =>
            res.status() == 200
            &&
            res.url() == "https://api.github.com/users/omnipotence8"
        ),
        page.fill("input[name='username']", "omnipotence8"),
        page.click("button")
    ])
    console.log('RESPONSE ' + (await response.body()));

})