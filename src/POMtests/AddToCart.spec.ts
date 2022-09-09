import { expect, test } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import SpecialHotPage from "../pages/specialHotPage";

const email = "MilaKamila@mailinator.com";
const password = "MilaKamila@123";
test.describe("Page object test demo", async () => {

    test("Add to cart test_03", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        const homePage = new HomePage(page);
        const special = new SpecialHotPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.login(email, password);
        await homePage.clickOnSpecialHotMenu();
        await special.addFirstProductToTheCart();
        const isCartVisible = await special.isToastVisible();
        expect(isCartVisible).toBeVisible();
    })
})