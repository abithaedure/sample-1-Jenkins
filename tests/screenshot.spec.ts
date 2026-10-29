import { expect, test } from "@playwright/test";

test('screenshot capturing',async({page})=>
{
    await page.goto('https://www.google.com/');

    await page.screenshot({path:'Screenshot/google_page.png'})
});

