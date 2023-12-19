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

//npx playwright test ./PageObjectModel/ClientappPO.spec.js  --headed
//--------------------------------------

import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage'
import { ForgotPage } from './ForgotPage'
import { RegisterPage } from './RegisterPage';
test('Verify the login with Page object', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.validLogin('nanncy12@gmail.com', 'Testing@123')
    //forgot Page
    const forgotPage = new ForgotPage(page)
    forgotPage.Forgot()
    await page.pause();
    //Register PAge
    //     const registerPage =new RegisterPage(page)
    //    await registerPage.goToRegisterPage();
    //     await registerPage.ValidRegister(randomEmail, password)
    //     await page.pause()

});