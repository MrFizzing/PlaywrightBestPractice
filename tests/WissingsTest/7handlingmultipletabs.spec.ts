const { test, expect } = require('@playwright/test');

test('Wikipedia link navigation test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.click('text=English');
  await expect(page).toHaveTitle(/Wikipedia/);
 
  const initialUrl = page.url();
  await page.getByLabel('Main menu').click();
  await page.click('a:has-text("Random article")');
  await page.waitForFunction((url) => page.url() !== url, {}, initialUrl);
  const newUrl = page.url();
  expect(newUrl).not.toBe(initialUrl);
 
  const newPageTitle = await page.title();
  console.log(`New page title: ${newPageTitle}`);
});

test('Open link in a new tab, and check if loaded', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.wikipedia.org/');
  await page.click('text=English');
  await expect(page).toHaveTitle(/Wikipedia/);
  
  const menuButton = await page.getByLabel('Main menu').click;
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('a:has-text("Random article")', { modifiers: ['Control'] }), // Simulate Ctrl+Click (Cmd+Click on Mac)
  ]);

  await newPage.waitForLoadState();
  const newPageUrl = await newPage.url();
  const newPageTitle = await newPage.title();

  console.log(`New tab opened with URL: ${newPageUrl}`);
  console.log('New tab title:', newPageTitle);

  expect(newPageTitle).not.toBe('');
  expect(await newPage.url()).not.toBe(page.url());
});