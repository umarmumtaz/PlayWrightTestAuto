const { test, expect } = require('@playwright/test')

test('Ybs Signin with - blank data', async ({ page }) => {

    await page.goto("https://test.jobtrain.co.uk/ybscareers/Home/Job");
    console.log(await page.title());
    await expect(page).toHaveTitle("Jobs Page - YBS Careers | Jobs | Search here for your perfect career");
    await page.getByLabel('Allow cookies').click();
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.locator('#signInEmail').type('')
    await page.locator('#inputPassword').type('')
    await page.locator('#signIn').click();
    console.log(await page.locator('.alert-danger').textContent());
    await expect(page.locator('.alert-danger')).toContainText('Invalid UserName Or Password.');
});

test('test with negative data', async ({ page }) => {
    await page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job');
    await page.getByLabel('Allow cookies').click();
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.locator('#signInEmail').type('test@gmail.com')
    await page.locator('#inputPassword').type('Testing123')
    await page.locator('#signIn').click();
});

test('test with the happy scenario', async ({ page }) => {
    await page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job');
    await page.getByLabel('Allow cookies').click();
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByPlaceholder('Email goes here').type('nanncykevin@gmail.com')
    await page.getByPlaceholder('Password').type('Testing@123')
    await page.locator('#signIn').click()
    await expect(page).toHaveURL(/MyJobs/);
    await page.locator('#navbarDropdownMenuLink2').click()
    await page.locator('#navbarDropdownMenu').click();
    //await expect(page).toHaveTitle('Jobs Page');

});





