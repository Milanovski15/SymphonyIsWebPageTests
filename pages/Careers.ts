import {Locator, Page} from "@playwright/test";
import JobOpening from "../models/JobOpening";

export default class AboutUsCompany {
    private readonly page: Page;
    private readonly jobOpeningsBoxes: Locator;
    private readonly jobOpeningContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.jobOpeningsBoxes = page.locator('.currentOpenings--job')
        this.jobOpeningContainer = page.locator('.currentOpenings--jobs');
    }

    public async getTotalJobOpeningsNumber(): Promise<number> {
        return this.jobOpeningsBoxes.count();
    }

    public async getAllJobsTitleAndLocation(): Promise<Array<JobOpening>> {
        await this.jobOpeningContainer.waitFor();

        return (await this.jobOpeningsBoxes.evaluateAll(cards => {
            return cards.map(card => {
                let title = card.querySelector('.currentOpenings--job-title').textContent;
                let location = card.querySelector('.currentOpenings--job-locationWrapper').textContent;
                return {title, location}
            })
        }))
    }
}