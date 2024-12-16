import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://httpbin.org/forms/post');
  await page.getByLabel('Customer name:').fill('Test');
   await page.getByLabel('Telephone:').fill('24231122');
  await page.getByLabel('E-mail address:').fill('jakob.wissing@knowit.dk');
  await page.getByLabel('Small').check();
  await page.getByLabel('Bacon').check();
  await page.getByLabel('Onion').check();
  await page.getByLabel('Preferred delivery time:').fill('11:30');
  await page.getByLabel('Delivery instructions:').fill('Deliver with extra cheese');
  await page.screenshot({path: 'screenshot10.png'});
  await page.getByRole('button', { name: 'Submit order' }).click();
  await page.waitForURL('https://httpbin.org/post');

});