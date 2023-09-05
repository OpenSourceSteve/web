import { test, expect } from '@playwright/test'

test('redirect', async ({ page }) => {
    await page.goto('http://localhost:3000');

    await expect(page).toHaveURL("https://demo.easylegal.app");
})