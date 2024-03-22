import {test, expect} from '@playwright/test';
import Header from "../pages/Header";
import Careers from "../pages/Careers";
import JobOpening from "../models/JobOpening";
import {insertDataInFile} from "../util/WriteToFile";
import Config from "../util/Config";

let header: Header;
let careersPage: Careers;

test.beforeEach(async ({page}) => {

    header = new Header(page);
    await page.goto(Config.symphonyUrl);
})

test('Navigate to `Careers` page, count the job openings, get the title and location from every job position and put it in a file', async () => {
    await header.clickCareersButton();
    let numberOfJobOpenings = await careersPage.getTotalJobOpeningsNumber();
    let jobOpenings: Array<JobOpening> = await careersPage.getAllJobsTitleAndLocation();

    expect(numberOfJobOpenings).toBe(18);

    insertDataInFile(Config.jobOpeningFile, jobOpenings.map(jobOpening => `${jobOpening.title}, ${jobOpening.location}`));
})