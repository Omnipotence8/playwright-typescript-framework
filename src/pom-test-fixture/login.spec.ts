import { expect, test } from "../pages/pomFixture";
// import { expect, test } from "@playwright/test";
// import LoginPage from "../pages/loginPage";
import dotenv from 'dotenv';
dotenv.config({
  path:`.env.test`,
  override: true
});
export const email = process.env.POM_EMAIL;
export const password = process.env.POM_PASSWORD;
export const warningText = process.env.WARNING

test.describe("Page object test for Login", async () => {

    test("Correct Login", async ({ page, loginPage }) => {
        await page.goto('?route=account/login');
        // const login = new LoginPage(page);
        await loginPage.enterEmail(email);
        await loginPage.enterLoginPassword(password);
        await loginPage.clickLoginBtn();
        expect(await page.title()).toBe("My Account");
    })

    test("Without email Login", async ({ page, loginPage }) => {
        // const login = new LoginPage(page);
        await page.goto(`?route=account/login`);
        await loginPage.enterLoginPassword(password);
        await loginPage.clickLoginBtn();
        await loginPage.warning(warningText);
    })

    test("Without password Login", async ({ page, loginPage}) => {
        // const login = new LoginPage(page);
        await page.goto(`?route=account/login`);
        await loginPage.enterEmail(email);
        await loginPage.clickLoginBtn();
        await loginPage.warning(warningText);
    })
})