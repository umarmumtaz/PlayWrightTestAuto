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
