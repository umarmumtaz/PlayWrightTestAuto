const { test, expect, request } = require('@playwright/test');

test('Verify the login with Page object', async ({ page }) => {
    await page.goto('https://test.jobtrain.co.uk/ybscareers/')
    await page.locator('.sign_in_detail').click()
    await page.getByPlaceholder('Email goes here').type('nanncy5@gmail.com')
    await page.getByPlaceholder('Password').type('Testing@123')
    await page.locator('#signIn').click()
    await expect(page).toHaveURL(/MyJobs/);
    await page.getByText('Applications', 'Saved')
    await page.getByRole('button').click()

    await page.pause()
});

//npx playwright test ./pageobjects/ClientappPO.spec.js