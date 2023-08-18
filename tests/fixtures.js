import { test as baseTest, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

import { account0 } from './.auth/initial_0.js'
import { account1 } from './.auth/initial_1.js'
import { account2 } from './.auth/initial_2.js'
import { account3 } from './.auth/initial_3.js'

const accounts = [account0, account1, account2, account3]

export * from '@playwright/test';

const acquireAccount = accountId => {
    return accounts[accountId]
}

export const test = baseTest.extend({
  // Use the same storage state for all tests in this worker.
  storageState: ({ workerStorageState }, use) => use(workerStorageState),

  // Authenticate once per worker with a worker-scoped fixture.
  workerStorageState: [async ({ browser }, use) => {
    // Use parallelIndex as a unique identifier for each worker.
    const id = test.info().parallelIndex;
    const fileName = path.resolve(test.info().project.testDir, `.auth/${id}.json`);

    if (fs.existsSync(fileName)) {
      await use(fileName);
      return;
    }

    const page = await browser.newPage({ storageState: undefined });
    const account = await acquireAccount(id);
    console.log("account:", account)

    await page.goto('http://localhost:3000/login');
    await page.getByLabel('Email address').fill(account.username);
    await page.getByLabel('Password').fill(account.password);
    await page.getByRole('button', { name: 'Sign in' }).click();


    await page.waitForURL('http://localhost:3000/docket');
    await expect(page.getByRole('link', { name: 'Clients' })).toBeVisible();
    await expect(page).toHaveTitle(/EasyLegal.app/);

    // End of authentication steps.

    await page.context().storageState({ path: fileName });
    await page.close();
    await use(fileName);
  }, { scope: 'worker' }],
});