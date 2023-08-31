import { type Locator, type Page } from '@playwright/test';

export class TopBar {
  readonly bar: Page;
  readonly healThePlanetButton: Locator;
  readonly homeLink: Locator;
  readonly effectiveLandscapeLink: Locator;
  readonly blogLink: Locator;
  readonly contactsLink: Locator;
  readonly accountLink: Locator;
  readonly accountTitle: Locator;
  readonly loginLink: Locator;
  readonly languageDropdown: Locator;
  readonly languageDropdownList: Locator;


  constructor(bar: Page) {
    this.bar = bar;
    this.healThePlanetButton = bar.locator('.nav-right.header-nav > .html span');
    this.homeLink = bar.locator('a[title="construverde"]');
    this.effectiveLandscapeLink = bar.locator(".nav-top-link[href='http://zelenstroy.online/effective-landscape/']");
    this.blogLink = bar.locator(".nav-top-link[href='http://zelenstroy.online/blog/']");
    this.contactsLink = bar.locator(".nav-top-link[href='http://zelenstroy.online/contact/']");
    this.accountLink = bar.locator('.icon-user');
    this.accountTitle = bar.locator('.is-small.account-link > .header-account-title');
    this.loginLink = bar.locator('.is-small.nav-top-not-logged-in > span');
    this.languageDropdown = bar.locator('.top-bar-nav .header-language-dropdown > a[href="#"]');
    this.languageDropdownList = bar.locator('.current-dropdown > .nav-dropdown');
  }

  async goHealThePlanet() {
    await this.healThePlanetButton.click();
  }

  async selectLanguage( language : string) {
    await this.languageDropdown.hover();
    await this.languageDropdownList.getByText(language).click();
  }

}