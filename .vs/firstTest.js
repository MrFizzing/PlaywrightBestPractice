const { test, expext } = require('@playwright/test');

test('firstTest', async ({ page }) => {
	await page.goto('https://prod.knowit.dk/');
	const title = page.locater('h1');
	await expext(title).toBeVisible();
	await expext(title).toHaveText('Shaping a new future for your business takes a whole set of digitalization skills. We’ve got these skills.')
})