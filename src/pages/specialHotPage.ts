import { Page } from "@playwright/test";

const productImage = "//div[@class='image']/a";
const buttonAddCard = "(//button[@title='Add to Cart'])";
const ViewCart = "//a[.='View Cart ']";
export default class SpecialHotPage{


    constructor(public page: Page) { }

    async addFirstProductToTheCart() { 
        await this.page.hover(productImage, {
            strict: false
        });
        await this.page.locator(buttonAddCard)
            .nth(0).click();
    }
    async isToastVisible() { 
        // await this.page.waitFor
        const toast = this.page.locator(ViewCart);
        await toast.waitFor({state:"visible"})
        return toast;
    }
}