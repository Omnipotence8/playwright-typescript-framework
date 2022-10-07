import { expect, test } from "../pages/pomFixture";
// import LoginPage from "../pages/loginPage";
// import HomePage from "../pages/homePage";
// import SpecialHotPage from "../pages/specialHotPage";
import dotenv from 'dotenv';
dotenv.config({
  path:`.env.test`,
  override: true
});
export const email = process.env.POM_EMAIL;
export const password = process.env.POM_PASSWORD;

test.describe("Page object test demo", async () => {

    test("Add to cart test", async ({ page, loginPage, homePage, specialPage}) => {
        // const login = new LoginPage(page);
        // const homePage = new HomePage(page);
        // const special = new SpecialHotPage(page);
        await page.goto(`?route=account/login`);
        await loginPage.login(email, password);
        await homePage.clickOnSpecialHotMenu();
        await specialPage.addFirstProductToTheCart();
        const isCartVisible = await specialPage.isToastVisible();
        expect(isCartVisible).toBeVisible();
    })
})