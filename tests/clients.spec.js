// @ts-check
const { test, expect } = require('./fixtures');

// Are there no funky redirects?
test('page loads', async ({ page }) => {
  await page.goto('http://localhost:3000/clients');

  await expect(page).toHaveTitle("EasyLegal.app");
  await expect(page).toHaveURL('http://localhost:3000/clients')
});

test('page renders', async ({ page }) => {
  await page.goto('http://localhost:3000/clients');

  // Do the page elements render accessibly?
  await expect(page.getByRole('link', {name: 'EASYLEGAL_LOGO'})).toBeVisible();
  await expect(page.getByRole('link', {name: 'Docket'})).toBeVisible();
  await expect(page.getByRole('link', {name: 'Cases'})).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Clients' })).toBeVisible();
  await expect(page.getByRole('button', {name: 'Add New Client'})).toBeVisible();
});

// Does the docket link work?
test('docket link', async ({ page }) => {
  await page.goto('http://localhost:3000/clients');

  await page.getByRole('link', { name: 'Docket' }).click();
  await expect(page).toHaveTitle(/EasyLegal.app/);
  await expect(page).toHaveURL('http://localhost:3000/docket')
});

// Does the cases link work?
test('cases link', async ({ page }) => {
  await page.goto('http://localhost:3000/clients');

  await page.getByRole('link', { name: 'Cases' }).click();
  await expect(page).toHaveTitle(/EasyLegal.app/);
  await expect(page).toHaveURL('http://localhost:3000/cases')
});