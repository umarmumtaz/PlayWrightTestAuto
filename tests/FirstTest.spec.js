const { test, expect } = require('@playwright/test')

test('Ybs Signin with happy scenario', async ({ page }) => {

    await page.goto("https://test.jobtrain.co.uk/ybscareers/Home/Job");
    console.log(await page.title());
    await expect(page).toHaveTitle("Jobs Page - YBS Careers | Jobs | Search here for your perfect career");
    await page.getByLabel('Allow cookies').click();
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.locator('#signInEmail').type('nanncy@gmail.com')
    await page.locator('#inputPassword').type('Testin777g@123')
    await page.locator('#signIn').click();
    console.log(await page.locator('.alert-danger').textContent());
    await expect(page.locator('.alert-danger')).toContainText('Invalid UserName Or Password.');
});

test.only('test with negative data', async ({ page }) => {
    await page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job');
    await page.getByLabel('Allow cookies').click();
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.locator('#signInEmail').type('nanncykevin@gmail.com')
    await page.locator('#inputPassword').type('Testing@123')
    await page.locator('#signIn').click();
});







