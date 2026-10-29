import{test,expect}from '@playwright/test';
test('Verify Playwright Page',async({page})=>
{
    await page.goto('https://playwright.dev/');
    //verfy title
    await expect(page).toHaveTitle(/Playwright/);
    //verfy url
    await expect(page).toHaveURL('https://playwright.dev/')


});