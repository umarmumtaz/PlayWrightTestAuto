// exports.LoginPage = class LoginPage {
//     constructor(page) {
//         this.page = page;
//         this.userName = page.locator('#signInEmail');
//         this.password = page.locator('#inputPassword');
//         this.signInbutton = page.locator('#signIn');
//     }
//     async goTo() {
//         await this.page.goto("https://test.jobtrain.co.uk/ybscareers/Account/LogIn");
//     }
//     //its a single function can also be use atomic function that is foe each, and its reusable
//     async validLogin(username, password) {
//         await this.userName.type(username);
//         await this.password.type(password);
//         await this.signInbutton.click();
//     }
// }
// module.exports = { LoginPage };
// ---------------------------------




exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator('#signInEmail');
        this.password = page.locator('#inputPassword');
        this.signInbutton = page.locator('#signIn');
        //this.forGotP = page.getByRole('link', { name: 'I forgot my password' }).click();
    }
    async goToLoginPage() {
        await this.page.goto("https://test.jobtrain.co.uk/ybscareers/Account/LogIn");
    }
    //its a single function can also be use atomic function that is foe each, and its reusable
    async validLogin(username, password) {
        await this.username.type(username);
        await this.password.type(password);
        await this.signInbutton.click();
      //  await this.forGotP.click();
        //    //
    }
}
