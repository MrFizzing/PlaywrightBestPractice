import { test, expect } from '@playwright/test';
import { PageObjectModels } from './PageObjectModels';

test('Open Menu button', async ({ page }) => {
  const mainPage = new PageObjectModels(page);

  await mainPage.navigate();
  await mainPage.clickacceptCookies();
  await mainPage.clickmenubutton();
  await mainPage.clickwhatweoffer();
});