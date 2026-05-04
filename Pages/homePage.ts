import { Page, Locator, expect } from '@playwright/test';

export class homePage{

    readonly page: Page;
    readonly pageTitleTxt: Locator;
    readonly homePageItems: Locator;


    constructor(page: Page) {
        this.page = page;
        this.pageTitleTxt = page.locator('//a//img[@src="/Themes/DefaultClean/Content/images/logo.png"]');
        this.homePageItems = page.locator('//h2//a');
    }

    async goto() {
        await this.page.goto('/');
    }

    async isLogoVisible() {
        return await this.pageTitleTxt.isVisible();
    }

    async getHomePageItemsCount() {
        return await this.homePageItems.count();
    }


}