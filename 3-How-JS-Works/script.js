///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

console.log(age);
var age = 32;

function foo() {
    var age = 65;
    console.log(age);
}
foo();
console.log(age)






///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword






//var currentYear = new Date().getFullYear();
//console.log(currentYear);



