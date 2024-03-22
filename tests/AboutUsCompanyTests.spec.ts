import {test, expect} from '@playwright/test';
import Header from "../pages/Header";
import AboutUsCompany from "../pages/AboutUsCompany";
import Config from "../util/Config";

let header: Header;
let aboutUsCompanyPage: AboutUsCompany;

test.beforeEach(async ({page}) => {

    header = new Header(page);
    aboutUsCompanyPage = new AboutUsCompany(page);
    await page.goto(Config.symphonyUrl);

})

test('Navigate to `About us/Company` page and verifies the sidebar item titles', async () => {
    await header.clickAboutUsCompanyButton();
    let metaDetailsCategories = await  aboutUsCompanyPage.getMetaDetailsCategoriesContent();
    let metaDetailsArray: string[] = ["HQ", "Founded", "Size", "Consulting Locations", "Engineering Hubs", "Clients", "Certifications"];

    expect(metaDetailsCategories).toBe(metaDetailsArray);
})

