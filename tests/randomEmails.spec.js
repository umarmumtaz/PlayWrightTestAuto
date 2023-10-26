const { test, expect } = require('@playwright/test')

test('Generate Random Email', async ({ page }) => {
    function generateRandomEmail() {
        const username = Math.random().toString(36).substring(2, 10); // Random alphanumeric username
        const domain = 'gmail.com';
        return `${username}@${domain}`;
    }
    const randomEmail = generateRandomEmail();
    console.log('Generated Random Email is:', randomEmail);
});

//---------------------------------------------------
test('Verify register flow', async ({ page }) => {


    await page.context().clearPermissions();

    await page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job')
    await page.getByPlaceholder('Password').press('Control+Shift+R');
    await page.locator('.sign_in_detail ').click()
    await page.getByText('Don’t have an account? Create one here').click()
    await page.locator('#UserName').fill('malvin1@gmail.com');
    await page.getByPlaceholder('Type a password here').fill('Testing@123');
    await page.getByPlaceholder('Type a password here').click();
    await page.keyboard.press('Enter')
    await page.pause()
});







test('Verify register 2nd step', async ({ page }) => {
    await page.goto('https://test.jobtrain.co.uk/ybscareers/Account/RegisterStep2')
    await page.locator('#FirstName').type('celinna')
    await page.locator('#LastName').type('clonin')
    await page.locator('#Mobile').type('+441172345678')
    expect(await page.isChecked('#customCheck1')).toBeFalsy()
    await page.getByText('I agree to the').click()
    expect(await page.isChecked('#customCheck1')).toBeTruthy()
    await page.pause()
});



test.only('Register Step-1', async ({ page }) => {
    await page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job');
    await page.locator('.sign_in_detail').click();
    await page.getByText('Don’t have an account? Create one here').click();
    const randomEmail = generateRandomEmail(); // Generate a random email
    await page.locator('#UserName').fill(randomEmail);
    await page.getByPlaceholder('Type a password here').fill('Testing@123');
    await page.getByPlaceholder('Type a password here').click();
    await page.keyboard.press('Enter');
    console.log('Generated Random Email:', randomEmail);
    await page.pause();
});

function generateRandomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomEmail = '';
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomEmail += characters.charAt(randomIndex);
    }
    return `${randomEmail}@example.com`;
}
