import { test, expect } from '@playwright/test';
import { PageObjectModels } from './PageObjectModels';

test('Open Menu button', async ({ page }) => {
  const mainPage = new PageObjectModels(page);
  const acceptCookies = page.locator('acceptCookies')

  await mainPage.navigate();
  if(await acceptCookies.isVisible()){
    mainPage.clickacceptCookies();}
    else {
      await mainPage.clickmenubutton();
    }

  await mainPage.clickwhatweoffer();
});