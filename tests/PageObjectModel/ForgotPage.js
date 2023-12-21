const { expect } = require("@playwright/test");

exports.ForgotPage = class ForgotPage {
    constructor(page) {
        this.page = (page);
        this.page.reload({ hard: true });
        this.signIn = page.locator('.sign_in_detail');
        this.forgotbutton = page.getByRole('link', { name: 'I forgot my password' });
        this.recoverPassword = page.locator('#RecoverPassword');
        this.typeEmail = page.getByPlaceholder('Email goes here');
        this.requestButton = page.getByRole('button', { name: 'Request Password' });

    }
    async goToForgotPage() {
        await this.page.goto("https://test.jobtrain.co.uk/ybscareers/Home/Job");

    }
    async Forgot(typeEmail,) {
        await this.signIn.click();
        await this.forgotbutton.click();
        await this.recoverPassword.dblnclick();
        await this.typeEmail.type(typeEmail);
        await this.requestButton.click();
     //expect(await page.locator('.text-danger').textContent()).toEqual('Thank you for your request, We will send details of your username and password by email.')

    }
}