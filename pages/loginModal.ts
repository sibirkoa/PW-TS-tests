import { type Locator, type Page } from '@playwright/test';

export class LoginModal {
  readonly modal: Page;
  readonly loginModal: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(modal: Page) {
    this.modal = modal;
    this.loginModal = modal.locator('div[id="login-form-popup"]');
    this.usernameInput = modal.locator('input[id="username"]');
    this.passwordInput = modal.locator('input[id="password"]');
    this.loginButton = modal.locator('button[name="login"]');
  }

  async submitLoginAs(userName: string, password: string) {
    await this.usernameInput.type(userName);
    await this.passwordInput.type(password);
    await this.loginButton.click();
  }

}