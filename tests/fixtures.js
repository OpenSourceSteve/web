import fs from 'fs';
import path from 'path';

import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { test as baseTest, expect } from '@playwright/test';

export * from '@playwright/test';

const ENV = process.env.ENV;
const s3Client = new S3Client({ AWS_REGION: ENV})
// const fileName = 'tests/.auth/credentials.json';

let credentials;

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
    const fileName1 = path.resolve(test.info().project.testDir, `.auth/${id}.json`);

    if (fs.existsSync(fileName1)) {
      await use(fileName1);
      return;
    }

    const fileName2 = path.resolve(test.info().project.testDir, `.auth/credentials.json`);
    if (fs.existsSync(fileName2)) {
      const content = fs.readFileSync(fileName2, 'utf8')
      credentials = JSON.parse(content);
    } else {
      const input = {
        Bucket: "testaccounts213993515054",
        Key: "credentials.json"
      }
      const command = new GetObjectCommand(input);
      const response = await s3Client.send(command);
      const responseStr = await response.Body.transformToString();
      credentials = JSON.parse(responseStr)
    }

    const page = await browser.newPage({ storageState: undefined });
    const account = await acquireAccount(id);

    const env = process.env.ENV;
    const loginUrl = `https://${env}.easylegal.app/login`;
    // console.log(`Attempting to login into ${loginUrl}`);
    // console.log(`As ${account.username}`);
    // console.log(`with password ${account.password}`);
    await page.goto(loginUrl);
    await page.getByLabel('Email address').fill(account.username);
    await page.getByLabel('Password').fill(account.password);
    await page.getByRole('button', { name: 'Sign in' }).click();


    await page.waitForURL(`https://${env}.easylegal.app/docket`);
    await expect(page.getByRole('link', { name: 'Clients' })).toBeVisible();
    await expect(page).toHaveTitle(/EasyLegal.app/);

    // End of authentication steps.

    await page.context().storageState({ path: fileName1 });
    await page.close();
    await use(fileName1);
  }, { scope: 'worker' }],
});