import { Page, Locator, expect } from '@playwright/test';
import { MainPage } from './mainPage';

export class ProductsPage extends MainPage {

    readonly pageTitleTxt: Locator;
    readonly homePageItems: Locator;

    constructor(page: Page) {
        super(page);

        this.pageTitleTxt = page.locator('//a//img[@src="/Themes/DefaultClean/Content/images/logo.png"]');
        this.homePageItems = page.locator('//h2//a');
    }


    async verifyPage() {

        await this.navigateTo('https://demowebshop.tricentis.com/');
        await expect(this.pageTitleTxt).toBeVisible();
    }

    async verifyNumberOfItemsInHomePage() {
        await expect(this.homePageItems).toHaveCount(6); // exact

        const count = await this.homePageItems.count();
        console.log(`Total items: ${count}`);
    }

}