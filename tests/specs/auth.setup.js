import { test as setup, expect } from '@playwright/test';
import { STORAGE_STATE_PATH } from '../../playwright.config';

setup('authenticate via backend API', async ({ request }) => {
  const response = await request.post('/api/auth.login', {
    data: {
      username: 'customer2@practicesoftwaretesting.com',
      password: 'welcome01',
    },
  });

  expect(response.ok()).toBe(true);

  await request.storageState({ path: STORAGE_STATE_PATH });
});
