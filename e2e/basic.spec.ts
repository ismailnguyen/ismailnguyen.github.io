import { test, expect } from '@playwright/test';

test('home renders and has sane meta', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Software Craftsman/i);
  const ogTitle = page.locator('head meta[property="og:title"]');
  await expect(ogTitle).toHaveAttribute('content', /Ismaïl|Ismail/i);
});

