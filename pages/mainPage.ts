import { type Locator, type Page } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly errorMessage: Locator;
  readonly mainSlider: Locator;

  constructor(page: Page) {
    this.page = page;
    this.errorMessage = page.locator('.woocommerce-error');
    this.mainSlider = page.locator('.slider-nav-simple');
  }

  async goto() {
    await this.page.goto('http://zelenstroy.online/');
  }

}