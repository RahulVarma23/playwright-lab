import {test, Page, expect, chromium, Locator} from '@playwright/test'

test('drag and drop', async ({page}) => {
  await page.goto('https://jqueryui.com/droppable/'); 

  // Wait for the frame to be available
  const frame = await page.frameLocator('.demo-frame');

  const source = frame.locator('#draggable');
  const target = frame.locator('#droppable');
 
  await source.dragTo(target);

  await page.waitForTimeout(2000);

  await expect(target).toHaveText('Dropped!');
});