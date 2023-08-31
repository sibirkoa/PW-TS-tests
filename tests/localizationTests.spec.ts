import { test, expect } from '@playwright/test';
import {TopBar} from '../pages/topBar';
import {MainPage} from '../pages/mainPage';
  
test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goto();

});
test('English language test', async ({ page }) => {
  const topBar = new TopBar(page);
  const language : string = 'English';
  const menuitemsText = ['Effective landscape', 'Renewable energy', 'Bioconstruction', 'Blog', 'Contacts'];
  await topBar.selectLanguage(language);
  await expect(topBar.languageDropdown).toHaveText(language);
  const menuItems = page.locator('.menu-item-design-default');
  // console.log('menu items: ' + await menuItems.allInnerTexts());
  expect(menuItems).toHaveText(menuitemsText);
})

//Test should catch the error about "effectife landscape" element
test('Spanish language test', async ({ page }) => {
  const topBar = new TopBar(page);
  const language : string = 'Español';
  const menuitemsText = ['Paisaje efectivo', 'Energía alternativa', 'Bioconstrucción', 'Blog', 'Contactos'];
  await topBar.selectLanguage(language);
  await expect(topBar.languageDropdown).toHaveText(language);
  const menuItems = page.locator('.menu-item-design-default');
  console.log('menu items: ' + await menuItems.allInnerTexts());
  expect(menuItems).toHaveText(menuitemsText);
})

  