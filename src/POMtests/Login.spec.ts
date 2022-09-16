import { expect, test } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import dotenv from 'dotenv';
dotenv.config({
  path:`.env.test`,
  override: true
});
export const email = process.env.POM_EMAIL;
export const password = process.env.POM_PASSWORD;
test.describe("Page object test for Login", async () => {

    test("Correct Login", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.enterEmail(email);
        await login.enterLoginPassword(password);
        await login.clickLoginBtn();
        expect(await page.title()).toBe("My Account");
    })

    test("Without email Login", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.enterLoginPassword(password);
        await login.clickLoginBtn();
        await login.Warning1();
    })

    test("Without password Login", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.enterEmail(email);
        await login.clickLoginBtn();
        await login.Warning();
    })
})