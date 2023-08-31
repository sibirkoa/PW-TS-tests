import { test, expect } from '@playwright/test';
import { BlogPage } from '../pages/blogPage';

  const category = 'our projects';

//Crossbrowser test 
  test.use({
    browserName: 'firefox'
  });

  test('Our projects test', async ({ page }) => {
    const blogPage = new BlogPage(page);
    await blogPage.goto();
    await blogPage.categoriesVidget.getByText(category).click();
    expect(blogPage.getPostByTitle('Terraverde project')).toBeTruthy();
  
  })

  