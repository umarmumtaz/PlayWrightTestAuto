const { expect } = require("@playwright/test");

exports.ForgotPage = class ForgotPage {
    constructor(page) {
        this.page = (page);
        this.signIn = page.locator('.sign_in_detail');
        this.forgotbutton = page.getByRole('link', { name: 'I forgot my password' });
        this.recoverPassword=page.locator('#RecoverPassword');
       // this.resetPassword =page.locator('#signInEmail').fill('nanncy@gmail.com')
        //this.submit=page.locator('.btn-primary')
    }
    async Forgot() {
        await this.signIn.click()
        await this.forgotbutton.click()
        await this.recoverPassword.click()
       // await this.submit.click()
       //await expect (page.locator('.register__title').textContent()).toEqual('Reset Password')
       //  expect(await page.locator('.register__title').textContent()).toEqual('Reset Password')
       
    }
}