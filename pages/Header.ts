import {Locator, Page} from "@playwright/test";

export default class Header {

    private readonly page: Page;
    private readonly aboutUsButton: Locator;
    private readonly companyButton: Locator;
    private readonly careersButton: Locator;
    //private readonly currentOpeningsNavButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.aboutUsButton = page.getByText('About Us', {exact: true });
        this.companyButton = page.getByText('Company', {exact: true });
        this.careersButton = page.getByText('Careers', {exact: true})
    }

    public async clickAboutUsCompanyButton(): Promise<void> {
        await this.aboutUsButton.click();
        await this.companyButton.click();
    }

    public async clickCareersButton(): Promise<void> {
        await this.careersButton.click();
    }
}