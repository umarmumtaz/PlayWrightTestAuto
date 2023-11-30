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
        this.signIn = page.locator('.sign_in_detail');
        this.username = page.locator('#signInEmail');
        this.password = page.locator('#inputPassword');
        this.signInbutton = page.locator('#signIn');
        this.quickMenu = page.locator('#navbarDropdownMenuLink2')
        this.logout = page.locator('//*[@id="navbarDropdownMenu"]/a[6]')
    }
    async goToLoginPage() {
        await this.page.goto("https://test.jobtrain.co.uk/ybscareers/Home/Job");

    }
    //its a single function can also be use atomic function that is foe each, and its reusable
    async validLogin(username, password) {
        await this.signIn.click();
        await this.username.type(username);
        await this.password.type(password);
        await this.signInbutton.click();
        await this.quickMenu.click();
        await this.logout.click();


    }
}
