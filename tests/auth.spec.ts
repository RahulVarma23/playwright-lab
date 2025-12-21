import {test, expect, Browser, chromium, Page, Locator} from '@playwright/test';

test('authentication test', async ({}) => {


    const browser: Browser = await chromium.launch({headless:false})
    const page:Page = await browser.newPage();


    const username = 'admin'
    const password = 'admin'
    const authHeader = 'Basic '+btoa(username+':'+ password)

    page.setExtraHTTPHeaders({Authorization: authHeader})
    await page.goto('https://the-internet.herokuapp.com/basic_auth');

    expect(page.getByText('Congratulations! You must have the proper credentials.')).toBeVisible


})