import { test, expect, request, APIResponse } from '@playwright/test';

  
  test('Check main menu links via API', async ({ request, baseURL }) => {
    
    const mainMenuLinks = [
      'effective-landscape/',
      'renewable-energy/',
      'bioconstruction-3/',
      'blog/',
      'contact/',
    ]
    
    for (let link of mainMenuLinks) {
      console.log(baseURL + link);
      const response = await request.get(baseURL + link);
      console.log(response);
      expect((await response).status()).toBe(200);
    }
  
  })



  