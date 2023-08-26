// @ts-check
import { test, expect } from './fixtures';

import { client1 } from './data/client1';

const env = process.env.ENV;
const host = `https://${env}.easylegal.app`

// Are there no funky redirects?
test('page loads', async ({ page }) => {
  await page.goto(`${host}/clients`);

  // await expect(page).toHaveTitle("EasyLegal.app");
  await expect(page).toHaveURL(`${host}/clients`)
});

test('page renders', async ({ page }) => {
  await page.goto(`${host}/clients`);

  // Do the page elements render?
  await expect(page.getByRole('link', { name: 'EASYLEGAL_LOGO' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Docket' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Cases' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Clients' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add New Client' })).toBeVisible();
});

// Does the docket link work?
test('docket link', async ({ page }) => {
  await page.goto(`${host}/clients`);

  await page.getByRole('link', { name: 'Docket' }).click();
  // await expect(page).toHaveTitle(/EasyLegal.app/);
  await expect(page).toHaveURL(`${host}/docket`)
});

// Does the cases link work?
test('cases link', async ({ page }) => {
  await page.goto(`${host}/clients`);

  await page.getByRole('link', { name: 'Cases' }).click();
  // await expect(page).toHaveTitle(/EasyLegal.app/);
  await expect(page).toHaveURL(`${host}/cases`)
});

// I had to combine create and delete because they were running asynchronously
test('create and delete client', async ({ page }) => {
  // test create
  await page.goto(`${host}/clients`);

  await page.getByRole('button', { name: 'Add New Client' }).click()

  // Does the form render correctly?
  await expect(page.getByRole('heading', { name: 'Create Client Form'})).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'First Name' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Last Name' })).toBeVisible();
  await expect(page.getByLabel('Date of Birth')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Phone Number' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Email address' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Address 1' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Address 2' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'City' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'State' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Zip' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Referral Source' })).toBeVisible();
  await expect(page.getByRole('checkbox', { name: 'Create default case' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();

  // Fill out the form
  await page.getByRole('textbox', { name: "First Name"}).fill(client1.firstName);
  await page.getByRole('textbox', { name: "Last Name"}).fill(client1.lastName);
  await page.getByLabel('Date of Birth').fill(client1.dateOfBirth);
  await page.getByRole('textbox', { name: "Phone Number"}).fill(client1.phoneNumber);
  await page.getByRole('textbox', { name: "Email address"}).fill(client1.emailAddress);
  await page.getByRole('textbox', { name: "Address 1"}).fill(client1.address1);
  await page.getByRole('textbox', { name: "Address 2"}).fill(client1.address2);
  await page.getByRole('textbox', { name: "City"}).fill(client1.city);
  await page.getByRole('textbox', { name: "State"}).fill(client1.state);
  await page.getByRole('textbox', { name: "Zip"}).fill(client1.zip);
  await page.getByRole('textbox', { name: "Referral Source"}).fill(client1.referralSource);
  await page.getByRole('checkbox', { name: "Create default case" }).check();

  await page.getByRole('button', { name: 'Submit' }).click();

  // Regex below is of the form http://localhost:3000/cases?createFor=12345678-1234-1234-1234-123456789012
  await expect(page).toHaveURL(/https:\/\/(dev|demo)\.easylegal\.app\/cases\?createFor=[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/);

  await page.goto(`${host}/clients`);

  // Confirm client was created
  // await expect(page.locator('ol > li')).toHaveCount(1);

  // await page.getByRole('link', { name: `${client1.lastName} ${client1.firstName}`}).click()

  // await expect(page).toHaveURL(/http:\/\/[dev|demo]\.easylegal\.app\/clients\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/);

  // Delete client
  // await page.getByRole('button', { name: 'Delete Client' }).click()

  // await expect(page).toHaveURL(/http:\/\/[dev|demo]\.easylegal\.app\/clients/);

  // Confirm client was deleted
  // await expect(page.locator('ol > li')).toHaveCount(0);

})