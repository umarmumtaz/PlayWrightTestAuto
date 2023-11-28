class LoginPage{
constructor(page)
{
this.page=page;
this.signInbutton = page.locator('#signIn');
this.userName = page.getByPlaceholder('Email goes here');
this.password = page.getByPlaceholder('Password');

}

async goTo()
{

    await this.page.goto("https://test.jobtrain.co.uk/ybscareers/"); 

}


async validLogin(username, password)
{
    await this.userName.type(username)
    await this.password.type(password)
    await this.signInbutton.click()

}
}
module.exports = {LoginPage};