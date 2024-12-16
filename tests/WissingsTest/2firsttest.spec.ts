import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://lx2.kotans.stil.dk/#/snydeLogin');
  await page.locator('sds-card').filter({ hasText: 'Isabella Søndergaard Login' }).getByRole('button').click();
  await page.getByRole('link', { name: 'Søg uddannelse' });
  await page.getByRole('searchbox', { name: 'null' }).click();
  await page.getByRole('searchbox', { name: 'null' }).fill('e');
  await page.getByText('Journalistik Syddansk').click();
  await page.getByRole('button', { name: 'Gennemfør ansøgninger' }).click();
  await page.getByRole('button', { name: 'Næste' }).click();
  await page.getByRole('button', { name: 'Snyde underskriv' }).click();
  await page.getByRole('button', { name: 'Se ansøgninger' }).click();
  await page.reload();
  await page.waitForTimeout(3000);
  await page.screenshot({path: 'screenshot.png'})
});