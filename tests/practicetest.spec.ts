import{test,expect}from '@playwright/test';
test('login page',async({page})=>
{
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Username').press('Tab');
    await page.getByLabel('Password').fill('Password123');
    await page.getByRole('button',{name:'Submit'}).click();
   // await page.getByRole('button',{name:'Submit'}).press('Enter');

   //verify successful login text
   await expect(page.getByText('Logged In Successfully')).toBeVisible();
});

test('select option',async({page})=>
{
    await page.goto('https://practicetestautomation.com/practice-test-table/');
    await page.pause();
    //await page.getByLabel('Sort by:').selectOption('col_lang');
    //using label
    await page.getByLabel('Sort by:').selectOption({label:'Course Name'});
});

test('Verify logo',async({page})=>
{
    await page.goto('https://playwright.dev/');

    await expect(page.getByAltText('Playwright logo')).toBeVisible();
});

test('Verify Radio and Checkbox',async({page})=>
{
    await page.goto('https://practicetestautomation.com/practice-test-table/');

    await page.pause();

    //radio button
    await page.getByLabel(' Java').check();

    await expect(page.getByLabel(' Java')).toBeChecked();

    //checkbox

    await page.getByLabel(' Beginner').check();

    await page.getByLabel(' Intermediate').check();

    await page.getByLabel(' Advanced').uncheck();
});