import {test, Page, Locator, expect} from '@playwright/test'

test('scrolling test', async ({page}) => {
  await page.goto('https://www.amazon.com')
  await page.mouse.wheel(0, 1000)

  await page.mouse.wheel(0, 2000)
 

   const career = await page.getByRole('link', { name: 'Careers' })

   await career.scrollIntoViewIfNeeded()
   await expect(career).toBeVisible()
   await expect(career).toBeEnabled()

   await career.click()
   await page.waitForTimeout(3000)
   await expect(page).toHaveURL(/.*jobs.*/)
})

