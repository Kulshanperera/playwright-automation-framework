import { test, expect } from '@playwright/test';
import { FormPage } from '../Pages/formPage';

test('Validate the form behaviour', async ({ page }) => {

    const formPage = new FormPage(page);

    await formPage.navigateTo('https://demoqa.com/automation-practice-form');

    await formPage.fillForm('Thilith');

    await expect(page.locator('#firstName')).toHaveValue('Thilith');

});