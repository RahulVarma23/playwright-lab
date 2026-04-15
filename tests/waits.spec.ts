import {test, expect, Browser, chromium, Page, Locator} from '@playwright/test';

test('test waits', async ({}) => {

  const browsers: Browser = await chromium.launch({headless:false})

  const page:Page = await browsers.newPage()

  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')

  //wait for specific element state
  await page.locator('input[value=Continue]').waitFor({state:'visible', timeout: 10000}); //recommended

  //wait for specific element
  await page.waitForSelector('#input-lastname', {timeout: 10000})


  await page.locator('#input-firstname').click({button:'right'})

  //wait for specific URL
  await page.waitForURL('**/register', {timeout: 10000})

  //assert specific element
  await expect(page.getByText('Transactions')).toBeVisible({timeout: 5000})

});
