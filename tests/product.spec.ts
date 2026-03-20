import { test, expect } from '@playwright/test';
import { ProductsPage } from '../Pages/productsPage';
import { logPass, logFail } from '../utils/logger';

test('Validate the Product Page Title & number of Products', async ({ page }, testInfo) => {

    const tcId = '001';
    const tcName = testInfo.title;
    try {
        const productsPage = new ProductsPage(page);

        await productsPage.verifyPage();
        await productsPage.verifyNumberOfItemsInHomePage();
        logPass(tcId, tcName);
    } catch (error) {
        logFail(tcId, tcName, error);
        throw error
    }

});
