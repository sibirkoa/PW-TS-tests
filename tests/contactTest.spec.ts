import { test, expect } from '@playwright/test';
import {ContactPage} from '../pages/contactPage';


  const message = 'test message';
  
  test('Submit contact message', async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.goto();
    await contactPage.messageInput.type(message);
    await contactPage.submitButton.click();
    await expect(contactPage.submitMessage).toHaveText('Thank you for your message. It has been sent.');
  
  })

  