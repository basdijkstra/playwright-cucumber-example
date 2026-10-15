import { Locator, Page } from "@playwright/test";

export class AccountsOverviewPage {

    private readonly page: Page;
    readonly accountTableLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.accountTableLocator = this.page.locator('#accountTable');
    }
}