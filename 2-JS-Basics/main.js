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
/*var name = 'John';
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

var player1 = 'John';
var height1 = 158;
var age1 = 22;

var player2 = "Mark";
var height2 = 158;
var age2 = 22;


var score1 = height1 + age1 * 5;
var score2 = height2 + age2 * 5;

//console.log(score1 + ' '+ score2);

if (score1 == score2) {
    console.log(player1 + ' & ' + player2 + ' has the same ' + score1 + ' score. Is a mach!');
} else if (score1 > score2) {
    console.log(player1 + ' has winn with score ' + score1);
} else {
    console.log(player2 + ' has winn with score ' + score2);
}
//
//
//if (score1 > score2) {
//    console.log(player1 + ' has winn with score ' + score1);
//} else if (score1 == score2) {
//    console.log(player1 + ' & ' + player2 + ' has the same ' + score1 + ' score. Is a mach!');
//} else {
//    console.log(player2 + ' has winn with score ' + score2);
//}
