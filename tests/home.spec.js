// @ts-check
const { test, expect } = require('@playwright/test');

// Are there no funky redirects?
test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page).toHaveTitle(/EasyLegal.app/);
  await expect(page).toHaveURL('http://localhost:3000')
});

// Does the login link work?
test('login link', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page).toHaveTitle(/EasyLegal.app/);
  await expect(page).toHaveURL('http://localhost:3000/login')
});

// Does the signup link work?
test('signup link', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByRole('link', { name: 'Signup' }).click();
  await expect(page).toHaveTitle(/EasyLegal.app/);
  await expect(page).toHaveURL('http://localhost:3000/signup')
});