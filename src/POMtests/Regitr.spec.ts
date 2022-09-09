import { expect, test } from "@playwright/test";
import RegisterPage from "../pages/registerPage";

const email = "MilaKamila@mailinator.com";
const password = "MilaKamila@123";
test.describe("Page object test for Register Account", async () => {

    test("Correct Register Account", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE: ' + testInfo.title);

        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("Mila");
        await register.enterLastName("Kamila");
        await register.enterEmail(email);
        await register.enterTelephone("8084567890");
        await register.enterPassword(password);
        await register.enterConfirmPassword(password);
        expect(register.isSubscribeChecked()).toBeChecked();
        await register.clickTermandConditon();
        await register.clickContinueToRegister();
        console.log('STATUS: ' + testInfo.status);


    })
})