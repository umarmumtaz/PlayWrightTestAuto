
import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage'
import { ForgotPage } from './ForgotPage'
import { RegisterPage } from './RegisterPage';
import { JobSearchPage } from './JobSearchPage';
import { FilteredJobs } from './FilteredJobs'
import { QuickMenu } from './QuickMenu';
import exp from 'constants';

test('Login Page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.validLogin('nanncy12@gmail.com', 'Testing@123')
});

test('Forgot PAge', async ({ page }) => {
    // //forgot Page
    const forgotPage = new ForgotPage(page)
    await forgotPage.goToForgotPage();
    await forgotPage.Forgot('nanncy10@gmail.com')
    await page.pause();
});
test('Register Page', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goToRegisterPage();
    // Pass a password as an argument
    const password = 'Testing@123';
    // Use the ValidRegister method with the password parameter
    await registerPage.ValidRegister(password);
    await page.pause();
});
//total no.of jobs
test('No. of live jobs', async ({ page }) => {
    const jobSearchPage = new JobSearchPage(page)
    await jobSearchPage.goToJobSearchPage();
    const totalLiveJobsCount = await jobSearchPage.getTotalLiveJobsCount();
    console.log('Total live jobs are:', totalLiveJobsCount);
    const searchResultsInnerTexts = await jobSearchPage.getSearchResultsInnerTexts();
    console.log("Output result is ", searchResultsInnerTexts);
    await jobSearchPage.pause();
});

test.only('Verify Quick Menu', async ({ page }) => {
    const quickMenu = new QuickMenu(page);
    await quickMenu.goToLoginPage();
    await expect(page).toHaveTitle('Jobs Page - YBS Careers | Jobs | Search here for your perfect career')
    const pageTitle = page.locator('.h3.jt-page-title')
    await expect(pageTitle).toHaveText('Jobs for you')
    //console.log('Dashboard Page title is ', pageTitle)
    await quickMenu.validLogin('nanncy12@gmail.com', 'Testing@123')
    // const jobPageTitle = page.locator('/html[1]/body[1]/div[3]/div[2]/div[1]/h1[1]')
    // await expect(jobPageTitle).toHaveText('My Jobs')
    await page.pause();

});








// test.only('Job with Filters', async ({ page }) => {
//     const filteredjobs = new FilteredJobs(page)
//     await filteredjobs.goToJobSearchPage(page)
//     //await filteredjobs.selectDistance('50')
//     await filteredjobs.selectLocation('Aberdeen1')
//     // await filteredjobs.selectDatePosted('Anytime');
//     // await filteredjobs.selectApplyFilters();
//     await filteredjobs.pause();

// });





//npx playwright test ./PageObjectModel/ClientappPO.spec.js  --headed

