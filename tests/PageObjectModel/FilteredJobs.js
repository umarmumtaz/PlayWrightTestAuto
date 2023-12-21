exports.FilteredJobs= class FilteredJobs{

constructor(page)
{
this.page=page;
}

async goToJobSearchPage() {
    await this.page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job');
}

async selectDistance(distance){
    await this.page.getByLabel('Distance').selectOption(distance);

}
// async selectLocation(Aberdeen1){
//     await this.page.getByLabel('Location').selectOption(Aberdeen1);

// }
async selectDatePosted(Anytime){
    await this.page.getByText('Date Posted').selectOption(Anytime);

}
async selectApplyFilters(applyFilters){

    await this.page.locator("#searchFiltersApplyButton").click();

}
async pause() {
    await this.page.pause();
}
}

