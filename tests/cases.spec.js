// @ts-check
import { test, expect } from './fixtures';

const ENV = process.env.USER_BRANCH;
const host = `http://localhost:3000`
// Are there no funky redirects?
test('page loads', async ({ page }) => {
  await page.goto(`${host}/cases`);

  // await expect(page).toHaveTitle("EasyLegal.app");
  await expect(page).toHaveURL(`${host}/cases`)
});

test('page renders', async ({ page }) => {
  await page.goto(`${host}/cases`);

  // Do the page elements render accessibly?
  await expect(page.getByRole('link', {name: 'EASYLEGAL_LOGO'})).toBeVisible();
  await expect(page.getByRole('link', {name: 'Docket'})).toBeVisible();
  await expect(page.getByRole('link', {name: 'Clients'})).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Cases' })).toBeVisible();
  await expect(page.getByRole('button', {name: 'Create New Case'})).toBeVisible();
});

// Does the docket link work?
test('docket link', async ({ page }) => {
  await page.goto(`${host}/cases`);

  await page.getByRole('link', { name: 'Docket' }).click();
  // await expect(page).toHaveTitle(/EasyLegal.app/);
  await expect(page).toHaveURL(`${host}/docket`)
});

// Does the cases link work?
test('cases link', async ({ page }) => {
  await page.goto(`${host}/cases`);

  await page.getByRole('link', { name: 'Clients' }).click();

  await expect(page).toHaveTitle(/EasyLegal.app/);
  await expect(page).toHaveURL('http://localhost:3000/clients')
});