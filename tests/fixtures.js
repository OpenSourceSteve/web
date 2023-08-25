import fs from 'fs';
import path from 'path';

import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { test as baseTest, expect } from '@playwright/test';

import { credentials } from './.auth/credentials.js';

export * from '@playwright/test';

const ENV = process.env.ENV;

const s3Client = new S3Client({ AWS_REGION: ENV})

const acquireAccount = accountId => {
    return credentials[accountId]
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
    } else {
      const input = {
        Bucket: "testaccounts213993515054",
        Key: "credentials.js"
      }
      const command = new GetObjectCommand(input);
      const response = await s3Client.send(command);
      console.log("RESPONSE:", response);
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