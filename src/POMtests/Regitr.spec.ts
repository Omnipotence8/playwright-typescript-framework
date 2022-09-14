import { expect, test } from "@playwright/test";
import RegisterPage from "../pages/registerPage";

const email = "MilaKamila@mailinator.com";
const password = "MilaKamila@123";
test.describe("Page object test for Success Register Account", async () => {

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
        const locator = page.locator('.text-danger');
        await expect(locator).not.toBeVisible();
        console.log('STATUS: ' + testInfo.status);
    })

    test("32 characters Register Account", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE: ' + testInfo.title);

        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("3b2VwwPAUdzDOdHBgTxucg8QYO21p8gb");
        await register.enterLastName("Kamila");
        await register.enterEmail(email);
        await register.enterTelephone("8084567890");
        await register.enterPassword(password);
        await register.enterConfirmPassword(password);
        expect(register.isSubscribeChecked()).toBeChecked();
        await register.clickTermandConditon();
        await register.clickContinueToRegister();
        const locator = page.locator('.text-danger');
        await expect(locator).not.toBeVisible();
        console.log('STATUS: ' + testInfo.status);

    })
})

test.describe("Page object test for Error Register Account", async () => {
    test("0 characters Register Account", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE: ' + testInfo.title);

        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("");
        await register.enterLastName("Kamila");
        await register.enterEmail(email);
        await register.enterTelephone("8084567890");
        await register.enterPassword(password);
        await register.enterConfirmPassword(password);
        expect(register.isSubscribeChecked()).toBeChecked();
        await register.clickTermandConditon();
        await register.clickContinueToRegister();
        expect(page.locator(".text-danger")).toContainText("First Name must be between 1 and 32 characters!");
        console.log('STATUS: ' + testInfo.status);
    })

    test("33 characters Register Account", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE: ' + testInfo.title);

        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("qBs6YHtsLCRRAUaVDpSlxktpQpv5w3wew");
        await register.enterLastName("Kamila");
        await register.enterEmail(email);
        await register.enterTelephone("8084567890");
        await register.enterPassword(password);
        await register.enterConfirmPassword(password);
        expect(register.isSubscribeChecked()).toBeChecked();
        await register.clickTermandConditon();
        await register.clickContinueToRegister();
        expect(page.locator(".text-danger")).toContainText("First Name must be between 1 and 32 characters!");
        console.log('STATUS: ' + testInfo.status);
    })

    test("Without E-Mail and Password Register Account", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE: ' + testInfo.title);

        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("qBs6YHtsLCRRAUaVDpSlxktpQpv5w3we");
        await register.enterLastName("Kamila");
        await register.enterTelephone("8084567890");
        expect(register.isSubscribeChecked()).toBeChecked();
        await register.clickTermandConditon();
        await register.clickContinueToRegister();
        expect(page.locator("(//div[@class='text-danger'])[1]")).toContainText("E-Mail Address does not appear to be valid!");
        expect(page.locator("(//div[@class='text-danger'])[2]")).toContainText("Password must be between 4 and 20 characters!");
        console.log('STATUS: ' + testInfo.status);
    })
})