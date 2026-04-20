import {test, Page, expect, chromium} from '@playwright/test'

test('file upload', async ({page}) => {
  await page.goto('https://the-internet.herokuapp.com/upload')
  await page.waitForLoadState('load')
  const filePath = './assets/testfile.txt'

  const fileChooser = page.locator('#file-upload')

  console.log(filePath);

  await fileChooser.setInputFiles(filePath);
  await page.getByRole('button', { name: 'Upload' }).click()

  await page.waitForTimeout(2000)
  await expect(page.locator('text=File Uploaded!')).toBeVisible()
  await expect(page.getByText('File Uploaded!')).toBeVisible();
});