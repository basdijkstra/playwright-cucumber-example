import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PlaywrightWorld } from '../support/world';

Given('I am on the ParaBank home page', async function (this: PlaywrightWorld) {
  await this.loginPage.open();
});

When(
  'I log in with username {string} and password {string}',
  async function (this: PlaywrightWorld, username: string, password: string) {
    await this.loginPage.loginAs(username, password);
  },
);

Then('the account table is visible', async function (this: PlaywrightWorld) {
  await expect(this.accountsOverviewPage.accountTableLocator).toBeVisible();
});
