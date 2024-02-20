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
test('Prctise1 - Playwright Documentation', async ({ page }) => {
    await page.goto("https://test.jobtrain.co.uk/ybscareers/Home/Job");
    const pageTitleLogin = await page.locator('.jt-page-title');
    await expect(pageTitleLogin).toHaveText('Jobs for you');
    const pageTitleText = await pageTitleLogin.innerText();
    console.log(pageTitleText)

    const element = await page.locator('.jt-page-title');
    await expect(element).toBeAttached();
    const element2 = await element.innerHTML()
    console.log(element2)

});


test('Prctise 2 -Playwright Documentation', async ({ page }) => {
    await page.goto("file:///C:/PlayWrightTestAuto/check.html");
    const testChecked = page.locator('#myCheckbox')
    await expect(testChecked).toBeChecked();
    const testDisabled = page.locator('#myInput')
    await expect(testDisabled).toBeDisabled()
    const testEditable = page.locator('#username')
    await expect(testEditable).toBeEditable()
    await page.locator('#username').fill('nanncy')
    const testEditable2 = await testEditable.innerText()
    console.log(testEditable2) //how to check value in console is pending
    const testEmpty = page.locator('#emptyDiv')
    await expect(testEmpty).toBeEmpty()
    const testEnabled = page.locator('#enabledButton')
    await expect(testEnabled).toBeEnabled()

    await page.focus('#username1')
    const testFocused = page.locator('#username1')
    await expect(testFocused).toBeFocused()
    await page.focus('#password')
    const testFocused2 = page.locator('#password')
    await expect(testFocused2).toBeFocused()
    await page.focus('#loginButton')
    const testFocused3 = page.locator('#loginButton');
    await expect(testFocused3).toBeFocused()
    page.pause();

});

test.only('Prctise 3 -Playwright Documentation', async ({ page }) => {
    await page.goto("file:///C:/PlayWrightTestAuto/check.html");
    await page.locator('[href*="check2.html"]').click()
    //https://playwrightsolutions.com/how-can-i-create-a-locator-from-a-link-with-a-unique-href-in-playwright/
    const testHidden = await page.locator('#hiddenParagraph')
    await expect(testHidden).not.toBeHidden()//tobevisible
    await page.click('#toggleButton')
    const testHidden2 = page.locator('#hiddenParagraph')
    console.log('Locator found:', testHidden2);
    await expect(testHidden2).toBeHidden() //not.tobevisile

    const testContain = page.locator('#textParagraph')
    const testContain2 = await testContain.innerText()
    await expect(testContain2).toContain('sample paragraph')

    const testAttribute = page.locator('#myButtonatt')
    await expect(testAttribute).toHaveAttribute('disabled', '')

    const testAttributeName = page.locator('#loginButton')
    await expect(testAttributeName).toHaveAttribute('data-testid', 'submit-button')

    const testHaveClass = page.locator('#textParagraph')
    await expect(testHaveClass).toHaveClass('highlighted', 'sample paragraph') //(/sample paragraph/)
    console.log(testHaveClass)
    page.pause();

});






//npx playwright test ./tests/playwrightDoc.spec.js  --headed

