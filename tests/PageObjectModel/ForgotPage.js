const { expect } = require("@playwright/test");

exports.ForgotPage = class ForgotPage {
    constructor(page) {
        this.page = (page);
        this.signIn = page.locator('.sign_in_detail');
        this.forgotbutton = page.getByRole('link', { name: 'I forgot my password' });
        this. recoverPassword= page.getByRole('button', { name: 'Recover Password' })
        this.typeEmail= page.getByPlaceholder('Email goes here')
        this.requestButton =page.getByRole('button', { name: 'Request Password' })

    }
    async Forgot(typeEmail,) {
        await this.signIn.click()
        await this.forgotbutton.click()
        await this.recoverPassword.click()
        await this.typeEmail.type(typeEmail)
        await this.requestButton.click()

       // await this.submit.click()
       //await expect (page.locator('.register__title').textContent()).toEqual('Reset Password')
       //  expect(await page.locator('.register__title').textContent()).toEqual('Reset Password')
       
    }
}