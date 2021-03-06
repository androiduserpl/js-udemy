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

/*
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

*/

////////////
// Lecture: Arrow Functions: Lexical 'this' Keyword


// ES5

//trzeba zdeklarować wcześniej var self = this; żeby funkcja clickMe mogła się odnosić do informacji z wcześniej
/*

/*var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {

        var self = this;
        document.querySelector('.green').addEventListener('click', function () {
            var str = 'This box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
//<<<<<<< HEAD
//}
//*/
//=======
//}*/
//>>>>>>> origin/master

//box5.clickMe();


// ES6

/*

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}

box6.clickMe();

const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {

        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}

box66.clickMe();

function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el) {
       return this.name + ' it friends with ' + el;
    }.bind(this));

    console.log(arr);

}

var friends = ['bob', 'janie', 'mark'];
new Person('John').myFriends5(friends);

// ES6

Person.prototype.myFriends6 = function(friends) {

    var arr = friends.map(el => `${this.name} is friends with ${el}` );

    console.log(arr);

}

new Person('Mike').myFriends6(friends);
*/


////////
// Lecture: Destructuring

// ES5

/*var john = ['John', 26];
var name = john[0];
var age = john[1];*/


// ES6

/*
const [name, age] = ['John', 26];
console.log(name);
console.log(age);


const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {
    firstName,
    lastName
} = obj;

console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a + '  ' + b);


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] =
      calcAgeRetirement(1990);

console.log(age2);
console.log(retirement);
*/

/////////////
// Lecture: Arrays in ES6 / ES2015


/*
const boxes = document.querySelectorAll('.box');

// ES5

//
//var boxesArr5 = Array.prototype.slice.call(boxes);
//boxesArr5.forEach(function (cur) {
//    cur.style.backgroundColor = '#00ff45';
//});

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = '#9e34ac');


// ES5

/*for (var i = 0; i < boxesArr5.length; i++) {

    if (boxesArr5[i].className === 'box blue') {
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue!';

}

// ES6

for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }

    cur.textContent = 'I changed to blue!';

}


// ES5

var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});

console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


// ES6

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/


/////////////
// Lecture: Spread operator
/*


function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18,30,12,21);

console.log(sum1);

// ES5

var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);

console.log(sum2);


// ES6

const sum3 = addFourAges(...ages);
console.log(sum3)

const familySmith = ['Jochn', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Boob', 'Ann'];
const bigFamily = [...familySmith, ...familyMiller];

console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = '#ff00ff');
*/

/////////////
// Lecture: Rest parameters


// ES5

/*

function isFullAges5(limit) {
    //console.log(arguments);

    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}

isFullAges5(1990, 1999, 1965);
*/



//// ES6
//
//function isFullAges6(...years) {
//
//    years.forEach(cur => console.log((2016 - cur) >= 18));
//}
//
//isFullAges6(1990, 1999, 1965);
//
//
//function isFullAges5() {
//    //console.log(arguments);
//
//    var argsArr = Array.prototype.slice.call(arguments);
//
//    argsArr.forEach(function(cur) {
//        console.log((2016 - cur) >= 18);
//    })
//}


/////////////
// Lecture: Default parameters


// ES6

/*function SmithPerson(firstName, yearOfBirth, lastName, nationality) {


    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;


    this.firstName = firstName;
    this.yearOfBrith = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}*/


// ES6
/*

function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.yearOfBrith = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
*/


/////////////
// Lecture: Maps
/*
const question = new Map();
question.set('question', 'what is offical name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'wrong, please try again');

console.log(question.get('question'));
console.log(question.size);


if (question.has(4)) {
    question.delete(4);
    console.log('answer 4 is here')

}*/

//question.clear();


//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

/*
for (let [key, value] of question.entries()) {
    //console.log(`This is ${key}, and it's set to ${value}`)
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get( ans === question.get('correct')));
*/




/////////////
// Lecture: Classes

// ES5

/*
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear - this.yerOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'nauczyciel');


// ES6

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yerOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('hej there!');
    }
}

const john6 = new Person6('John', 1990, 'nauczyciel');

Person6.greeting();
*/


/////////////
// Lecture: Classes with Subclasses

/*
// ES5
var Person5 = function (name, yearOfBrith, job) {
    this.name = name;
    this.yearOfBrith = yearOfBrith;
    this.job = job;
}

Person5.prototype.calculateAge =
    function() {
        var age = new Date().getFullYear() - this.yearOfBrith;
        console.log(age);
    }
var Athletr5 = function(name, yearOfBrith, job, olympicGames, medals)
{
    Person5.call(this, name, yearOfBrith, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}


Athletr5.prototype = Object.create(Person5.prototype);

Athletr5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var jonAthlete5 = new Athletr5('John', 1990, 'Swimer', 3, 10);

jonAthlete5.calculateAge();
jonAthlete5.wonMedal();
*/


// ES6
/*

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('Adrian', 1900, 'swimer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();

*/


/////////////
// Coding Challenge 8

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/
const cssBlue = 'color: blue';

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTress) {
        super(name, buildYear);
        this.area = area; //km2
        this.numTrees = numTress;
    }

    treeDensity() {
        const density = Math.round((this.numTrees / this.area) * 100) / 100;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

class Street extends Element {
    constructor(name, buildYear, lenght, size = 3) {
        super(name, buildYear);
        this.lenght = lenght;
        this.size = size;
    }

    clasifyStreet() {
        const classyfication = new Map();
        classyfication.set(1, 'tiny');
        classyfication.set(2, 'small');
        classyfication.set(3, 'normal');
        classyfication.set(4, 'big');
        classyfication.set(5, 'huge');

        console.log(`${this.name}, build in ${this.buildYear}, is a ${classyfication.get(this.size)} street.`)
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215),
                 new Park('National Park', 1894, 2.9, 3541),
                 new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [ new Street('Ocean Avenue', 1999, 1.1, 4),
                   new Street('Kaczki', 2001, 2.7, 2),
                   new Street('Lizak', 2015, 2.5),
                   new Street('Okoniowa', 1855, 5.1, 5)];

function clalc(arr) {

    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [ sum, sum / arr.length];
}

function reportParks(p) {
    console.log('------ Park Report ------');

    //Density
    p.forEach(el => el.treeDensity());

    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = clalc(ages)
    console.log(`Our ${p.length} parks have an average of ${avgAge} years`)


    // Wich park has mote than 1000 treeh
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} have more than 1000 trees`);

}

function reportStreets(s) {
    console.log('------ Streeet Report ------');

    // Total and average length of the town's streets
    const [totalLength, avgLength] = clalc(s.map(el => el.lenght));
    console.log(`Our ${s.length} streets have total length of ${totalLength} km, with an average of ${avgLength} km.`)

    // Classify sizes

    s.forEach(el => el.clasifyStreet());
}

reportParks(allParks);
reportStreets(allStreets)


console.log('%c Adrian', cssBlue)

