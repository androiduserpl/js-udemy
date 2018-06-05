var player1 = prompt('Set player 1 name');
var height1 = prompt('What is the height of ' + player1 + ' ?');
var age1 = prompt('And now what is age of ' + player1 + ' ?');

//alert('Great! Now let set a player 2'+ 'Press OK!' );
console.log(age1);

var player2 = prompt('Set player 2 name');
var height2 = prompt('OK! What is Your height ' + player2 + '?');
var age2 = prompt('Just Your age we need, and we are redy to go!');


var score1 = height1 + age1 * 5;
var score2 = height2 + age2 * 5;

console.log(score1 + ' '+ score2);

if (score1 == score2) {
    console.log(player1 + ' & ' + player2 + ' has the same ' + score1 + ' score. Is a mach!');
} else if (score1 > score2) {
    console.log(player1 + ' has winn with score ' + score1);
} else {
    console.log(player2 + ' has winn with score ' + score2);
}

/***********************
||
||problem z tą grą jes że nie postrzega zmiennych height i age jako number tylko jako string.
||
************************/