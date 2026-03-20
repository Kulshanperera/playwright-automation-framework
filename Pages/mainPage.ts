import { Page, Locator } from '@playwright/test';

export class MainPage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }
}