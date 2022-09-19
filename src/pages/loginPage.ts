import { Page,expect } from "@playwright/test";

const LocatEmail = "input[name='email']";
const LocatPassword = "input[name='password']";
const LocatLoginBtn = "input[value='Login']";
const LocatWarning = "//div[contains(@class,'alert alert-danger')]";

export default class LoginPage {

    constructor(public page: Page) { }

    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterLoginPassword(password);
        await this.clickLoginBtn();
    }

    async enterEmail(emailaddress: string) {
        await this.page.locator(LocatEmail)
            .type(emailaddress);
    }

    async enterLoginPassword(password: string) {
        await this.page.locator(LocatPassword)
            .type(password);
    }

    async clickLoginBtn() {
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click(LocatLoginBtn)
        ])
    }

    async Warning() {
        expect(this.page.locator(LocatWarning))
        .toContainText("Warning: No match for E-Mail Address and/or Password.");
    }

    async WarningSecond() {
        expect(this.page.locator(LocatWarning))
        .toContainText("Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.");
    }

}