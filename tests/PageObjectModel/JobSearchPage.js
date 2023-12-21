exports.JobSearchPage = class JobSearchPage {
    constructor(page) {
       this.page = page;

    }
    async goToJobSearchPage() {
        await this.page.goto("https://test.jobtrain.co.uk/ybscareers/Home/Job");

    }

    async getTotalLiveJobsCount() {
        const list = await this.page.locator('#searchResults');
        const records = await list.getByTitle('Click here to view Job detail for');
        return await records.count();
    }
    async getSearchResultsInnerTexts() {
        return await this.page.locator('#searchNoOfResults').allInnerTexts();
    }
    async pause() {
        await this.page.pause();
    }
}
