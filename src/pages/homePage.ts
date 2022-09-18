import { Page } from "@playwright/test";

const Special = "(//span[contains(text(),'Special')]/../..)[2]";
const Blog = "//span[text()[normalize-space()='Blog']]";
export default class HomePage {

constructor(public page: Page) {}

   async clickOnSpecialHotMenu() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click(Special)
        ])
    }

    async clickOnBlogMenu() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click(Blog)
        ])
    }
}