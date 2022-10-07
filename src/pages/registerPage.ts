import { Page, expect } from "@playwright/test";

const LocatFirstName = "#input-firstname";
const LocatLastName = "input[name='lastname']";
const LocatEmail = "input[name='email']";
const LocatTelephone = "input[name='telephone']";
const LocatPassword = "input[name='password']";
const LocatConfirPassword = "input[name='confirm']";
const LocatCheck = "#input-newsletter-no";
const LocatPrivacy = "//label[@for='input-agree']";
const LocatContinue = "input[value='Continue']";

const LocatWithoutDangers = ".text-danger";
const LocatDangerFirstName = "//input[@name='firstname']/following-sibling::div[1]";
const LocatDangerLastName = "//input[@name='lastname']/following-sibling::div[1]";
const LocatDangerEmail = "//input[@name='email']/following-sibling::div[1]";
const LocatDangerTelephone = "//input[@name='telephone']/following-sibling::div[1]";
const LocatDangerPassword = "//input[@name='password']/following-sibling::div[1]";

export default class RegisterPage {


    constructor(public page: Page) { }
    
    async enterFirstName(firstname: string) {
        await this.page.locator(LocatFirstName)
            .type(firstname);
    }
    async enterLastName(lastname: string) {
        await this.page.locator(LocatLastName)
            .type(lastname);
    }
    async enterEmail(email: string) {
        await this.page.locator(LocatEmail)
            .type(email);
    }

    async enterTelephone(phone: string) {
        await this.page.locator(LocatTelephone)
            .type(phone);
    }

    async enterPassword(password: string) {
        await this.page.locator(LocatPassword)
            .type(password);
    }

    async enterConfirmPassword(password: string) {
        await this.page.locator(LocatConfirPassword)
            .type(password);
    }


    isSubscribeChecked() {
        return this.page.locator(LocatCheck);
    }

    async clickTermandConditon() { 
        await this.page.click(LocatPrivacy)
    }

    async clickContinueToRegister() { 
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"networkidle"}),
            this.page.click(LocatContinue)
        ])
    }

    

    async WithoutDangers() { 
        await expect(this.page.locator (LocatWithoutDangers)).not.toBeVisible();
    }

    async TextDangerFirstName() { 
        expect(this.page.locator(LocatDangerFirstName)).toContainText("First Name must be between 1 and 32 characters!");
    }
    
    async TextDangerLastName() { 
        expect(this.page.locator(LocatDangerLastName)).toContainText("Last Name must be between 1 and 32 characters!");
    }

    async TextDangerEmail() { 
        expect(this.page.locator(LocatDangerEmail)).toContainText("E-Mail Address does not appear to be valid!");
    }

    async TextDangerTelephone() { 
        expect(this.page.locator(LocatDangerTelephone)).toContainText("Telephone must be between 3 and 32 characters!");
    }

    async TextDangerPassword() { 
        expect(this.page.locator(LocatDangerPassword)).toContainText("Password must be between 4 and 20 characters!");
    }
}