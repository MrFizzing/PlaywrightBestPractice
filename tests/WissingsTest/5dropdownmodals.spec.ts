import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.w3schools.com/howto/howto_css_modals.asp');
  const acceptButton = page.locator('text="Accept all & visit the site"');
  if(await acceptButton.isVisible()) {
    await acceptButton.click();
  }
  await page.getByRole('button', { name: 'Open Modal' }).click();
  await page.getByText('Modals are awesome!').click();
  await page.locator('#main').getByText('×').click();

  await page.goto('https://semantic-ui.com/modules/dropdown.html');
  await page.locator('input:nth-child(3)').first().selectOption('Denmark');


});
