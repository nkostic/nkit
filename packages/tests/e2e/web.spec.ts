import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const button = page.getByRole("button", { name: "clicks: 0" });
});
