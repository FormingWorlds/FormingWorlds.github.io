import { test, expect } from '@playwright/test';

// Verifies the site picks up the visitor's OS colour scheme on first visit,
// honours an explicit stored choice over the OS setting, persists the toggle,
// and follows live OS changes only while no explicit choice is stored.

function themeOf(page) {
  return page.evaluate(() => document.documentElement.getAttribute('data-theme'));
}

async function clearStoredTheme(page) {
  await page.goto('/');
  await page.evaluate(() => localStorage.removeItem('pt-theme'));
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
    await page.evaluate(() => localStorage.setItem('pt-theme', 'light'));
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.reload();
    expect(await themeOf(page)).toBe('light');
  });

  test('stored dark wins under OS light', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => localStorage.setItem('pt-theme', 'dark'));
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
  // In light mode the toggle reads as pressed and offers the dark switch.
  await expect(page.locator('.theme-toggle')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.theme-toggle')).toHaveAttribute('title', 'Switch to dark theme');

  await page.click('.theme-toggle');
  expect(await themeOf(page)).toBe('dark');
  expect(await page.evaluate(() => localStorage.getItem('pt-theme'))).toBe('dark');
  await expect(page.locator('.theme-toggle')).toHaveAttribute('aria-pressed', 'false');
  await expect(page.locator('.theme-toggle')).toHaveAttribute('title', 'Switch to light theme');

  await page.reload();
  expect(await themeOf(page)).toBe('dark');
});

test('the documentation dropdown reports its expanded state', async ({ page }) => {
  await page.goto('/');
  const dd = page.locator('.dd').first();
  const trigger = dd.locator('[aria-haspopup]');

  // Closed at rest.
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');

  // Opening the menu on hover flips the reported state to expanded.
  await dd.hover();
  await expect(trigger).toHaveAttribute('aria-expanded', 'true');

  // Moving the pointer away collapses it again.
  await page.mouse.move(0, 0);
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');

  // The keyboard-focus path opens it too.
  await trigger.focus();
  await expect(trigger).toHaveAttribute('aria-expanded', 'true');
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
  await page.evaluate(() => localStorage.setItem('pt-theme', 'dark'));
  await page.emulateMedia({ colorScheme: 'light' });
  await expect.poll(() => themeOf(page)).toBe('dark');
});
