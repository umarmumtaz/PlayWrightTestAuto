exports.FilteredJobs= class FilteredJobs{

constructor(page)
{
this.page=page;
//this.page= await.getByRole('option', { name: 'Aberdeen1' }).click();
}

async goToJobSearchPage() {
    await this.page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job');
}

async selectDistance(distance){
    //await this.selectDistance.selectOption(distance)

}
async selectLocation(){
//     await this.page.getByLabel('Location').selectOption(location);
await this.page.getByRole('option', { name: 'Aberdeen1' }).click();
 }
// async selectDatePosted(Anytime){
//     await this.page.getByText('Date Posted').selectOption(Anytime);

// }
async selectApplyFilters(applyFilters){

    await this.page.locator("#searchFiltersApplyButton").click();

}
async pause() {
    await this.page.pause();
}
}

