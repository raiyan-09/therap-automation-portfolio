const {test, expect} = require('@playwright/test');

test('function by fat operator', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('basic page test', async function({ page }) {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('basic browser test', async function({ browser }) {
  const page = await browser.newPage();
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});