/**
 * Created by Mark on 2/17/2017.
 */
var correctGuess = 0;
var wrongGuess = 0;
var correctQuestions = [];
var wrongQuestions = [];

var questionArray = [
    ['Which animal lives longer? Cats or dogs.', 'cats'],
    ['How many legs do spiders have?', 'eight'],
    ['What type of class of animal are humans considered?', 'mammals'],
    ['What is the first name of the narrator for BBC\'s series "Planet Earth"?', 'david'],
    ['Which is more severe of a classification? Endangered or extinct?', 'extinct']
]
function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

//Builds the lists of the correct and incorrect questions and prints them in HTML
function buildList (arr) {
    var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i ++) {
        listHTML += '<li>' + arr[i] + '</li>';
    }
    listHTML += '</ol>';
    return listHTML;
}
//Function to prompt the user with questions and keeps tabs on correct/incorrect questions
function askQuestions (i) {
    var question = questionArray[i][0];
    var answer = questionArray[i][1];
    var guess = prompt(question);
    guess = guess.toLowerCase();
    if (guess === answer) {
        correctGuess++;
        correctQuestions.push(question);
    } else {
        wrongGuess ++;
        wrongQuestions.push(question);

    }
}

//Asks the questions
for (i = 0; i < questionArray.length; i++) {
    askQuestions(i);
}


//Prints out how many answers were correct and which questions were correct/incorrect
html = "You got " + correctGuess + " question(s) right and " + wrongGuess + ' question(s) wrong.';
html += '<h2>You got these questions correct:</h2>';
html += buildList(correctQuestions);
html += '<h2>You got these questions wrong: </h2>';
html += buildList(wrongQuestions);
print(html);
