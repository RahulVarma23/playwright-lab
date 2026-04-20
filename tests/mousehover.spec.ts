import {test, chromium, Page, Locator, expect} from '@playwright/test'

test('mouse hover test - spicejet', async ({page}) => {

  await page.goto('https://www.spicejet.com/');

  await page.getByText('Add-ons').first().hover();

  await page.getByText('Visa Services').first().click();

  await page.waitForTimeout(5000)
})


test('mouse hover test - bigbasket', async ({page}) => {

  await page.goto('https://www.bigbasket.com/');

  await page.locator('//*[contains(@id,"headlessui-menu-button-:Ramkj6:")]').click();

//  await page.getByText('Visa Services').first().click();

  await page.waitForTimeout(1000)

  await page.getByText('Fashion', { exact: true }).last().hover();

  await page.getByText("Men's Apparel", { exact: true }).last().hover();

  //validate the content opened after hovering on Men's Apparel
//   await expect(page.getByText('Active Wear')).toBeVisible();
//   await expect(page.getByText('Casual')).toBeVisible();
//   await expect(page.getByText('Formal')).toBeVisible();
//   await expect(page.getByText('Innerwear')).toBeVisible();
//   await expect(page.getByText("Men's Accessories")).toBeVisible();

const expectedItems = [
  'Active Wear',
  'Casual',
  'Formal',
  'Innerwear',
  'Men\'s Accessories'
];

for (const item of expectedItems) {
  await expect(page.getByText(item)).toBeVisible();
}
  
})