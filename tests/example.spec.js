// @ts-check
const { test, expect } = require('@playwright/test');

test('create slide show', async ({ page }) => {
  // ARRANGE
  // go to canva
  await page.goto('https://www.canva.com/');
  // Add a random delay of 1 to 5 seconds to simulate human behavior
  await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 4000 + 1000)));
  // login
  await page.click(':text("Log in")');
  // Add a random delay of 1 to 5 seconds to simulate human behavior
  await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 4000 + 1000)));
  await page.click(':text("Continue with email")');

  // add photo 1
  // add photo 2

  // ACT
  // ASSERT
});
