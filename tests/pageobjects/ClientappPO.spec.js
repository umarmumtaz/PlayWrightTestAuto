// const { test, expect, request } = require('@playwright/test');
// //const {LoginPage} =require('./LoginPage')
// import {LoginPage} from ('./LoginPage')

// test('Verify the login with Page object', async ({ page }) => {
//     const username = "nanncykevin+10@gmail.com";
//     const password = "Testing@123";
//     const loginPage =new LoginPage(page);
//     loginPage.goTo();
//     loginPage.validLogin(username,password);
//     await page.locator('#signIn').click()
//     await page.pause()
// });

//npx playwright test ./pageobjects/ClientappPO.spec.js
//--------------------------------------

import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage'
test('Verify the login with Page object', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.validLogin('nanncya@gmail.com', 'Testing@123"')
    await page.locator('#signIn').click()
   // await expect(page).toHaveURL(/MyJobs/);
    await page.pause();

});
