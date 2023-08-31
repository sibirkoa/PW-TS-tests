import { test, expect } from '@playwright/test';
import {MainPage} from '../pages/mainPage';
import {TopBar} from '../pages/topBar';

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goto();
});

test.describe('Main page tests', async () => {
  test('Check default state', async ({ page, baseURL }) => {
  const topBar = new TopBar(page);
  const mainPage = new MainPage(page);
  expect(page).toHaveURL(`${baseURL}`);
  expect(page).toHaveTitle(/construverde/);
  expect(topBar.healThePlanetButton).toBeEnabled();
  expect(topBar.homeLink).toBeEnabled();
  expect(topBar.effectiveLandscapeLink).toBeVisible();
  expect(topBar.blogLink).toBeEnabled();
  expect(topBar.contactsLink).toBeEnabled();
  expect(mainPage.mainSlider).toBeVisible();
  })

}) 
  