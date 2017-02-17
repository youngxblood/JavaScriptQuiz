var correctGuesses = 0;
var wrongGuesses = 0;

function print(message) {
    document.write(message);
}


var questionArray = [
    ['Which animal lives longer? Cats or dogs.', 'cats'],
    ['How many legs do spiders have?', 'eight'],
    ['What type of class of animal are humans considered?', 'mammals'],
    ['What is the name of the narrator for BBC\'s series "Planet Earth"?', 'david attenborough'],
    ['Which is more severe of a classification? Endangered or extinct?', 'extinct']
]


function askQuestion (q, q2, a, a2) {
    var answer = prompt(questionArray[q][q2]);
    if (answer.toLowerCase() === questionArray[a][a2]) {
        console.log('Correct! ');
        correctGuesses ++;
        return 'correct';
    } else {
        console.log('Incorrect. ');
        wrongGuesses ++;
        return 'incorrect';
    }
}
function isCorrect (answer, q, q2) {
    if (answer === 'correct') {
        document.write('<li>' + questionArray[q][q2] + '</li>');
    }
}
function isNotCorrect (answer, q, q2) {
    if (answer === 'incorrect') {
        document.write('<li>' + questionArray[q][q2] + '</li>');
    }
}

var answer1 = askQuestion(0,0,0,1);
var answer2 = askQuestion(1,0,1,1);
var answer3 = askQuestion(2,0,2,1);
var answer4 = askQuestion(3,0,3,1);
var answer5 = askQuestion(4,0,4,1);



document.write('<p><b>You got these questions correct:</b></p>');
isCorrect(answer1, 0, 0);
isCorrect(answer2, 1, 0);
isCorrect(answer3, 2, 0);
isCorrect(answer4, 3, 0);
isCorrect(answer5, 4, 0);

document.write('<p><b>You did NOT get these questions correct:</b></p>');

isNotCorrect(answer1, 0, 0);
isNotCorrect(answer2, 1, 0);
isNotCorrect(answer3, 2, 0);
isNotCorrect(answer4, 3, 0);
isNotCorrect(answer5, 4, 0);

document.write('<p><b>You answered ' + correctGuesses + ' question(s) correctly. You guessed ' + wrongGuesses + ' question(s) wrong.');


var gitTest = 0;
gitTest ++;