const { test, expect } = require('@playwright/test');
const { count } = require('console');

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
    // await page.locator('#navbarDropdownMenuLink2').click()
    //await page.locator('#navbarDropdownMenu').click();
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
    await page.pause()
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
test('Verify register flow', async ({ page }) => {
    await page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job')
    await page.locator('.sign_in_detail ').click()
    await page.getByText('Don’t have an account? Create one here').click()
    await page.locator('#UserName').fill('malvin1@gmail.com');
    await page.getByPlaceholder('Type a password here').fill('Testing@123');
    await page.getByPlaceholder('Type a password here').click();
    await page.keyboard.press('Enter')
    //await page.getByPlaceholder('I agree to the ').click()
    await page.pause()
});

test('Verify register 2nd step', async ({ page }) => {
    await page.goto('https://test.jobtrain.co.uk/ybscareers/Account/RegisterStep2')
    await page.locator('#FirstName').type('celinna')
    await page.locator('#LastName').type('clonin')
    await page.locator('#Mobile').type('+441172345678')
    //await page.getByText('I agree to the').click() or just use this one isnted of expect
    expect(await page.isChecked('#customCheck1')).toBeFalsy()
    await page.getByText('I agree to the').click()
    expect(await page.isChecked('#customCheck1')).toBeTruthy()
    await page.pause()
});
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
//--------------------------------------------------------------------------------------------
test('job selection Dynamically', async ({ page }) => {
    await page.goto('https://test.jobtrain.co.uk/ybscareers/')
    const jobName = ('Jobtrain Test job')
    const jobs = page.locator('.job-card')

    const count = await jobs.count();

    for (let i = 0; i < count; ++i) {

        if (await jobs.nth(i).getByTitle('Jobtrain Test job').allTextContents() === jobName) {
            await jobs.nth(i).getByTitle('Jobtrain Test job').click();

            break;
        }
    }
    await page.pause()
});

//-------------------------------

test('Verify the static job', async ({ page }) => {
    await page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job')
    await page.getByTitle('Jobtrain Test job').click()
    await page.locator('.page-header').first().waitFor()
    const bol = await page.locator('.h3').isVisible('Jobtrain Test job')
    console.log('Job is there', bol)
    expect(bol).toBeTruthy();
    await page.pause()
});


test.only('Verify the dropdown list dynamically', async ({ page }) => {
    await page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job');
    await page.locator('#searchFilterRegions').type('East', { delay: 100 })//select the whole section with delay
    const dropdown = page.locator('.select2-results');//select the total list 
    await dropdown.waitFor(); //wait for loading
    const optionCount = await dropdown.locator('.select2-results__option').count(); //count the totla number with loop
    for (let i = 0; i < optionCount; ++i) {  
        const text = await dropdown.locator(".select2-results__option").nth(i).textContent();//locator with total options
        if (text === "East Anglia") {
            await dropdown.locator(".select2-results__option").nth(i).click(); //click on the mentioned above
            break;
        }
    }
    await page.pause()
});
