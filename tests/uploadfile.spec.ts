import{test,expect}from '@playwright/test';
test('fileuploadtest',async({page})=>
{
    await page.goto('https://demo.guru99.com/test/upload/');

    await page.locator('//*[@id="uploadfile_0"]').setInputFiles('E:/Edure/New Text Document.txt');

    await page.locator('#emailwindow > form > ul > li > center > span').click();

    await page.getByRole('button',{name:'Submit File'}).click();
});