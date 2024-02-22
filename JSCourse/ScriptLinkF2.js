'use strict';

//const { default: test } = require("node:test");

let drivingLicenseN = false;
const drivingLicenseY = true;
if (drivingLicenseY) drivingLicenseN = true;
if (drivingLicenseN)
    console.log('I can drive')

function test1() {
    console.log('this is my first function');
}//calling/invoking/running
test1();

function fruitProcessing(apple, berry) {
    console.log(apple, berry)
    const juice = ('juice with' + apple + 'and' + berry)
    return juice;
}
const applejuice = fruitProcessing(5, 0)
console.log(applejuice);

const applyBerryJuice = fruitProcessing(1,5)
console.log(applyBerryJuice)