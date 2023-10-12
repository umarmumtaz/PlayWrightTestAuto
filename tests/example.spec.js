// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});




    // javascript is based on async, so to use hold on, that is await with every step
    // if there is no fuction name is call aynonomous function, and just b like [async()=>] instad of async function()
    // add the global fixture that is acync({browser})-fixtures are nothting but the global variables
    // chrome - Plugins/ cookies
    // const context =await browser.newContext(); //remove the cookies
    // const page= await context.newPage(); //newpage method, 
    // npx playwright test --headed
    //npx playwright codegen
    //npx playwright test ./tests/FirstTest.spec.js --headed