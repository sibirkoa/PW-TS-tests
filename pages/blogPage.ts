import { type Locator, type Page } from '@playwright/test';

export class BlogPage {
  readonly page: Page;
  readonly categoriesVidget: Locator;
  readonly blogPost: Locator;

  constructor(page: Page) {
    this.page = page;
    this.blogPost = page.locator('.post');
    this.categoriesVidget = page.locator('.widget_categories');
       
  }

  async goto() {
    await this.page.goto('http://zelenstroy.online/blog/');
  }

  async getPostByTitle(title) {
    await this.blogPost.filter({hasText: title});
  }
  
}