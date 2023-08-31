import {Given, When, Then, setDefaultTimeout} from "@cucumber/cucumber";
import {Browser, chromium, expect, Page} from '@playwright/test';

let browser : Browser;
let page : Page;

setDefaultTimeout(60*1000);

Given('Go to the main page', async  function () {
  browser = await chromium.launch({headless : false } );
  page = await browser.newPage();
  let baseURL = 'http://zelenstroy.online/';
  await page.goto(baseURL);
});

When('Click the login link', async  function () {
  await page.locator('.is-small.nav-top-not-logged-in > span').click();
});

When('Enter the username {string}', async function (userName) {
  await page.locator('input[id="username"]').type(userName);
});

When('Enter the password {string}', async function (password) {
  await page.locator('input[id="password"]').type(password);
});

When('Click the login button', async function () {
  await page.locator('button[name="login"]').click()
});

Then('User {string} logged in', async function (userName) {
  await expect(page.locator('.is-small.account-link > .header-account-title')).toHaveText(userName);
  await browser.close();
});

Then('User {string} has not logged in', async function (userName) {
  await expect(page.locator('.woocommerce-error')).toHaveText("ОШИБКА: Введённый вами пароль пользователя " + userName + " неверен. Забыли пароль?");
  await browser.close();
});

