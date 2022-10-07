import { expect, test } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import SpecialHotPage from "../pages/specialHotPage";
import dotenv from 'dotenv';
dotenv.config({
  path:`.env.test`,
  override: true
});
export const email = process.env.POM_EMAIL;
export const password = process.env.POM_PASSWORD;

test.describe("Page object test demo", async () => {

    test("Add to cart test", async ({ page}) => {
        const login = new LoginPage(page);
        const homePage = new HomePage(page);
        const special = new SpecialHotPage(page);
        await page.goto(`?route=account/login`);
        await login.login(email, password);
        await homePage.clickOnSpecialHotMenu();
        await special.addFirstProductToTheCart();
        const isCartVisible = await special.isToastVisible();
        expect(isCartVisible).toBeVisible();
    })
})