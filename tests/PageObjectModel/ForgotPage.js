exports.ForgotPage = class ForgotPage {

    constructor(page) {
        this.page = (page);
        this.signIn = page.locator('.sign_in_detail');
        this.forgotbutton = page.getByRole('link', { name: 'I forgot my password' })
    }
    async Forgot() {
        await this.signIn.click()
        await this.forgotbutton.click()
    }
}