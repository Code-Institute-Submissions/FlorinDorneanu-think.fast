# Think Fast
## Milestone Project Two

Think Fast is a general questions quiz game. The quiz has ten questions that the user has to answer in 60 seconds. If the time is over, the game finishes. The user has to press Start button to enter the questions. After one question is answered, the user has to press the submit button to get to the next question. When all the questions are answered and the user presses the Submit button, the results will be shown to the user. The user can reload the quiz or quit it. The user is presented with the rules of the quiz in the beginning of the game, when pressing the button Game Rules.
The quiz has simple and diverse questions so is suitable for all users ages.  
***

## Demo 

The live website can be viewed  here - [Think Fast](https://florindorneanu.github.io/think.fast/)

The GitHub repository can be viewed here - [FlorinDorneanu/think.fast](https://github.com/FlorinDorneanu/think.fast)

![Responsive](images-for-readme/am-i-responsive.png)
***
## User Experience (UX)

### Strategy

### User Stories
As a user I want to be able to :
* Understand what the quiz is about.
* Be able to know the rules of the game.
* Easily enter the quiz.
* Quit the quiz with ease.
* See how much time I have left to answer the questions.
* Easily select the options provided.
* To submit the answer with ease.
* Get the final score at the end of the quiz.
* Replay the quiz.

## Structure

The quiz game will have :
* A homepage containing the logo, an inviting message, a button to start the game and a button for the rules of the quiz.
* A Game Rules screen which will contain the rules of the game and a button to start the quiz.
* The quiz game that will consists of a timer, question, for options and a "Submit" button.
* A Result screen containing the score of the user, a "Replay" button and a "Quit" button.

## Skeleton
* Desktop Wireframes - [Homepage](images-for-readme/think.fast-wireframe-homepage-desktop.png)/[Rules](images-for-readme/game-rules-desktop.png)/[Quiz](images-for-readme/quiz-game-desktop.png)/[Score](images-for-readme/score-desktop.png)


* Mobile Wireframes - [Homepage](images-for-readme/think.fast-wireframes-homepage-mobile.png)/[Rules](images-for-readme/game-rules-mobile.png)/[Quiz](images-for-readme/quiz-game-mobile.png)/[Score](images-for-readme/score-mobile.png)

## Surface

### Colour
A shade of red and a shade of yellow were used primarily on the website. The colours were chosen for their playful vibe and the nice contrast. Black and white, being strong in contrast colours, were used for typography because they work great with the primary colours.

### Typography
The chosen fonts are "Rajdhan" and "Teko". The "Teko" font was used for the heading and the "Rajdhan" was used for the answers. The fonts have been taken from [Google Fonts](https://fonts.google.com/).

### Call to Action
* The "Start" button takes the user to the questions of the quiz game.
* The "Game Rules" button opens the rules of the game. From there the user can click on the button "Start" that takes the user to the questions of the quiz.
* The "Submit" button takes the user to the next question.
* At the end of the questions, when the user presses on the "Submit" button, the user will be presented with the score achieved.
* At the end of the game, the user can choose to press the "Reload" button for another play of the quiz.

### Features to Implement in future
* A highscore board;
* A list of 100 questions from where only 10 questions will be randomly selected.
* To use random storage for registering the question game and highscore.
* The incorrect and correct answer to have different colours.
***

# Technologies Used
* HTML5 - Mark-up language using semantic structure.
* CSS3 - Cascading style sheet used for styling.
* Gitpod.io - For writing the code, using the command line for commiting and pushing to GitHub.
* GitHub - Used to host the repository.
* Git - Used for version control of the project.

### Design
* [Google fonts](https://fonts.google.com/) - For styling the typography.
* [Balsamiq wireframe](https://balsamiq.cloud/) - To build wireframes in the design phase.
* [Beautifier](https://beautifier.io) - To beautify HTML and CSS code.
* [Prettier](https://prettier.io/) - To beautify Javascript code.
* [Logo](https://logo.com) - To make the logo of the website.

### Testing
* [JsHint](https://jshint.com) - Testing validity of JavaScript.
* [HTML Validator](https://validator.w3.org/#validate_by_input) - Testing validity of HTML.
* [CSS Validator](https://jigsaw.w3.org/css-validator/) - Testing validity of CSS.
* [Am I Responsive](https://ui.dev/amiresponsive#) - Checking the responsive nature and creating the mock-ups provided.
* DEV Tools - Lighthouse.
***

## Testing

### Validator Testing

* HTML Validator
![HTML Validator for index.html](images-for-readme/html-validator.png)
![HTML Validator for questions-container.html](images-for-readme/html-validator.png)
![HTML Validator for rules.html](images-for-readme/html-validator.png)
* CSS Validator
![HTML Validator](images-for-readme/css-validator.png)
* Javascript Validator for script.js file
![script.js Validator](images-for-readme/script.js-validator.png)
* Javascript Validator for questions.js file
![questions.js Validator](images-for-readme/questions.js-validator.png)

### Performance Testing

Tested using the Developer Tools Lighthouse for desktop and mobile :

### Desktop
![DevTools Desktop](images-for-readme/lighthouse-desktop.png)

### Mobile
![DevTools Mobile](images-for-readme/lighthouse-mobile.png)

## Testing - Table of Contents

| Test Description  | Expected Outcome  | Actual Outcome  |  Re-Test |
|---|---|---|---|
| Test the Start button  | When the button is clicked the quiz game should appear  | Passed  | Passed  |
| Test the Game Rules button  | The button should open the rules of the game  | Passed  | Passed  |
| Test the Start button on the Game Rules screen  | The button should send the user to the quiz game  | Passed  | Passed  |
| Test the Submit button  | The button should send the user to the next question and when the questions are completed, the button should present the score to the user  | Passed  | Passed  |
| Test the Reload button  | When the button is clicked the quiz game should reload  | Passed  | Passed  |
| Test the Quit button  | The button should quit the game and open the homepage  | Passed  | Passed  |
| Test the timer  | The timer should go from 60 seconds to 0 seconds, if time has passed and the questions are not completely answered, then the game finishes  | Passed  | Passed  |

### Browser Compatibility

The website was tested on the following browsers:
* Google Chrome, desktop and mobile;
* Safari, desktop and mobile;
* Mozila Firefox, desktop and mobile.

### OS Compatibility

Tested on iOS, macOS and Android. 
Chrome Developer Tools was used for testing the responsiveness.
***