import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'http://zelenstroy.online/',
    headless: false,
    screenshot: 'on',
  },
  retries: 1,
  reporter: [['dot'], ['html', {
    open: 'always'
  }]],
  //By default, Playwright runs the chromium browser, but you can test in different browsers. just uncomment this part
  // projects: [
  //   { name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },
  //   { name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },
  //   { name: 'webkit',
  //     use: { ...devices['Desktop Safari'] },
  //   }
  // ]
});

