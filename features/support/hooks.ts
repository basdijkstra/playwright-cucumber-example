import { After, Before, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { AccountsOverviewPage } from '../pages/accountsoverview.page';
import { LoginPage } from '../pages/login.page';
import { PlaywrightWorld } from './world';

setDefaultTimeout(30_000);

Before(async function (this: PlaywrightWorld) {
  this.browser = await chromium.launch({ headless: process.env.HEADLESS !== 'false' });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  this.loginPage = new LoginPage(this.page);
  this.accountsOverviewPage = new AccountsOverviewPage(this.page);
});

After(async function (this: PlaywrightWorld, { result }) {
  if (result?.status === Status.FAILED) {
    const screenshot = await this.page.screenshot({ fullPage: true });
    this.attach(screenshot, 'image/png');
  }
  await this.context?.close();
  await this.browser?.close();
});
