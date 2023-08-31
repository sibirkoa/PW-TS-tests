import { test, expect } from '@playwright/test';
import {MainPage} from '../pages/mainPage';
import {TopBar} from '../pages/topBar';
import {LoginModal} from '../pages/loginModal';

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goto();
  const topBar = new TopBar(page);
  await topBar.loginLink.click();
});

test.describe('Login tests', async () => {
  const userName = 'testUser';
  const password = 'Password1!';
  const incorrectPassword = 'incorrectPassword1!';
  
  test('Successfull login', async ({ page }) => {
    const loginModal = new LoginModal(page);
    await expect(loginModal.loginModal).toBeVisible();
    await loginModal.submitLoginAs(userName, password);
    const topBar = new TopBar(page);
    await expect(topBar.accountTitle).toHaveText(userName);
  
  })

  test('Unsuccessfull login', async ({ page }) => {
    const loginModal = new LoginModal(page);
    await expect(loginModal.loginModal).toBeVisible();
    await loginModal.submitLoginAs(userName, incorrectPassword);
    const mainPage = new MainPage(page);
    await expect(mainPage.errorMessage).toHaveText("Error: the password you entered for the username " + userName + " is incorrect. Lost your password?");
  })  
}) 
  