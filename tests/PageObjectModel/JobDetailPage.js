exports.JobDetailPage = class JobDetailPage {

    constructor(page) {
        this.page = page;



    }
    async goToDashboard() {
        await this.page.goto("https://test.jobtrain.co.uk/ybscareers/Home/Job");

    }


    async getTotalLiveJobsCount() {
        const list = await this.page.locator('#searchResults');
        const records = await list.getByTitle('Click here to view Job detail for');
        return await records.count();
    }
}
