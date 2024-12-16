import { test } from '@playwright/test';

test('smart screenshots with different viewports', async ({ page }) => {
  const screenshotTasks = [
    { url: 'https://www.easyjet.com/ejcms/cache/medialibrary/Images/JSS/Destinations/Hero/France_Nice_3840x2160.jpg?mw=1920&hash=89E3262974A833F2E913A2ACA14E4722', path: 'screenshot1.png', viewport: null, fullPage: false },
    { url: 'https://www.smashingmagazine.com/2017/05/long-scrolling/', path: 'screenshot2.png', viewport: null, fullPage: true },
    { url: 'https://www2.ifa.hawaii.edu/styles/guide09/Wide_page.shtml', path: 'screenshot3.png', viewport: { width: 640, height: 480 }, fullPage: false },
    { url: 'https://playwright.dev/docs/screenshots', path: 'screenshot4.png', viewport: { width: 1280, height: 720 }, fullPage: false, element: 'heading' as const, name: 'Screenshots' }
  ];

  for (const task of screenshotTasks) {
    if (task.viewport) {
      await page.setViewportSize(task.viewport);
    }

    await page.goto(task.url);

    if (task.element) {
      // Taking a screenshot of a specific element
      await page.getByRole(task.element, { name: task.name, exact: true }).screenshot({ path: task.path });
    } else {
      // Taking a full-page or regular screenshot
      await page.screenshot({ path: task.path, fullPage: task.fullPage });
    }
  }
});




/* import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://www.easyjet.com/ejcms/cache/medialibrary/Images/JSS/Destinations/Hero/France_Nice_3840x2160.jpg?mw=1920&hash=89E3262974A833F2E913A2ACA14E4722');
await page.screenshot({path: 'screenshot1.png'});

await page.goto('https://www.smashingmagazine.com/2017/05/long-scrolling/');
await page.screenshot({path: 'screenshot2.png', fullPage: true});
await page.setViewportSize({
    width: 640,
    height: 480,
});

await page.goto('https://www2.ifa.hawaii.edu/styles/guide09/Wide_page.shtml');
await page.screenshot({path: 'screenshot3.png'});
await page.setViewportSize({
    width:  1280,
    height: 720,
});

await page.goto('https://playwright.dev/docs/screenshots');
await page.getByRole('heading', { name: 'Screenshots', exact: true }).screenshot({ path: 'screenshot4.png' }); */
//}); */