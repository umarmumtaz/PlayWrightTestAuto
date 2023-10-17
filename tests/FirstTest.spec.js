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
    await page.getByPlaceholder('Email goes here').type('nanncy5@gmail.com')
    await page.getByPlaceholder('Password').type('Testing@123')
    await page.locator('#signIn').click()
    await expect(page).toHaveURL(/MyJobs/);
    await page.locator('#navbarDropdownMenuLink2').click()
    await page.locator('#navbarDropdownMenu').click();
    //await expect(page).toHaveTitle('Jobs Page');

});

test('verifying the job listing card heading', async ({ page }) => {
    await page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job');
    await page.getByLabel('Allow cookies').click();
    // console.log(await page.locator('.job-card__link').nth(0).textContent());
    console.log(await page.textContent('.job-card__link'));
});


test('verifying the job listing with variables', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const jobtitles = page.locator('.job-card__link')
    await page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job');
    await page.getByLabel('Allow cookies').click();
    await page.locator(".job-card__link").first().textContent()
    await page.locator(".job-card__link").nth(1).textContent()
    await page.waitForLoadState('networkidle')
    const allTitles = await jobtitles.allTextContents();
    console.log(allTitles);
});


test('verifying the job details', async ({ page }) => {
    await page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job');
    await page.locator('//*[@id="searchResultsItems"]/div[1]/div[2]/p/a').click();
    await expect(page).toHaveTitle("Job Information  - YBS Careers | Jobs | Search here for your perfect career");
    await page.waitForLoadState('networkidle')
    const titles = await page.locator(".job-card__link").allTextContents()
    console.log(titles);
});

test('verifying the select values in the drodown', async ({ page }) => {
    await page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job');
    //     const dropdown=page.locator(".form-select");
    //    await dropdown.selectOption('2');
    //     await page.pause();
    await page.getByLabel('Set a distance from the location or postcode that you are willing to travel for work').selectOption('2');
    await page.getByLabel('Regions').selectOption("East Anglia");
    await page.locator("#searchFiltersApplyButton").click();
    await page.pause()
});
test.only('verifying the select values in the drodowns more', async ({ page }) => {
    await page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job');
    await page.getByLabel(' Distance').selectOption('50');
    await page.getByLabel('Regions').selectOption("East Anglia");
    await page.getByText('Date Posted').selectOption("This Month");
    await page.locator("#searchFiltersApplyButton").click();
    await page.getByText('Clear All').click();
    await page.getByText('There are 7 jobs matching').click();
    console.log(('There are 7 jobs matching'))//static content
    await page.pause()
});


