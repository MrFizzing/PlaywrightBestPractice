import { test, expect } from '@playwright/test';
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'],
    ['json', {  outputFile: 'test-results.json' }]
  ],
});

test.use({
  viewport: {
    height: 800,
    width: 800
  }
});

test('test', async ({ page }) => {
  await page.goto('https://prod.knowit.dk/');
  await page.locator('button'), ({ name: 'Menu' });
  await page.getByLabel('Accepter alle', { exact: true }).click();
  await page.getByRole('button', { name: 'Menu' }).click();
  await page.locator('button').filter({ hasText: 'Hvad vi tilbyder' }).click();
  await page.getByRole('banner').getByRole('link', { name: 'Hvad vi tilbyder' }).click();
  await page.getByRole('link', { name: 'Strategi og rådgivning' }).click();
  await page.getByRole('img', { name: '""' }).first().click();
  await page.getByRole('img', { name: '""' }).first().click();
  await page.getByRole('link', { name: 'Operational excellence' }).click(); 
});


