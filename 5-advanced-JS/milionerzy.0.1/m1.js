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
                document.getElementById('ans-' + (i + 1)).setAttribute('data-value', i);
            }

        };

        Question.prototype.checkAnswer = function (ans, callback) {
            var sc;

            if (ans === this.correct) {
                console.log('correct answer!');
                document.getElementById('game').style.backgroundColor = 'green';
                sc = callback(true);
            } else {
                console.log('WRONG!!!');
                document.getElementById('game').style.backgroundColor = 'red';
                document.getElementById('yep').textContent = ('NOOO!!');
                sc = callback(false);
            }

            this.displayScore(sc);
        };

        Question.prototype.displayScore = function (score) {
            document.getElementById('score').textContent = 'wynik: ' + score;
        }

        var q1 = new Question('Is JavaScript the coolest programing language in the wordl?', ['Yes', 'No', 'Maby', 'I don\'t know...'],
            0);

        var q2 = new Question('What is my name?', ['Michał', 'Mirek', 'Kuba', 'Adrian'],
            3);

        var q3 = new Question('The sky at night has what color?', ['blue', 'navy blue', 'pink', 'purple'],
            1);


        var questions = [q1, q2, q3];


        function score() {
            var sc = 0;
            return function (correct) {
                if (correct) {
                    sc++;
                }
                return sc;
            }
        }
        var keepScore = score();

        /*        function nextQuestion() {
                    var n = Math.floor(Math.random() * questions.length);
                    questions[n].displayQuestion();

                    Question.prototype.initClicks = function () {
                        var elements = document.querySelectorAll('.ans'),
                            self = this,
                            i;
                        for (i = 0; i < elements.length; ++i) {
                            elements[i].addEventListener('click', function (event) {
                                var ans = event.target.getAttribute('data-value');
                                self.checkAnswer(parseInt(ans), keepScore);
                                
                                nextQuestion();
                            });
                        }
                    };
                    questions[n].initClicks();
                }
                nextQuestion();*/


        //funkcja do pobrania id odpowiedzi
        //ogólnie jest do bani, coś klika tam...
        //potrzeba tak by 'diva' który jest kliknięty brał jego nr żeby wykorzystać to później jako nr odpowiedzi.



        //var answer = parseInt(prompt('Choose wisely the number!'));

        //questions[n].checkAnswer(answer);



        /*środowisko testowe */

        function nextQuestion() {
            var n = Math.floor(Math.random() * questions.length);
            questions[n].displayQuestion();


            questions[n].initClicks();
        }
        Question.prototype.initClicks = function () {
            var elements = document.querySelectorAll('.ans'),
                self = this,
                i;
            for (i = 0; i < elements.length; ++i) {
                elements[i].addEventListener('click', function (event) {
                    var ans = event.target.getAttribute('data-value');
                    self.checkAnswer(parseInt(ans), keepScore);

                    nextQuestion();
                });
            }
        };
        nextQuestion();









    })();
};

//wrzucenie w html
//document.getElementById('answer').textContent = n;
