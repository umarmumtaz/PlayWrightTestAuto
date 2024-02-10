const { test, expect } = require('@playwright/test');
const { count } = require('console');
const exp = require('constants');

test('Prctise', async ({ page }) => {
    await page.goto("https://test.jobtrain.co.uk/ybscareers/Home/Job");
    //API requests like get, also check the url generic assertions
    const response = await page.request.get('https://test.jobtrain.co.uk/ybscareers/Home/Job')
    await expect(response).toBeOK()
    console.log(response)
    await expect(page).toHaveURL(/Job/)
    //verify the response code with truthy/falsy
    const valueVar = { output: '200' }
    expect(200).toBeTruthy();
    console.log(valueVar)
    //verify the page title with assertion like tocontain
    const homePage = await page.innerText('.h3.jt-page-title');
    expect(homePage).toBe('Jobs for you')
    console.log(homePage)
    expect(homePage).toContain('Jobs')
    expect(homePage).toHaveLength(12)

    console.log(await page.title());
    page.pause()

});





//npx playwright test ./tests/singleTest.spec.js  --headed

