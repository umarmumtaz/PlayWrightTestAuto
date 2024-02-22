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

const applyBerryJuice = fruitProcessing(1, 5)
console.log(applyBerryJuice)


//function declaration
function age1(birthday) {
    return 2037 - birthday
}
const calAge = age1(1991)
console.log(calAge)
//function expressions
const cal2 = function(birthday){
    return 2040 -birthday;
}
 const age2 = cal2(1991)
console.log(age2, age1)