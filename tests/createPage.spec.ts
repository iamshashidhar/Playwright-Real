import { test, expect } from '@playwright/test';

import { CreatePage } from '../pageObject/CreatePage';

test('validate create Account', async ({ page }) => {
  const createPage = new CreatePage(page);
  await page.goto('https://app.playonereal.com/agent-signup');
  await page.waitForLoadState('networkidle');
  await createPage.visitPage();
  await createPage.createAccountDetails();

  
});


