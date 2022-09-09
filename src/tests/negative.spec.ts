import { expect, test } from "@playwright/test";
import dotenv from 'dotenv';
dotenv.config({
  path:`.env.test`,
  override: true
});

test("login test demo", async ({ page }) => {
  await page.goto("" + process.env.URLLAMBDA);
  await page.hover(
    "//a[@data-toggle='dropdown']//span[contains(.,'My account')]"
  );

  await page.click("'Login'");
  await page.fill("input[name='email']", "koushik350@gmail.com");
  await page.fill("input[name='password']", "Pass123$");
  await page.click("input[value='Login']");
  await expect(page).toHaveURL(/.*account/);
})

test("Empty input", async ({ page }) => {

  await page.goto("" + process.env.URLLAMBDA);
  await page.hover(
    "//a[@data-toggle='dropdown']//span[contains(.,'My account')]"
  );
  await page.click("'Login'");
  page.on("dialog", async (alert) => {
    const text = alert.message();
    console.log(text);;
    const locator = page.locator('.alert.alert-danger');
    await expect(locator).toContainText('Warning: No match for E-Mail Address and/or Password');
  });
  await page.fill("input[name='email']", "");
  await page.fill("input[name='password']", "");
  await page.click("input[value='Login']");
})

test("Wrong password", async ({ page }) => {

  await page.goto("" + process.env.URLLAMBDA);
  await page.hover(
    "//a[@data-toggle='dropdown']//span[contains(.,'My account')]"
  );
  await page.click("'Login'");
  page.on("dialog", async (alert) => {
    const text = alert.message();
    console.log(text);;
    const locator = page.locator('.alert.alert-danger');
    await expect(locator).toContainText('Warning: No match for E-Mail Address and/or Password');
  });
  await page.fill("input[name='email']", "koushik350@gmail.com");
  await page.fill("input[name='password']", "Pass");
  await page.click("input[value='Login']");
})

test("Wrong email", async ({ page }) => {

  await page.goto("" + process.env.URLLAMBDA);
  await page.hover(
    "//a[@data-toggle='dropdown']//span[contains(.,'My account')]"
  );
  await page.click("'Login'");
  page.on("dialog", async (alert) => {
    const text = alert.message();
    console.log(text);;
    const locator = page.locator('.alert.alert-danger');
    await expect(locator).toContainText('Warning: No match for E-Mail Address and/or Password');
  });
  await page.fill("input[name='email']", "koushik@gmail.com");
  await page.fill("input[name='password']", "Pass123$");
  await page.click("input[value='Login']");
})