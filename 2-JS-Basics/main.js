//Lesson varibles
/*

var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fulAge = true;
console.log(fulAge);
*/

//Lesson: varibles 2
/*var name = 'John';-
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is the last name?');
console.log(lastName);*/

// lesson: operators


/*
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;
console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = (3 + 5) * 4 - 6;
console.log(ageJohn); 
*/

// lesson: if else
//
//var name = 'John';
//var age = 26;
//var isMarried = 'no';
//
//if (isMarried === 'yes') {
//    console.log(name + ' is married!');
//} else {
//    console.log(name + ' will hopefully marry soon :)');
//}
//
//isMarried = false;
//
//if (isMarried) {
//    console.log('YES!');
//} else {
//    console.log('NO! :(');
//}
/*
if (23 == '23') {
    console.log('something to print...');
}*/

//lesson: boolean logic and swich

//var name = prompt('Set the name')

/*var age = 25;

if (age < 20) {
    console.log('John is a teenager');
} else if (age > 20 && age < 30) {
    console.log('John is a young man.');
} else {
    console.log('John is a man.');
}


var job = 'teacher';

job = prompt('What does a John?');

switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John is driving a cab.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
    default:
        console.log('John is a ' + job);
}*/


// zadanie

/*
var player1 = 'John';
var height1 = 178;
var age1 = 22;

var player2 = 'Mark';
var height2 = 158;
var age2 = 22;

var player3 = 'Mary';
var height3 = 158;
var age3 = 18;

var score1 = height1 + age1 * 5;
var score2 = height2 + age2 * 5;
var score3 = height3 + age3 * 5;
*/


/**** for two players ****/

/*
if (score1 == score2) {
    console.log(player1 + ' & ' + player2 + ' has the same ' + score1 + ' score. Is a mach!');
} else if (score1 > score2) {
    console.log(player1 + ' has winn with score ' + score1);
} else {
    console.log(player2 + ' has winn with score ' + score2);
}
*/


/**** for thre players ****/

//if (score1 > score2 && score1 > score3) {
//    console.log(player1 + ' has win with ' + player2 + ' & ' + player3 + ' with score: ' + score1);
//} else if (score2 > score1 && score2 > score3) {
//    console.log(player2 + ' has win with ' + player1 + ' & ' + player3 + ' with score: ' + score2);
//} else if (score3 > score1 && score3 > score2) {
//    console.log(player3 + ' has win with ' + player2 + ' & ' + player1 + ' with score: ' + score3);
//} else {
//    console.log('Some thing has go wrong :(');
//}
//
//



// Lesson: functions

/*function calculationAge(yearOfBrith) {
    var age = 2016 - yearOfBrith;
    return age;
}

var ageJohn = calculationAge(1990);
var ageMark = calculationAge(1969);
var ageMery = calculationAge(1948);



function yearsUntilRetirement(name, year) {
    var age = calculationAge(year);
    var retirement = 65 - age;
    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
         console.log(name + ' is alredy retired for ' + retirement + ' years');
    }

}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mark', 1969);
yearsUntilRetirement('Mery', 1948);*/


// Lesson: arrays

/*var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);

names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];


john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();



console.log(john);*/


/******************/
//kiedy w indexOf jako paramet wpiszemy coś czego nie ma w tablicy 
//to zawsze zwraca wartość -1
//
/******************/


/*

if (john.indexOf('teather') === -1) {
    console.log('John is not a teacher');
}
*/

// Lesson: Objects

/*var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBrith: 1990, 
    job: 'teather',
    isMaried: false
};

console.log(john); 
console.log(john.lastName); 
console.log(john['lastName']); 

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programer';

console.log(john);

var jane = new Object();

jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBrith'] = 1969;
jane['job'] = 'retierd';
jane['isMarried'] = true;

console.log(jane);*/

// Lesson: Objects & methods


//v1.0
/*var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBrith: 1990, 
    job: 'teather',
    isMaried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function (yearOfBrith) {
        return 2016 - this.yearOfBrith;
    }
};

console.log(john.calculateAge());

var age = john.calculateAge();

john.age = age;

console.log(john.age);*/


//v2.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBrith: 1990, 
    job: 'teather',
    isMaried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function (yearOfBrith) {
        this.age = 2016 - yearOfBrith;
    }
};

var mike = {
    yearOfBrith: 1950, 
    calculateAge: function () {
        this.age = 2016 - this.yearOfBrith;
    }
};

mike.calculateAge();
console.log(mike);

*/

// lesson: loops

/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}
*/

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

/*
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}
*/


/*var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}*/


/*
for (var i = 1; i <= 5; i++) {
    console.log(i);
    
    if (i === 3) {
        break;
    }
}




console.log('.............');

for (var i = 1; i <= 5; i++) {
    
    if (i === 3) {
        continue;
    }
    console.log(i);
}

*/



// chalange

/*
for (i = 0; i < yearOfBorn.length; i++) {
    empty.push(yearOfBorn[i]);
};
console.log(empty);

for (i = 0; i < empty.length; i++) {

    var age = 2018 - empty[i];

    if (age >= 18) {
        console.log('born in ' + empty[i] + ' he is adault & he is ' + age + ' years old');
    };
};
*/

/*******************************/
/****ALWAYS A COURRENT YEAR*****/
/*******************************/


var currentYear = new Date().getFullYear();
console.log('Current year is ' + currentYear + ' AD.');


function printFullAge(yearOfBorn) {
    var empty = [];
    var fullAge = [];

    for (var i = 0; i < yearOfBorn.length; i++) {
        empty[i] = currentYear - yearOfBorn[i];
    }

    for (i = 0; i < empty.length; i++) {
        if (empty[i] >= 18) {
            console.log('Person ' + (i + 1) + ' age is ' + empty[i] + ' years old, and is of full age.');
            fullAge.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' age is ' + empty[i] + ' years old, and is NOT of full age.');
            fullAge.push(false);
        }
    }
    return fullAge
}

var yearOfBorn = [1990, 2001, 1870, 2000, 1945];

var full_1 = printFullAge(yearOfBorn);
var full_2 = printFullAge([2000, 1952, 1644, 1990]);








