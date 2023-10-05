const {test, expect}=require('@playwright/test')
test.only('first test case playwright',async ({page})=>
{
//javascript is based on async, so to use hold on, that is await with every step
//if there is no fuction name is call aynonomous function, and just b like [async()=>] instad of async function()
// add the global fixture that is acync({browser})-fixtures are nothting but the global variables
// chrome - Plugins/ cookies
// const context =await browser.newContext(); //remove the cookies
// const page= await context.newPage(); //newpage method, 
//npx playwright test --headed
await page.goto("https://test.jobtrain.co.uk/ybscareers/Home/Job");
console.log(await page.title()); 
await expect(page).toHaveTitle("Jobs Page - YBS Careers | Jobs | Search here for your perfect career");
await page.getByLabel('Allow cookies').click();
await page.getByRole('link', { name: 'Sign in' }).click();

});     