import {test, expect, Browser, chromium, Page, Locator} from '@playwright/test'

test('handle dropdown', async ({page}) => {
  
  await page.goto('https://www.amazon.in/')

  await page.locator('#searchDropdownBox').selectOption('Beauty');

  await page.waitForLoadState('load');

  await page.selectOption('#searchDropdownBox', 'Electronics');

  await page.waitForLoadState('load');

})
