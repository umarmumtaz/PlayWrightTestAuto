const { test, expect, request } = require('@playwright/test');
// const loginPayLoad =

// test.beforeAll(() =>
// {

// const apiContext = await request.newContext();
// apiContext.post("https://uksouth-1.in.applicationinsights.azure.com//v2/track")


// });

// test.beforeEach(() =>
// {



// });












test('Verify Quick  Menu', async ({ page }) => {
    await page.goto('https://test.jobtrain.co.uk/ybscareers/')
    await page.locator('.sign_in_detail').click()
    await page.getByPlaceholder('Email goes here').type('nanncy5@gmail.com')
    await page.getByPlaceholder('Password').type('Testing@123')
    await page.locator('#signIn').click()
    await expect(page).toHaveURL(/MyJobs/);
    await page.getByText('Applications', 'Saved')
    await page.getByRole('button').click()
    await page.getByLabel('My Job Alerts').getByRole('link', { name: 'notifications_none My Job Alerts' }).click();
    await expect(page.locator('.h3')).toHaveText(/Alerts/);
    await page.getByRole('button').click()
    await page.getByLabel('My Emails').getByRole('link', { name: 'mail_outline My Emails' }).click();
    await expect(page.locator('.h3')).toHaveText(/Emails/);
    await page.getByRole('button').click()
    await page.getByLabel('My account ').getByRole('link', { name: 'settings My account' }).click();
    await expect(page.locator('.h3')).toHaveText(/account/, { ignoreCase: true });
    await page.getByRole('button').click()
    await page.getByLabel('FAQs').getByRole('link', { name: 'quiz FAQs' }).click();
    await expect(page.locator('.h3')).toHaveText(/faq/, { ignoreCase: true });
    await page.pause()
});