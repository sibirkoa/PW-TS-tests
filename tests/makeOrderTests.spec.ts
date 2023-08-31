import { test, expect } from '@playwright/test';

//These tests was written with the PlayWright code gen
test('Make order positive', async ({ page }) => {
  await page.goto('http://zelenstroy.online/ru/main-russian/');
  await page.getByRole('link', { name: 'Heal the planet' }).click();
  await page.locator('.x40 [alt]').click();
  await page.locator('div:nth-child(2) > .col-inner > .product-small > .box-image > .image-fade_in_back > a').click();
  await page.getByLabel('Almond Marcona 1 quantity').click();
  await page.getByLabel('Almond Marcona 1 quantity').fill('10');
  await page.getByRole('button', { name: 'Add to basket' }).click();
  await page.getByRole('link', { name: 'Checkout' }).click();
  const total = await page.locator('.order-total bdi').textContent()
  console.log('total sum is ' + total);
  await page.getByPlaceholder('Email address').click();
  await page.getByPlaceholder('Email address').fill('test@test.test');
  await page.getByPlaceholder('First name').click();
  await page.getByPlaceholder('First name').fill('testFN');
  await page.getByPlaceholder('Last name').click();
  await page.getByPlaceholder('Last name').fill('testLN');
  await page.getByPlaceholder('Street address').click();
  await page.getByPlaceholder('Street address').fill('testStreet');
  await page.getByPlaceholder('Town / City').click();
  await page.getByPlaceholder('Town / City').fill('testCity');
  await page.getByPlaceholder('State / County').click();
  await page.getByPlaceholder('State / County').fill('testState');
  await page.getByPlaceholder('Postcode / ZIP').click();
  await page.getByPlaceholder('Postcode / ZIP').fill('99999');
  await page.getByPlaceholder('Notes about your order, e.g. special notes for delivery.').fill('test information');
  await page.getByRole('button', { name: 'Place order' }).click();
  const finalTotal = await page.locator('.total bdi').textContent()
  console.log('finalTotal sum is ' + finalTotal);
  await expect(finalTotal).toEqual(total)
});

test('Make order negative', async ({ page }) => {
  await page.goto('http://zelenstroy.online/ru/main-russian/');
  await page.getByRole('link', { name: 'Heal the planet' }).click();
  await page.locator('.x40 [alt]').click();
  await page.locator('div:nth-child(2) > .col-inner > .product-small > .box-image > .image-fade_in_back > a').click();
  await page.getByLabel('Almond Marcona 1 quantity').click();
  await page.getByLabel('Almond Marcona 1 quantity').fill('10');
  await page.getByRole('button', { name: 'Add to basket' }).click();
  await page.getByRole('link', { name: 'Checkout' }).click();
  await page.getByPlaceholder('Email address').click();
  await page.getByPlaceholder('Email address').fill('test@test.test');
  await page.getByPlaceholder('First name').click();
  await page.getByPlaceholder('First name').fill('testFN');
  await page.getByPlaceholder('Last name').click();
  await page.getByPlaceholder('Last name').fill('testLN');
  await page.getByPlaceholder('Street address').click();
  await page.getByPlaceholder('Street address').fill('testStreet');
  await page.getByPlaceholder('State / County').click();
  await page.getByPlaceholder('State / County').fill('testState');
  await page.getByPlaceholder('Postcode / ZIP').click();
  await page.getByPlaceholder('Postcode / ZIP').fill('99999');
  await page.getByPlaceholder('Notes about your order, e.g. special notes for delivery.').fill('test information');
  await page.getByRole('button', { name: 'Place order' }).click();
  await expect(page.locator('.message-container')).toContainText('Billing Town / City is a required field.')
});