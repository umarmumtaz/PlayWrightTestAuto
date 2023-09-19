const {test}=require('@playwright/test')
test('first test case playwright',async ({browser})=>
{

//javascript is based on async, so to use hold on, that is await with every step
//if there is no fuction name is call aynonomous function, and just b like [async()=>] instad of async function()
// add the global fixture that is acync({browser})-fixtures are nothting but the global variables
chrome - Plugins/ cookies
const context =await browser.newContext(); //remove the cookies
const page= await context.newPage(); //newpage method, 
await page.goto("https://playwright.dev/");


});