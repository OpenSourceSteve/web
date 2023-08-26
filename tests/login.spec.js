// @ts-check
const { test, expect } = require('@playwright/test');

// Are there no funky redirects?
test('page loads', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  await expect(page).toHaveTitle("EasyLegal.app");
  await expect(page).toHaveURL('http://localhost:3000/login')
});

test('page renders', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  // Do the page elements render accessibly?
  await expect(page.getByRole('link', {name: 'EASYLEGAL_LOGO'})).toBeVisible();
  await expect(page.getByRole('link', {name: 'Signup'})).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  await expect(page.getByRole('textbox', {name: 'Email Address'})).toBeVisible();
  await expect(page.getByRole('textbox', {name: 'Password'})).toBeVisible();
  await expect(page.getByRole('button', {name: 'Sign in'})).toBeVisible();
  await expect(page.getByRole('link', {name: 'Forgot Password?'})).toBeVisible();
});

// Does the signup link work?
test('signup link', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByRole('link', { name: 'Signup' }).click();
  await expect(page).toHaveTitle(/EasyLegal.app/);
  await expect(page).toHaveURL('http://localhost:3000/signup')
});

// NOTE: There is no test for logging in in this file because the
// login page is implicitly tested in fixtures.js and all authenticated
// tests (e.g. clients, cases, charges...) rely on it.