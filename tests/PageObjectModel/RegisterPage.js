
exports.RegisterPage = class RegisterPage {
    constructor(page) {
        this.page = page;
        this.randomEmail = generateRandomEmail();
        this.signIn = page.locator('.sign_in_detail');
        this.creatAccount = page.getByText('Don’t have an account? Create one here');
        this.enterPassword = page.getByPlaceholder('Type a password here');
        this.enterButton = page.getByPlaceholder('Type a password here');
    }
    async goToRegisterPage() {
        await this.page.goto("https://test.jobtrain.co.uk/ybscareers/Home/Job");
    }
    async ValidRegister(password) {
        await this.signIn.click();
        await this.creatAccount.click();
        await this.page.locator('#UserName').fill(this.randomEmail);
        await this.enterPassword.type(password); // Use the provided password parameter
        await this.enterButton.click();
    }
}
function generateRandomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomEmail = '';
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomEmail += characters.charAt(randomIndex);
    }
    return `${randomEmail}@jt.com`;
}
