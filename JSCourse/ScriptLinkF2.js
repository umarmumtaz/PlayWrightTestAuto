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
    // console.log(apple, berry)
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
const cal2 = function (birthday) {
    return 2040 - birthday;
}
const age2 = cal2(1991)
console.log(age2, age1)

/////----------------------------Practice GPT
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("John")); // Output: "Hello, John!"

function testV(name1) {
    const nameT = ('Hello,' + name1)
    return (nameT)
} console.log(testV('Umar'))

function testV1(name2) {
    return name2
} console.log(testV1('umar'))

function addTest(add) {
    return add
} console.log(addTest(10 + 96))

function addTest2(a, b) {
    return a + b
} console.log(addTest2(10, 8));

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }}
console.log(factorial(5)); // Output: 120



//arrow functions 
const ageTest2 = brithday1 =>2024 - brithday1
const ageTest3 =ageTest2
console.log(ageTest3(1998))

///calculate year of retirements
const retirementTest = (birthdayr, namere) =>{
const ageTestr = 2024-birthdayr
const retirementlimit = 65 - ageTestr
return ('retiring time is'+ retirementlimit+'for'+ namere)
}
console.log(retirementTest(1988, "Umar" ))


const TotlaJob = (joinintdate) =>{
const bbb = 2024-joinintdate
return(bbb)

}
console.log(TotlaJob(2015))