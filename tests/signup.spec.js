// @ts-check
const { test, expect } = require('@playwright/test');

// Are there no funky redirects?
test('page loads', async ({ page }) => {
  await page.goto('http://localhost:3000/signup');

  await expect(page).toHaveTitle("EasyLegal.app");
  await expect(page).toHaveURL('http://localhost:3000/signup')
});

test('page renders', async ({ page }) => {
  await page.goto('http://localhost:3000/signup');

  // Do the page elements render accessibly?
  await expect(page.getByRole('link', {name: 'EASYLEGAL_LOGO'})).toBeVisible();
  await expect(page.getByRole('link', {name: 'Login'})).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sign Up' })).toBeVisible();
  await expect(page.getByRole('textbox', {name: 'First Name'})).toBeVisible();
  await expect(page.getByRole('textbox', {name: 'Last Name'})).toBeVisible();
  await expect(page.getByRole('textbox', {name: 'Email Address'})).toBeVisible();
  await expect(page.getByLabel('Password', { exact: true })).toBeVisible();
  await expect(page.getByLabel('Confirm Password')).toBeVisible();
  await expect(page.getByRole('button', {name: 'Submit'})).toBeVisible();
  await expect(page.getByRole('checkbox', {name: 'I consent to EasyLegal.app\'s terms and conditions.'})).toBeVisible();
});

// Does the signup link work?
test('login link', async ({ page }) => {
  await page.goto('http://localhost:3000/signup');

  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page).toHaveTitle(/EasyLegal.app/);
  await expect(page).toHaveURL('http://localhost:3000/login')
});