// @ts-check
const { test, expect } = require('@playwright/test');

// Are unauthenticated users redirected to homepage?
test('redirects unauthenticated users', async ({ page }) => {
    await page.goto('http://localhost:3000/clients');

    await expect(page).toHaveTitle(/EasyLegal.app/);
    await expect(page).toHaveURL('http://localhost:3000/login')
  });