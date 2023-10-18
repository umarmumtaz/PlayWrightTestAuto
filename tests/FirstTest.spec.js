const { test, expect } = require('@playwright/test')

test('Login with Blank Date', async ({ page }) => {

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

test('Login wiht -ve scenarios', async ({ page }) => {
    await page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job');
    await page.getByLabel('Allow cookies').click();
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.locator('#signInEmail').type('test@gmail.com')
    await page.locator('#inputPassword').type('Testing123')
    await page.locator('#signIn').click();
});

test('Login with happy scenarios', async ({ page }) => {
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

test('Verify the job listing titles', async ({ page }) => {
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

test('verifying the filters in the job listing page', async ({ page }) => {
    await page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job');
    //     const dropdown=page.locator(".form-select");
    //    await dropdown.selectOption('2');
    //     await page.pause();
    await page.getByLabel('Set a distance from the location or postcode that you are willing to travel for work').selectOption('2');
    await page.getByLabel('Regions').selectOption("East Anglia");
    await page.locator("#searchFiltersApplyButton").click();
    await page.pause()
});
test('Verify the search filters with parameters', async ({ page }) => {
    await page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job');
    await page.getByLabel(' Distance').selectOption('50');
    await page.getByLabel('Regions').selectOption("East Anglia");
    await page.getByText('Date Posted').selectOption("This Month");
    await page.locator("#searchFiltersApplyButton").click();
    await page.getByText('Clear All').click();
    await page.getByText('There are 7 jobs matching')
    console.log(('There are 7 jobs matching'))//static content
    await page.pause()
});

test('Verify the total number of live jobs', async ({ page }) => {
    await page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job');
    const list = await page.locator('#searchResults');
    const records = await list.getByTitle('Click here to view Job detail for');
    console.log('Total live jobs are:', await records.count())
    const result = await page.locator('#searchNoOfResults').allInnerTexts();
    console.log("Output result is ", result)
    await page.pause()
});
// test('Verify register flow', async ({ page }) => {
//     await page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job');
//     await page.pause()
// });