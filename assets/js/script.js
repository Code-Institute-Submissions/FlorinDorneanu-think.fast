
// - Import the questions -

import {questionBox} from './questions.js'

// - Questions game declared variables -

const questionsGame = document.getElementById("questions-container");
const questionsAnswers = document.querySelectorAll(".answer");
const questionTitle = document.getElementById("question");
const answer1_text = document.getElementById("answer1_text");
const answer2_text = document.getElementById("answer2_text");
const answer3_text = document.getElementById("answer3_text");
const answer4_text = document.getElementById("answer4_text");
const submitButton = document.getElementById("btn");

let currentQuestionsGame = 0;
let score = 0;
let timeValue = 10;


// - Function to load the questions and answers -

loadQuestionGame();

function loadQuestionGame() {

    deselectAnswers();

    const currentQuestionBox = questionBox[currentQuestionsGame];

    questionTitle.innerText = currentQuestionBox.question;
    answer1_text.innerText = currentQuestionBox.answer1;
    answer2_text.innerText = currentQuestionBox.answer2;
    answer3_text.innerText = currentQuestionBox.answer3;
    answer4_text.innerText = currentQuestionBox.answer4;
}


// - Function to deselect the answers - 

function deselectAnswers() {
    questionsAnswers.forEach(questionsAnswer => questionsAnswer.checked = false);
}

// - Function to select the answers -

function getSelected () {
    let answer;
    questionsAnswers.forEach(questionsAnswer => {
        if(questionsAnswer.checked) {
            answer = questionsAnswer.id
        }
    })

    return answer;
}


// -  Get the correct answer,
//  create title to display the counter of correct answers
//  and button to reload the guestions game

submitButton.addEventListener("click", () => {
    const answer = getSelected()
    if(answer) {
        if(answer === questionBox[currentQuestionsGame].correct) {
            score++;
        }
        currentQuestionsGame++;
        if(currentQuestionsGame < questionBox.length) {
            loadQuestionGame();
        } else {
            questionsGame.innerHTML = `
            <div id="end_page">
            <h2>You answered ${score}/${questionBox.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            <button onclick="window.location.href='index.html'">Quit</button>
            </div>
            `

        }
    }       
})    

   
let timeLeft = 60;

function countdown() {
	timeLeft--;
	document.getElementById("timer_count").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	} else {
        questionsGame.innerHTML = `
            <div id="end_page">
            <h2>You answered ${score}/${questionBox.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            <button onclick="window.location.href='index.html'">Quit</button>
            </div>
            `
    }
    if(questionBox.length === 0) {
        timeLeft = [0];
    }
};

setTimeout(countdown, 1000);