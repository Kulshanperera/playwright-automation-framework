import { Page, Locator } from '@playwright/test';
import { MainPage } from './mainPage';

export class FormPage extends MainPage {

    readonly firstNameField: Locator;

    constructor(page: Page) {
        super(page);

        this.firstNameField = page.locator('#firstName');
    }

    async enterFirstName(firstName: string) {
        await this.fillText(this.firstNameField, firstName);
    }

    async fillForm(firstName: string) {
        await this.enterFirstName(firstName);
    }
}