// @ts-check
// @ts-check
import { test, expect } from '@playwright/test';

test('has title - continuous run on failure', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // 1. Soft Assertion: Fails because "Playwright" is spelled wrong, 
  // but code execution continues to the next line.
  await expect.soft(page).toHaveTitle(/WrongTitle/);

  // This will STILL run despite the failed title check above
  await page.getByRole('link', { name: 'Get started' }).click();
});

test('get started link - safe action handling', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // 2. Try/Catch Block: Attempts to click an element that doesn't exist
  try {
    // Times out fast (2 seconds) to avoid waiting full 30 seconds
    await page.getByRole('button', { name: 'Nonexistent Button' }).click({ timeout: 2000 });
  } catch (error) {
    console.log('Button not found, proceeding anyway...');
  }

  // This will STILL run despite the click failure above
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
