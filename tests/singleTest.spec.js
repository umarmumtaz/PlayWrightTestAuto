const { test, expect } = require('@playwright/test');
const { count } = require('console');
const exp = require('constants');

test('Prctise', async ({ page }) => {
    await page.goto("https://test.jobtrain.co.uk/ybscareers/Home/Job");

    const response = await page.request.get('https://test.jobtrain.co.uk/ybscareers/Home/Job')
    await expect(response).toBeOK()
    console.log(response)
    await expect(page).toHaveURL(/Job/)

    const valueVar = { output: '200' }
    expect(200).toBeTruthy();
    console.log(valueVar)

    const homePage = await page.innerText('.h3.jt-page-title');
    expect(homePage).toBe('Jobs for you')
    console.log(homePage)

    console.log(await page.title());
    page.pause()

});





//npx playwright test ./tests/singleTest.spec.js  --headed

