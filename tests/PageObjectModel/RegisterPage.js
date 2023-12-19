{
    exports.RegisterPage = class RegisterPage {
        constructor(page) {
            this.page = page;

            this.page.reload({ hard: true });

            this.closeB=page.locator('.register__back--text')
            this.closeP=page.locator('#dataConfirmModalSubmitclose')
            this.signIn=page.locator('.sign_in_detail')
            this.creatAccount =page.getByText('Don’t have an account? Create one here')
            const randomEmail = generateRandomEmail(); // Generate a random email
            this.page.locator('#UserName').fill(randomEmail);
            this.enterPassword =page.getByPlaceholder('Type a password here').fill('Testing@123');
            this.enterButton =page.getByPlaceholder('Type a password here').click();
            this.page.keyboard.press('Enter');
            console.log('Generated Random Email:', randomEmail);
            this.page.pause();

            function generateRandomEmail() {
                const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
                let randomEmail = '';
                for (let i = 0; i < 10; i++) {
                    const randomIndex = Math.floor(Math.random() * characters.length);
                    randomEmail += characters.charAt(randomIndex);
                }
                return `${randomEmail}@jt.com`;
            }}
        
        // async goToRegisterPage() {
        //     await this.page.goto("https://test.jobtrain.co.uk/ybscareers/Home/Job");
    
        // }

async ValidRegister(randomEmail, password){
    await this.closeB.click();
    await this.closeP.click()
    await this.signIn.click();
    await this.creatAccount.click();
    await this.randomEmail.type(randomEmail)
    await this.enterPassword.type(password);
    await this.enterButton.click();

}




        }}
        //npx playwright test ./tests/ClientappPO.spec.js