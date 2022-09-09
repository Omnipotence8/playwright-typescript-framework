import { expect, test } from "@playwright/test";
import LoginPage from "../pages/loginPage";

const email = "MilaKamila@mailinator.com";
const password = "MilaKamila@123";
test.describe("Page object test for Login", async () => {

    test("Correct Login", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.enterEmail(email);
        await login.enterLoginPassword(password);
        await login.clickLoginBtn();
        expect(await page.title()).toBe("My Account");
    })
})