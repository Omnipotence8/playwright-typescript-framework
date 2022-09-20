import{ chromium, test } from "@playwright/test";

test("login test demo", async ()=> {

   const browser = await chromium.launch({
    headless: false
   });
   const context = await browser.newContext();
   const page = await context.newPage();
   
   await page.goto("" + process.env.URLLAMBDA)
   await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
   // await page.click("text=Login")
   await page.click("'Login'")
    await page.fill("input[name='email']", "koushik350@gmail.com")
    await page.fill("input[name='password']", "Pass123$")
    await page.click("input[value='Login']");

    await page.waitForTimeout(5000);
    
    // I open the page in the previous context for this page, cookies/cache work From the previous page
    const page1 = await context.newPage();
    await page1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")

    await page1.waitForTimeout(5000);
    
    // using the new context I don't have cookies/cache so I'm not logging in
    const newContext = await browser.newContext()
    const newPage = await newContext.newPage();
    await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")

    await newPage.waitForTimeout(5000);
})