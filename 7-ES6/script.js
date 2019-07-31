// Lecture: let and const

/*

// ES5
var name5 = 'Jane Smith';
var age5 = 23;

name5 = 'Jane Miller';

console.log(name5);

// ES6
const name6 = 'Jane Smith';
let = 23;
name6 = 'Jane Miller';
console.log(name6);


// ES5

function driversLicence5(passedTest) {

    if (passedTest) {
        var firstName = 'John';
        var yearOfBrith = 1990;

    }

    console.log(firstName + ' born in ' + yearOfBrith + ' is allowed to dirve a car.');
}

driversLicence5(true);


//ES6


function driversLicence6(passedTest) {

    let firstName;
    const yearOfBrith = 1990;

    if (passedTest) {
        firstName = 'John';
    }

    console.log(firstName + ' born in ' + yearOfBrith + ' is allowed to dirve a car.');
}

driversLicence6(true);


let i = 23;

for (let i = 0; i < 5; i++) {

    if (i > 0) {
        console.log(i);

    }
}

console.log(i);

////////////
// Lecture: Blocks and IIFEs


{
    const a = 1;
    let b = 2;
}

console.log(a + b);


///////////
// Lecture: Strings in ES6 / ES2015


let firstName = 'John';
let lastName = 'Smith';
const yearOfBrithe = 1990;

function calcAge(year) {
    return 2016 - year;
}

// ES5
console.log('this is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBrithe + '. Today, he is ' + calcAge(yearOfBrithe) + ' years old');


// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBrithe}. Today, he is ${calcAge(yearOfBrithe)} years old`);


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));

*/

///////////
// Lecture: Arrow Functions: Basics

const years = [1990, 1965, 1982, 1937];

// ES5

var ages5 = years.map(function(el) {
    return 2016 - el;
});

console.log(ages5);

// ES6

let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age of elemnt ${index + 1}: ${(2016 - el)}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new
    Date().getFullYear();
    const age = now - el;
    return `Age of elemnt ${index + 1}: ${age}.`;
})

console.log(ages6);
















