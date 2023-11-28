const { test, expect, request } = require('@playwright/test');
const {LoginPage} =require('./LoginPage')

test('Verify the login with Page object', async ({ page }) => {
    const username = "nanncykevin@gmail.com";
    const password = "Testing@123";
    const loginPage =new LoginPage(page);
    loginPage.goTo();
    loginPage.validLogin(username,password);
    await page.locator('.sign_in_detail').click()
    await page.pause()
});

//npx playwright test ./pageobjects/ClientappPO.spec.js