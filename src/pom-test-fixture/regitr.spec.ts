import { expect, test } from "../pages/pomFixture";
// import { expect, test } from "@playwright/test";
// import RegisterPage from "../pages/registerPage";
import dotenv from 'dotenv';
dotenv.config({
    path:`.env.test`,
    override: true
  });

export const email = process.env.POM_EMAIL;
export const password = process.env.POM_PASSWORD;
export const name = process.env.First_Name;
export const lastname = process.env.Last_Name;
export const phone = process.env.TELEPHONE;

test.describe("Page object test for Success Register Account", async () => {

    test("Correct Register Account", async ({ page, registerPage }, testInfo) => {
        console.log('TITLE: ' + testInfo.title);

        // const register = new RegisterPage(page);
        await page.goto(`?route=account/register`);
        await registerPage.enterFirstName(name);
        await registerPage.enterLastName(lastname);
        await registerPage.enterEmail(email);
        await registerPage.enterTelephone(phone);
        await registerPage.enterPassword(password);
        await registerPage.enterConfirmPassword(password);
        expect(registerPage.isSubscribeChecked()).toBeChecked();
        await registerPage.clickTermandConditon();
        await registerPage.clickContinueToRegister();
        await registerPage.WithoutDangers();
        console.log('STATUS: ' + testInfo.status);
    })

    test("32 characters Register Account", async ({ page, registerPage }, testInfo) => {
        console.log('TITLE: ' + testInfo.title);

        // const register = new RegisterPage(page);
        await page.goto(`?route=account/register`);
        await registerPage.enterFirstName("3b2VwwPAUdzDOdHBgTxucg8QYO21p8gb");
        await registerPage.enterLastName(lastname);
        await registerPage.enterEmail(email);
        await registerPage.enterTelephone(phone);
        await registerPage.enterPassword(password);
        await registerPage.enterConfirmPassword(password);
        expect(registerPage.isSubscribeChecked()).toBeChecked();
        await registerPage.clickTermandConditon();
        await registerPage.clickContinueToRegister();
        await registerPage.WithoutDangers();
        console.log('STATUS: ' + testInfo.status);

    })
})

test.describe("Page object test for Error Register Account", async () => {
    test("0 characters Register Account", async ({ page, registerPage }, testInfo) => {
        console.log('TITLE: ' + testInfo.title);

        // const register = new RegisterPage(page);
        await page.goto(`?route=account/register`);
        await registerPage.enterFirstName("");
        await registerPage.enterLastName(lastname);
        await registerPage.enterEmail(email);
        await registerPage.enterTelephone(phone);
        await registerPage.enterPassword(password);
        await registerPage.enterConfirmPassword(password);
        expect(registerPage.isSubscribeChecked()).toBeChecked();
        await registerPage.clickTermandConditon();
        await registerPage.clickContinueToRegister();
        await registerPage.TextDangerFirstName();
        console.log('STATUS: ' + testInfo.status);
    })

    test("33 characters Register Account", async ({ page,registerPage }, testInfo) => {
        console.log('TITLE: ' + testInfo.title);

        // const register = new RegisterPage(page);
        await page.goto(`?route=account/register`);
        await registerPage.enterFirstName("qBs6YHtsLCRRAUaVDpSlxktpQpv5w3wew");
        await registerPage.enterLastName(lastname);
        await registerPage.enterEmail(email);
        await registerPage.enterTelephone(phone);
        await registerPage.enterPassword(password);
        await registerPage.enterConfirmPassword(password);
        expect(registerPage.isSubscribeChecked()).toBeChecked();
        await registerPage.clickTermandConditon();
        await registerPage.clickContinueToRegister();
        await registerPage.TextDangerFirstName();
        console.log('STATUS: ' + testInfo.status);
    })

    test("Without E-Mail and Password Register Account", async ({ page, registerPage }, testInfo) => {
        console.log('TITLE: ' + testInfo.title);

        // const register = new RegisterPage(page);
        await page.goto(`?route=account/register`);
        await registerPage.enterFirstName("qBs6YHtsLCRRAUaVDpSlxktpQpv5w3we");
        await registerPage.enterLastName(lastname);
        await registerPage.enterTelephone(phone);
        expect(registerPage.isSubscribeChecked()).toBeChecked();
        await registerPage.clickTermandConditon();
        await registerPage.clickContinueToRegister();
        await registerPage.TextDangerEmail();
        await registerPage.TextDangerPassword();
        console.log('STATUS: ' + testInfo.status);
    })
})