import { test, expect, Browser, chromium, Page, Locator } from '@playwright/test';

test('login test',async({})=>{

    const browsers: Browser = await chromium.launch({headless:false});

    const page:Page = await browsers.newPage();

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    const username: Locator = page.locator('#username');
    const password: Locator = page.locator('#password');
    const submitBtn: Locator = page.locator('#submit')

    await username.fill("student")
    await password.fill("Password123")
    await submitBtn.click()

    console.log("Home page title is: "+await page.title());
    await page.screenshot({path:'loginpage.png'})

   await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');

})