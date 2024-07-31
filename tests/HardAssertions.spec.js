import { test, expect } from '@playwright/test';

test('Hard Assertions in tests', async ({ page }) => {

  await page.goto('https://demo.nopcommerce.com/register');

  // 1. expect(page).toHaveURL()   page has URL
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

  // 2. expect(page).toHaveTitle() page has title
  await expect(page).toHaveTitle('nopCommerce demo store. Register');

  // 3. expect(locator).toBeVisible()  Element is visible
  const logoElement = page.locator('.header-logo');
  await expect(logoElement).toBeVisible();

  // 4. expect(locator).toBeChecked()   Radio/Checkbox is checked
  const radioButton = page.locator('#gender-male');
  await radioButton.click();
  await expect(radioButton).toBeChecked();

  // 5. expect(locator).toHaveAttribute()    Element has attribute
  const regButton = page.locator('#register-button');
  await expect(regButton).toHaveAttribute('type', 'submit');

  // 6. expect(locator).toHaveText()   Element has expected text  //Full text
  await expect(page.locator('.page-title h1')).toHaveText('Register'); //Full text

  // 7. expect(locator).toContainText()     Element contains text //Partial text
  await expect(page.locator('.page-title h1')).toContainText('Regist'); //Partial text

  //8. expect(locator).toHaveCount(length) List of elements has given length
  const options=page.locator("//select[@name='DateOfBirthMonth']//option");
  //await expect(options).toHaveCount('13');

  //9. expect(locator).toHaveValue(value) Input has a value
  const emailInput=page.locator('#Email');
  await emailInput.fill('rammarshivane@gmail.com');
  await expect(emailInput).toHaveValue('rammarshivane@gmail.com');

});