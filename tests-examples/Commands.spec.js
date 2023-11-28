
    // javascript is based on async, so to use hold on, that is await with every step
    // if there is no fuction name is call aynonomous function, and just b like [async()=>] instad of async function()
    // add the global fixture that is acync({browser})-fixtures are nothting but the global variables
    // chrome - Plugins/ cookies
    // const context =await browser.newContext(); //remove the cookies
    // const page= await context.newPage(); //newpage method, 
    // npx playwright test --headed  --await page.pause()
    //npx playwright codegen
    //npx playwright test ./tests/FirstTest.spec.js --headed

// npx playwright test ./tests/randomEmails.spec.js
// npx playwright show-report
    
  //   test('verifying the max values', async ({ page }) => {
  //     await page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job');
  // await page.locator('#searchFilterWhatText').fill('accountant')
  // await page.getByTitle('Click here to view Job detail for Accountant - Financial Reporting').nth(1).click();
  // await page.locator('#search-filters').getByText('Accountant - Financial Reporting').click()
  // await page.getByText('Accountant - Financial Reporting').first(1).click();
  // await page.getByLabel('Date Posted').selectOption("Anytime");
  // await page.locator("#searchFiltersApplyButton").click();
  // await page.pause()
  // });