// ---add urls assertions, expected, promisses, mocha

 // https://www.programsbuzz.com/article/playwright-assert-element-contain-text
// assertions https://playwright.dev/docs/test-assertions
//  expect  https://elaichenkov.github.io/playwright-expect/


//const locator = page.locator('input');
//await expect(locator).toHaveAttribute('class', '<blinking text i.e class name>');
  
//handle child win https://medium.com/@kbalaji.kks/playwright-handling-alert-prompt-new-window-new-tab-91b8377c9b03
//https://www.freecodecamp.org/news/guide-to-javascript-promises/

//just random email generation code in JS
// https://playwright.dev/docs/trace-viewer-intro


const { test, expect } = require('@playwright/test')

test('Generate Random Email', async ({ page }) => {
    function generateRandomEmail() {
        const username = Math.random().toString(36).substring(2, 10); // Random alphanumeric username
        const domain = 'gmail.com';
        return `${username}@${domain}`;
    }
    const randomEmail = generateRandomEmail();
    console.log('Generated Random Email:', randomEmail);
});







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

////sample random email register
// {
//     exports.RegisterPage = class RegisterPage {
//         constructor(page) {
//             this.page = page;
//             this.page.reload({ hard: true });

//             // this.closeB=page.locator('.register__back--text')
//             // this.closeP=page.locator('#dataConfirmModalSubmitclose')
//             this.signIn=page.locator('.sign_in_detail')
//             this.creatAccount =page.getByText('Don’t have an account? Create one here')
//             const randomEmail = generateRandomEmail(); // Generate a random email
//             this.page.locator('#UserName').fill(randomEmail);
//             this.enterPassword =page.getByPlaceholder('Type a password here')
//             this.enterButton =page.getByPlaceholder('Type a password here')
//             this.page.keyboard.press('Enter');
//             console.log('Generated Random Email:', randomEmail);
//             //this.page.pause();

//             function generateRandomEmail() {
//                 const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
//                 let randomEmail = '';
//                 for (let i = 0; i < 10; i++) {
//                     const randomIndex = Math.floor(Math.random() * characters.length);
//                     randomEmail += characters.charAt(randomIndex);
//                 }
//                 return `${randomEmail}@jt.com`;
//             }}
        
//         async goToRegisterPage() {
//             await this.page.goto("https://test.jobtrain.co.uk/ybscareers/Home/Job");
    
//         }

// async ValidRegister(randomEmail, password){
//     // await this.closeB.click();
//     // await this.closeP.click()
//     await this.signIn.click();
//     await this.creatAccount.click();
//     await this.randomEmail.fill(randomEmail)
//     await this.enterPassword.type('Testing@123');
//     await this.enterButton.click();

// }

//         }}