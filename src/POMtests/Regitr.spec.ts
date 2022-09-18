import { expect, test } from "@playwright/test";
import RegisterPage from "../pages/registerPage";
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

    test("Correct Register Account", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE: ' + testInfo.title);

        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName(name);
        await register.enterLastName(lastname);
        await register.enterEmail(email);
        await register.enterTelephone(phone);
        await register.enterPassword(password);
        await register.enterConfirmPassword(password);
        expect(register.isSubscribeChecked()).toBeChecked();
        await register.clickTermandConditon();
        await register.clickContinueToRegister();
        const locator = page.locator('.text-danger');
        await expect(locator).not.toBeVisible();
        console.log('STATUS: ' + testInfo.status);
    })

    test("32 characters Register Account", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE: ' + testInfo.title);

        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("3b2VwwPAUdzDOdHBgTxucg8QYO21p8gb");
        await register.enterLastName(lastname);
        await register.enterEmail(email);
        await register.enterTelephone(phone);
        await register.enterPassword(password);
        await register.enterConfirmPassword(password);
        expect(register.isSubscribeChecked()).toBeChecked();
        await register.clickTermandConditon();
        await register.clickContinueToRegister();
        await register.WithoutDangers();
        console.log('STATUS: ' + testInfo.status);

    })
})

test.describe("Page object test for Error Register Account", async () => {
    test("0 characters Register Account", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE: ' + testInfo.title);

        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("");
        await register.enterLastName(lastname);
        await register.enterEmail(email);
        await register.enterTelephone(phone);
        await register.enterPassword(password);
        await register.enterConfirmPassword(password);
        expect(register.isSubscribeChecked()).toBeChecked();
        await register.clickTermandConditon();
        await register.clickContinueToRegister();
        await register.TextDangerFirstName();
        console.log('STATUS: ' + testInfo.status);
    })

    test("33 characters Register Account", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE: ' + testInfo.title);

        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("qBs6YHtsLCRRAUaVDpSlxktpQpv5w3wew");
        await register.enterLastName(lastname);
        await register.enterEmail(email);
        await register.enterTelephone(phone);
        await register.enterPassword(password);
        await register.enterConfirmPassword(password);
        expect(register.isSubscribeChecked()).toBeChecked();
        await register.clickTermandConditon();
        await register.clickContinueToRegister();
        await register.TextDangerFirstName();
        console.log('STATUS: ' + testInfo.status);
    })

    test("Without E-Mail and Password Register Account", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE: ' + testInfo.title);

        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("qBs6YHtsLCRRAUaVDpSlxktpQpv5w3we");
        await register.enterLastName(lastname);
        await register.enterTelephone(phone);
        expect(register.isSubscribeChecked()).toBeChecked();
        await register.clickTermandConditon();
        await register.clickContinueToRegister();
        await register.TextDangerEmail();
        await register.TextDangerPassword();
        console.log('STATUS: ' + testInfo.status);
    })
})