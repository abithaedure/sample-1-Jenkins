import{test,expect}from '@playwright/test';
test('Launch Google',async({page})=>
{
    await page.goto('https://www.google.com/');
});
test('Verify Title',async({page})=>
{
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle(/Google/);
});