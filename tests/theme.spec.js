import { test, expect } from '@playwright/test';

// Verifies the site picks up the visitor's OS colour scheme on first visit,
// honours an explicit stored choice over the OS setting, persists the toggle,
// and follows live OS changes only while no explicit choice is stored.

function themeOf(page) {
  return page.evaluate(() => document.documentElement.getAttribute('data-theme'));
}

async function clearStoredTheme(page) {
  await page.goto('/');
  await page.evaluate(() => localStorage.removeItem('theme'));
}

test.describe('first visit follows the OS colour scheme', () => {
  test('OS light gives a light page', async ({ page }) => {
    await clearStoredTheme(page);
    await page.emulateMedia({ colorScheme: 'light' });
    await page.reload();
    expect(await themeOf(page)).toBe('light');
  });

  test('OS dark gives a dark page', async ({ page }) => {
    await clearStoredTheme(page);
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.reload();
    expect(await themeOf(page)).toBe('dark');
  });
});

test.describe('an explicit stored choice overrides the OS setting', () => {
  test('stored light wins under OS dark', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => localStorage.setItem('theme', 'light'));
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.reload();
    expect(await themeOf(page)).toBe('light');
  });

  test('stored dark wins under OS light', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => localStorage.setItem('theme', 'dark'));
    await page.emulateMedia({ colorScheme: 'light' });
    await page.reload();
    expect(await themeOf(page)).toBe('dark');
  });
});

test('the toggle flips the theme and stores the choice', async ({ page }) => {
  await clearStoredTheme(page);
  await page.emulateMedia({ colorScheme: 'light' });
  await page.reload();
  expect(await themeOf(page)).toBe('light');

  await page.click('.theme-toggle');
  expect(await themeOf(page)).toBe('dark');
  expect(await page.evaluate(() => localStorage.getItem('theme'))).toBe('dark');

  await page.reload();
  expect(await themeOf(page)).toBe('dark');
});

test('a live OS change is followed only without a stored choice', async ({ page }) => {
  await clearStoredTheme(page);
  await page.emulateMedia({ colorScheme: 'light' });
  await page.reload();
  expect(await themeOf(page)).toBe('light');

  // No stored choice: the page tracks the OS switching to dark.
  await page.emulateMedia({ colorScheme: 'dark' });
  await expect.poll(() => themeOf(page)).toBe('dark');

  // Once a choice is stored, later OS changes are ignored.
  await page.evaluate(() => localStorage.setItem('theme', 'dark'));
  await page.emulateMedia({ colorScheme: 'light' });
  await expect.poll(() => themeOf(page)).toBe('dark');
});
