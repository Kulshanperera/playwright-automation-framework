import { Page, Locator, expect } from '@playwright/test';
import { generateUser, saveUser, clearUsers } from '../utils/testDataHelper';

export class userRegisteration {


    private getUser() {

        return generateUser();
    }

    readonly page: Page;
    readonly registerPageTitle: Locator;
    readonly selectMaleGender: Locator;
    readonly fillFirstName: Locator;
    readonly fillLastName: Locator;
    readonly fillEmail: Locator;
    readonly fillPassword: Locator;
    readonly fillConfirmPassword: Locator;
    readonly clickRegisterButton: Locator;
    readonly emailErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.registerPageTitle = page.locator('//h1');
        this.selectMaleGender = page.locator('#gender-male');
        this.fillFirstName = page.locator('#FirstName');
        this.fillLastName = page.locator('#LastName');
        this.fillEmail = page.locator('#Email');
        this.fillPassword = page.locator(`#Password`);
        this.fillConfirmPassword = page.locator(`#ConfirmPassword`);
        this.clickRegisterButton = page.locator(`#register-button`);
        this.emailErrorMessage = page.locator(`//span[contains(text(),'Wrong email')]`);
    }


    async userSelectGender() {
        await this.selectMaleGender.check();
    }

    async registerUser() {

        const user = this.getUser();
        saveUser(user);
        await this.fillFirstName.fill(user.firstName);
        await this.fillLastName.fill(user.lastName);
        await this.fillEmail.fill(user.email);
        await this.fillPassword.fill(user.password);
        await this.fillConfirmPassword.fill(user.password);
        await this.clickRegisterButton.click();
    }

    async registerUserFirstNameNegative(invalidName: string) {

        const user = this.getUser();
        await this.fillFirstName.fill(invalidName);
        await this.fillLastName.fill(user.lastName);
        await this.fillEmail.fill(user.email);
        await this.fillPassword.fill(user.password);
        await this.fillConfirmPassword.fill(user.password);
        await this.clickRegisterButton.click();
    }


    async registerUserEmailNegative(invalidEmail: string) {
        await clearUsers();
        const user = this.getUser();
        await saveUser(user);
        await this.fillFirstName.fill(user.firstName);
        await this.fillLastName.fill(user.lastName);
        await this.fillEmail.fill(invalidEmail);
        await this.fillPassword.fill(user.password);
        await this.fillConfirmPassword.fill(user.password);
        await this.clickRegisterButton.click();
        await this.verifyEmailError();
    }
    async verifyEmailError() {
        await expect(this.emailErrorMessage).toHaveText('Wrong email');
    }
}