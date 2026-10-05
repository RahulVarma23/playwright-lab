import {test, expect, Locator} from '@playwright/test'

test('handle dropdown', async ({page}) => {
  
  await page.goto('https://www.amazon.in/')

  const dropdown: Locator = page.locator('#searchDropdownBox123');

  await dropdown.selectOption('Beauty');

  await page.waitForLoadState('load');

  await dropdown.selectOption('Electronics');

  await page.waitForLoadState('load');

  await dropdown.selectOption({index: 15});
  await page.waitForLoadState('load');

  await dropdown.selectOption({label: 'Video Games'});
  await page.waitForLoadState('load');
})
