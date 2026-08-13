import {test, expect} from '@playwright/test'

test('should check for broken images', async ({page}) => {
  await page.goto('https://the-internet.herokuapp.com/broken_images')
  const images = await page.locator('img')
  console.log('Total images: ' + await images.count())

  const allImages = await images.all()

  for await (const img of allImages) {
    const imgSrc = await img.getAttribute('src')
    expect.soft(imgSrc?.length).toBeGreaterThan(1)
    //@ts-ignore
    if(imgSrc?.length > 1) {
    const imgUrl = 'https://the-internet.herokuapp.com/'+imgSrc;
    const res = await page.request.get(imgUrl);
    expect.soft(res.status(), 'Failed to load image: ' + imgUrl).toBe(200);
    }
  }
})