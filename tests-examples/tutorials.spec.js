// ---add urls assertions, expected, promisses, mocha

 // https://www.programsbuzz.com/article/playwright-assert-element-contain-text
// assertions https://playwright.dev/docs/test-assertions
//  expect  https://elaichenkov.github.io/playwright-expect/


//const locator = page.locator('input');
//await expect(locator).toHaveAttribute('class', '<blinking text i.e class name>');
  
//handle child win https://medium.com/@kbalaji.kks/playwright-handling-alert-prompt-new-window-new-tab-91b8377c9b03
//https://www.freecodecamp.org/news/guide-to-javascript-promises/

//just random email generation code in JS
const { test, expect } = require('@playwright/test')

test('Generate Random Email', async ({ page }) => {
    function generateRandomEmail() {
        const username = Math.random().toString(36).substring(2, 10); // Random alphanumeric username
        const domain = 'gmail.com';
        return `${username}@${domain}`;
    }
    const randomEmail = generateRandomEmail();
    console.log('Generated Random Email:', randomEmail);
});