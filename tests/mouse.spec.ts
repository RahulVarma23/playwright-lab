import {test, Page, Locator, expect} from '@playwright/test'

test('mouse click events', async ({page}) => {
  await page.goto('https://demo.guru99.com/test/simple_context_menu.html');

  await page.getByRole('button', { name: 'Double-Click Me To See Alert' }).dblclick();

  await page.waitForTimeout(3000)

  //verify alert test and accept alert
  page.on('dialog', async dialog => {
    expect(dialog.message()).toBe('You double clicked me.. Thank You..');
    await dialog.accept();
  });
  

  //right click or context click

  await page.getByText('right click me').click({ button: 'right' })

   await page.waitForTimeout(3000)

})