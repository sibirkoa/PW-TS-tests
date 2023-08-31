import { type Locator, type Page } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly messageInput: Locator;
  readonly submitButton: Locator;
  readonly submitMessage: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.messageInput = page.locator('textarea[name="your-message"]');
    this.submitButton = page.locator('.wpcf7-submit.button');
    this.submitMessage = page.locator('.wpcf7-response-output');
    
  }

  async goto() {
    await this.page.goto('http://zelenstroy.online/contact/');
  }

  async submitContactMessage(message: string) {
    await this.messageInput.type(message);
    await this.submitButton.click();
  }

  
}