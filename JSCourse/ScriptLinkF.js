   // const { escape } = require("querystring");

/*
const jsNature = 'amazing';
if (jsNature === 'amazing') alert("JS is amazing")
console.log(40 + 8 + 21)
console.log("paul")
let studentName ="Nanncy";
console.log(studentName)
//first assignment
let country ='Pakistan';
let continent='Asia';
let population='30cr';
console.log(country);
console.log(continent);
console.log(population);

let ourCountryIsPakistan =true;
console.log(ourCountryIsPakistan)
console.log(typeof ourCountryIsPakistan)
ourCountryIsPakistan ='yes'
console.log(typeof ourCountryIsPakistan)
ourCountryIsPakistan =740
console.log(typeof ourCountryIsPakistan)

//Math operators
const currentYear=2023;
abc=currentYear-1979;
bhai=currentYear-1982;
console.log(abc, bhai)
//Assignment Operators
let x =10;
console.log(x)
x++;
console.log(x)
x--;
console.log(x)
x+=20;
console.log(x)
//comparison operators
op =(abc>bhai)
console.log(op)
console.log(abc <bhai)
console.log(abc >=bhai)

//precedence operators
let a,b;
 a=b=10+2+1;
console.log(a,b)
const averageAge=(abc+bhai)/2;
console.log(abc,bhai,averageAge)

const manaAge=41;
const appaSis=44;
console.log(manaAge<appaSis)
//------------
const jobPosition  ='SSQA';
const fullName= 'Umar Mumtaz';
const jobLocation='Lahore';
const varDOB=1988;
const VarCurrentYear=2023;

console.log('This is ' + fullName + ' My Job Designation is '  + jobPosition+  ' Located at ' 
+jobLocation+  ' and i am '+  (VarCurrentYear-varDOB))

 const myDetails=('2This is ' + fullName + ' My Job Designation is '  + jobPosition+  ' Located at ' 
 +jobLocation+  ' and i am '+  (VarCurrentYear-varDOB))
 console.log(myDetails)

 const myDetails3 = `This is ${fullName}, Working as a ${jobPosition}, at ${jobLocation}`;
 console.log(myDetails3);

 console.log('just a string ')
 //------------------------------------------------------ if else now

 const age= 8;
 if(age>=18){
 console.log('she is eligible')
}else{
    console.log("not eligible for license")
}

const bdYear =1990;
let century;
if(bdYear <=2000) {
    century=20;
}else{
    century=21;
}
console.log(century)
//------------conversion and coeration

const xyz=1991;
bb=xyz+10;
console.log(bb)

const xyz1=1991;
console.log(xyz1 + 18)

console.log(Number(xyz1)+9)
*/
// let n='1'+1;
// n=n-1;
// console.log(n)

// let m=1+1;
// m=m-1;
// console.log(m)

// //truthy vs falsy values
// const money=0;
// if(money){
//     console.log('truthy that is result is ture')
// }else{
//     console.log('results are false')
// };

// const height= 0;
// if(height){
//     console.log(" result is true")
// }else{
//     console.log('result is false')
// };

// //equality operators

// const fav =prompt('what is your fave number')
// console.log(fav)
// if(fav === 23)
// {
//     console.log('result is correct')
// }else{
//     console.log('incorrect results')
// }


//------------------ if elseif
const favourite =Number(prompt("Enter the Value"))
console.log(typeof favourite)
console.log(favourite)
if(favourite === 50)
{
    console.log("C")
}else if (favourite === 70){
console.log("B")
}else if(favourite ===90){
    console.log("A")
}else("Not appear")


const hasVision = true;
const aboveTwernty = false;
console.log(hasVision && aboveTwernty)
console.log(hasVision || aboveTwernty)

const eligible = hasVision || aboveTwernty;

if(eligible){
    console.log("got the liscence")
}else{
console.log("sorry, best of luck next time")
}

//switch Statement

let ourVote='PTI';
switch(ourVote){
case 'PTI':
console.log("My vaot is just for PTI")
break;

case 'PMLn':
console.log('Vote for pmln')
break;

case'PPP':
console.log('vote for PPP')
break;
case 'JI':
console.log('vote for JI')
break;
}

const myParty ='PTI';
console.log('my party is ', myParty)
console.log(`my party is ${myParty}`)

//----------------------ternary operator

let asAge=20;

if(asAge>=18)
{
    console.log('You can drink wine')
}else ('drink water');

let asAge2 =15;
const drink2 = asAge >=18? 'wine': 'water';
console.log(drink2)

const myage=10
let drink3;
if (myage >=18){
    drink3='wine';
}else{
    drink3='watar';
}console.log(drink3)


