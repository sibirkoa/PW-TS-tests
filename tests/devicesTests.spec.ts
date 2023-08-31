import { test, expect } from '@playwright/test';
import {MainPage} from '../pages/mainPage';

test.describe('Device tests', () => {

  test.use({
    isMobile: true,
    viewport: { width: 390, height: 844 },
  });
  
  test('Mobile test', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();
    await expect(mainPage.mainSlider).toBeHidden();
    
  })
})


  