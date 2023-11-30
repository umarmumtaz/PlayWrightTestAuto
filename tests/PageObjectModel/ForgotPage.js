exports.ForgotPage = class ForgotPage {

    constructor(page) {

        this.page = (page);
        this.forgotbutton = page.getByRole('link', { name: 'I forgot my password' }).click();

    }

    async goToForgotPage() {

        await this.page.goto("https://test.jobtrain.co.uk/ybscareers/Account/LogIn");
    }
    async Forgot() {
        await this.forgotbutton.click()

    }


}