// @ts-check
require('dotenv').config()
const { test, expect } = require('@playwright/test');

test('Login to Canva', async ({ page }) => {
  // ARRANGE
  // go to canva
  await page.goto('https://www.canva.com/');
  // Add a random delay of 1 to 5 seconds to simulate human behavior
  await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 4000 + 1000)));

  // ACT
  // click log in button
  await page.click(':text("Log in")');
  // click continue with email option
  await page.click(':text("Continue with email")');
  // input email and continue
  await page.locator('[name="email"]').fill(process.env.EMAIL)
  await page.click(':nth-match(:text("Continue"), 2)');
  // input password and log in
  await page.locator('[name="password"]').fill(process.env.PASSWORD)
  await page.click(':nth-match(:text("Log in"), 2)');

  // ASSERT
  // check if "Create a design is visibile"
  await expect(page.locator('text:("Create a design")')).toBeVisible()
});
