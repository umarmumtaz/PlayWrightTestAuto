exports.QuickMenu =class QuickMenu{

constructor(page){
this.page = page;
this.signIn = page.locator('.sign_in_detail');
        this.username = page.locator('#signInEmail');
        this.password = page.locator('#inputPassword');
        this.signInbutton = page.locator('#signIn');


}
async goToLoginPage() {
    await this.page.goto("https://test.jobtrain.co.uk/ybscareers/Home/Job");

    
}
async assertURL(expectedURLPattern) {
    await expect(this.page).toHaveURL(expectedURLPattern);
  }

async validLogin(username, password) {
    await this.signIn.click();
    await this.username.type(username);
    await this.password.type(password);
    await this.signInbutton.click();

}
}

