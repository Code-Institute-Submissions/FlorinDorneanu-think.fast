const questionBox = [
    {
        question : "How many bones are there in an adult human body?",
        answer1 : "186",
        answer2 : "206",
        answer3 : "286",
        answer4 : "306",
        correct : "answer2"
    },
    {
        question : "What is the longest river in the world?",
        answer1 : "Amazon River",
        answer2 : "Congo River",
        answer3 : "Yellow River",
        answer4 : "Nile",
        correct : "answer4"
    },
    {
        question : "In which country was the airline Ryanair founded?",
        answer1 : "Germany",
        answer2 : "Scotland",
        answer3 : "Ireland",
        answer4 : "Spain",
        correct : "answer3"
    },
    {
        question : "Who was assassinated on the 22nd of November 1963?",
        answer1 : "Martin Luther King",
        answer2 : "Jhon F Kennedy",
        answer3 : "MK Gandhi",
        answer4 : "Malcom X",
        correct : "answer2"
    },
    {
        question : "Which band released the song “Wonderwall” in the 90s?",
        answer1 : "Oasis",
        answer2 : "Joy Divison",
        answer3 : "The Verge",
        answer4 : "Nirvana",
        correct : "answer1"
    },
    {
        question : "What was Euclid?",
        answer1 : "A philosopher",
        answer2 : "A poet",
        answer3 : "A painter",
        answer4 : "A mathematician",
        correct : "answer4"
    },
    {
        question : "What is the capital of Iraq?",
        answer1 : "Baghdad",
        answer2 : "Islamabad",
        answer3 : "Tehran",
        answer4 : "Amman",
        correct : "answer1"
    },
    {
        question : "What colour is the “m” from the McDonald's logo?",
        answer1 : "Blue",
        answer2 : "Red",
        answer3 : "Yellow",
        answer4 : "Black",
        correct : "answer3"
    },
    {
        question : "What is guacamole made of?",
        answer1 : "Banana",
        answer2 : "Yoghurt",
        answer3 : "Avocado",
        answer4 : "Chick",
        correct : "answer3"
    },
    {
        question : "How many sides has a Hexagon?",
        answer1 : "5",
        answer2 : "6",
        answer3 : "7",
        answer4 : "8",
        correct : "answer2"
    },
]

// - Import the questions -

//import {questionBox} from '../questions.js'

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
    questionsAnswers.forEach(questionsAnswers => questionsAnswers.checked = false);
}

// - Function to select the answers -

function getSelected () {
    let questionsAnswers;
    questionsAnswers.forEach(questionsAnswers => {
        if(questionsAnswers.checked) {
            answer = questionsAnswers.id
        }
    })

    return answer;
}


// - Create event listener to submit button -

submitButton.addEventListener(click, () => {
    const answer = getSelected()
    if(answer) {
        if(answer === questionBox[currentQuestionsGame].correct) {
            score ++
        }

        currentQuestionsGame++

        if(currentQuestionsGame < questionBox.lenght) {
            loadQuestionGame()
        } else {
            questions-container.innerhtml = `
            <h2>You answered ${score}/${questionBox.lenght} questions correctly </h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})

