// - Import the questions -

import {questionBox} from './questions.js'

// - Questions game declared variables -

const questionsGame = document.getElementById ("questions-container");
const questionsAnswers = document.querySelectorAll (".answer");
const questionTitle = document.getElementById ("question");
const answer1_text = document.getElementById ("answer1_text");
const answer2_text = document.getElementById ("answer2_text");
const answer3_text = document.getElementById ("answer3_text");
const answer4_text = document.getElementById ("answer4_text");
const submitButton = document.getElementById ("btn");


let currentQuestionsGame = 0;
let score = 0;

// - Function to load the questions game -

loadQuestionGame ();

function loadQuestionGame () {

    deselectAnswers();

    const currentQuestionBox = questionBox[currentQuestionsGame];

    questionTitle.innerText = currentQuestionBox.question;
    answer1_text = currentQuestionBox.answer1;
    answer2_text = currentQuestionBox.answer2;
    answer3_text = currentQuestionBox.answer3;
    answer4_text = currentQuestionBox.answer4;
}


// - Function to deselect the answers - 

function deselectAnswers() {
    questionsAnswers.forEach(questionsAnswers => questionsAnswers.checked = false);
}

// - Function to select the answers -

function getSelected () {
    let questionsAnswers;
    questionsAnswers.forEach (questionsAnswers => {
        if (questionsAnswers.checked) {
            answer = questionsAnswers.id
        }
    })
    return answer;
}

