// @ts-check
const { test, expect } = require('@playwright/test');

// Are unauthenticated users redirected to homepage?
test('redirects unauthenticated users from /clients', async ({ page }) => {
    await page.goto('http://localhost:3000/clients');

    await expect(page).toHaveTitle(/EasyLegal.app/);
    await expect(page).toHaveURL('http://localhost:3000/login')
  });

// Are unauthenticated users redirected to homepage?
test('redirects unauthenticated users from /cases', async ({ page }) => {
    await page.goto('http://localhost:3000/cases');

    await expect(page).toHaveTitle(/EasyLegal.app/);
    await expect(page).toHaveURL('http://localhost:3000/login')
  });

// Are unauthenticated users redirected to homepage?
test('redirects unauthenticated users from /profile', async ({ page }) => {
    await page.goto('http://localhost:3000/profile');

    await expect(page).toHaveTitle(/EasyLegal.app/);
    await expect(page).toHaveURL('http://localhost:3000/login')
  });

// Are unauthenticated users redirected to homepage?
test('redirects unauthenticated users from /settings', async ({ page }) => {
    await page.goto('http://localhost:3000/settings');

    await expect(page).toHaveTitle(/EasyLegal.app/);
    await expect(page).toHaveURL('http://localhost:3000/login')
  });