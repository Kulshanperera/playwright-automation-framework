import { test, expect } from '@playwright/test';
import { homePage } from '../Pages/homePage';
import { userLogin } from '../Pages/userLogin';
import { userRegisteration } from '../Pages/userRegisteration';
import { logPass, logFail } from '../utils/logger';
import { generateUser, saveUser, clearUsers } from '../utils/testDataHelper';
import { invalidFirstName, invalidLastName, invalidEmail } from '../utils/testData';



test.skip('Validate the Product Page Title & number of Products', { tag: ['@regression'] }, async ({ page }, testInfo) => {

    const tcId = '001';
    const tcName = testInfo.title;

    try {
        const home = new homePage(page);

        await home.goto();

        await expect(await home.isLogoVisible()).toBeTruthy();

        const count = await home.getHomePageItemsCount();
        expect(count).toBe(6);

        logPass(tcId, tcName);

    } catch (error) {
        logFail(tcId, tcName, error);
        throw error;
    }
});

test('Register user', { tag: ['@regression'] }, async ({ page }, testInfo) => {

    const tcId = '002';
    const tcName = testInfo.title;

    try {
        const home = new homePage(page);
        const login = new userLogin(page);
        const register = new userRegisteration(page);


  
        await home.goto();
        await login.clickLoginButton();
        await expect(login.loginPageTitle).toBeVisible();
        await login.clickRegisterButton();
        await expect(register.registerPageTitle).toBeVisible();
        await register.userSelectGender();
        await expect(register.selectMaleGender).toBeChecked();

        for (const testCase of invalidEmail) {
            await register.registerUserEmailNegative(testCase.value);
        }
        logPass(tcId, tcName);

    } catch (error) {
        logFail(tcId, tcName, error);
        throw error;
    }
});