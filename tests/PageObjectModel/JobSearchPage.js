exports.JobSearchPage = class JobSearchPage {
    constructor(page) {
        this.page = page;
        this.noOfJobs = page.locator('#searchResultsItems')
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

    async checkLiveJob(jobName) {
       // const jobsDashboard = await this.page.$$(this.noOfJobs)
        const jobsDashboard = await this.noOfJobs.locator('.your-job-selector'); // replace '.your-job-selector' with the actual selector

        for (const jobs of jobsDashboard) {
            console.log(await jobs.textContent())
            if (jobName === await jobs.textContent()) {
                return true;
                break;
            }
        }
    }





    async pause() {
        await this.page.pause();
    }
}
