// @ts-check
import { test, expect } from '@playwright/test';

test(' has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Neowaa/);
});

test('check the form fields accept valid input', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get early access' }).first().click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('link', { name: 'Get early access' })).toBeVisible();
  await page.locator('#f-name').fill('123456789');
  await page.locator('#f-email').fill('mknjn@gmail.com');
    await page.locator('#f-phone').fill('0561234567');
     await page.getByRole('button', { name: 'Request early access ' }).click();

});

test('click on FAQ', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'FAQ' }).nth(0).click();

});

test.only('test', async ({ page }) => {
  await page.goto('https://neowaa.com/');
  await page.locator('#nav').getByRole('link', { name: 'Get early access' }).click();
  await page.getByRole('textbox', { name: 'Full name' }).click();
  await page.getByRole('button', { name: 'I am A property owner' }).click();
  await page.getByText('Renting the place I live in').click();
  await page.getByRole('button', { name: 'Request early access' }).click();
});
//initialize reepository if github actions are not added
//git checkout -b branchname--not used this
//git remote add origin https://github.com/Shaharbanuc/PlaywrightRepo.git
//git remote -v will Verify the URL if you gave a wrong url 
//git add . the files with U will be added to the staging area A,M means Modified
//or Click Source Control on the left sidebar.Under Changes, click the + beside Changes to stage all files.
//git commit -m "first commit"
//git push -u origin branchname