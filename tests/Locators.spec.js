import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {
    // Navigate to the website
    await page.goto('https://demoblaze.com/');

    // Click on the sign-in button
    await page.click('id=login2');

    // Provide the login ID
    await page.fill('#loginusername', 'rammarshivane');

    // Provide the password
    await page.fill('#loginpassword', 'ram@1234');

    // Click on the login button
    await page.click("//button[contains(text(),'Log in')]");

    // Validate the user
    //  const userName = await page.locator('#nameofuser').innerText();
    //expect(userName).toContain('Welcome rammarshivane');

    await page.waitForTimeout(4000);
    await page.click("//a[@id='nava']");

    

}, { timeout: 60000 });
