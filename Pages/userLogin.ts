import { Page, Locator, expect } from '@playwright/test';

export class userLogin{

    readonly page: Page;
    readonly loginButton: Locator;
    readonly loginPageTitle: Locator;
    readonly registerButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.loginButton = page.locator("//a[@class='ico-login']");
        this.loginPageTitle = page.locator("//h1[contains(text(),'Welcome, Please Sign In!')]");
        this.registerButton = page.getByRole('button',{name:'Register'});

    }

    async clickLoginButton(){
         await this.loginButton.click();
    }

    async clickRegisterButton(){
        await this.registerButton.click();
    
    }


}