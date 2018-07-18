'use strict';

/*--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/************************************
********Zadania do zrobienia:********
[]gra wczytuje się po załadowaniu strony.
[1/2]odpowiedzi się wyświetlają na stronie
[]
*/

window.onload = function () {
    (function () {
        function Question(question, answers, correct) {
            this.question = question;
            this.answers = answers;
            this.correct = correct;
        };

        Question.prototype.displayQuestion = function () {
            document.getElementById('question').textContent = this.question;
            console.log(this.question);

            for (var i = 0; i < this.answers.length; i++) {
                //console.log(i + ': ' + this.answers[i]);
                //zamiast w konsoli uzupełnia divy w html
                document.getElementById('ans-' + (i + 1)).textContent = this.answers[i];
            }

        };

        Question.prototype.checkAnswer = function (ans) {
            if (ans === this.correct) {
                console.log('correct answer!');
            } else {
                console.log('WRONG!!!');
            }
        };

        var q1 = new Question('Is JavaScript the coolest programing language in the wordl?', ['Yes', 'No', 'Maby', 'I don\'t know...'],
            0);

        var q2 = new Question('What is my name?', ['Michał', 'Mirek', 'Kuba', 'Adrian'],
            3);

        var q3 = new Question('The sky at night has what color?', ['blue', 'navy blue', 'pink', 'purple'],
            1);


        var questions = [q1, q2, q3];

        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();
        
        //funkcja do pobrania id odpowiedzi
        //ogólnie jest do bani, coś klika tam...
        //potrzeba tak by 'diva' który jest kliknięty brał jego nr żeby wykorzystać to później jako nr odpowiedzi.
        
        Question.prototype.getClick = function() {
                document.querySelector('.ans').addEventListener('click', function() {
                    var dupa = document.querySelector('.ans').value;
                    console.log(dupa);
                })
        };
        
        //var answer = parseInt(prompt('Choose wisely the number!'));

        questions[n].checkAnswer(answer);
        questions[n].getClick();
    })();
};









//wrzucenie w html 
//document.getElementById('answer').textContent = n;
