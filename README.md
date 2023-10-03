# McQuizzy

## Technology Used 

| Technology Used | Resource URL | 
| ------------- |:-------------:| 
| HTML | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) | 
| Git | [https://git-scm.com/](https://git-scm.com/) | 

## Description 
This project required me to create a Timed Quiz in JavaScript where for every correct answer the user enters, the timer increments by 5 seconds, and with every wrong answer it decrements in equal measure.

[Visit the Deployed Site](https://armand57araujo.github.io/the-hush-hush-secret-password-generator/) 

![TheQuiz.png](/TheQuiz.png)


## Code Example 


 
const highScoresBtn = document.getElementById("highScores");
const highScoresList = document.getElementById('scoresList');
let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let timer;

function startQuiz() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'block';
    showQuestion();
    timer = setInterval(updateTimer, 1000);
}

let questions = [
    { question: "What comes after A ? ", answer: "B" },
    { question: "What comes after 1 ? ", answer: "2" },
    { question: "What comes after B ? ", answer: "C" },
    // Add more quiz questions
    { question: "What comes after 2 ? ", answer: "3" },
    { question: "What comes after C ? ", answer: "D" },

];

function showQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById('questionContainer').innerHTML = `
            <h2>Question ${currentQuestion + 1}</h2>
            <p>${questions[currentQuestion].question}</p>
            <input type="text" id="answer">
            <button onclick="checkAnswer()">Submit Answer</button>
        `;
    } else {
        endGame();
    }
}

function checkAnswer() {
    let userAnswer = document.getElementById('answer').value.toLowerCase();
    let correctAnswer = questions[currentQuestion].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        score++;
        timeLeft += 10;
        alert('CORRECT answer');
    } else {
        timeLeft -= 10;
        alert('WRONG answer');
    }

    currentQuestion++;
    showQuestion();
}

There were a handful of challanges I dealt with for this project, such as figuring out how to store the correct answers for the quiz, and attatching the commensment of the timer / Quiz with the Start Button, and most daunting of all, displaying the High Scores with initials to the Document from local storage. 


function showScores() {
    //console.log('button clicked');
    // clear out the high scores list to begin with...
    highScoresList.replaceChildren();
    
    // Check if there are high scores in local storage
    if (localStorage.getItem('highScores')) {
        // Retrieve high scores from local storage and parse it as JSON
        const highScores = JSON.parse(localStorage.getItem('highScores'));

        // Loop through the high scores and create list items
        highScores.forEach(score => {
            const listItem = document.createElement('li');
            listItem.textContent = `${score.initials}: ${score.score}`;
            highScoresList.appendChild(listItem);
        });
    } else {
        // Display a message if there are no high scores
        highScoresList.innerHTML = '<li>No high scores available</li>';
    }
}





 <section>
            <h2>High Scores</h2> 
            <button id="highScores">High Scores</button>
            <ul id="scoresList">
                
            </ul>

            </p>
        </section>


I ran into an error at this point both my Javascript File and my HTML, as I had mistakenly not added a home or parent for my list item being created in my Javascript. Additionally I had incorrectly defined the input of "initials" as "name" and as a result was receiving an undefined when the page loads. Fortunately, I was able to work with my tutor and read though and realize my variable was incorrectly named and was able to repair it. 



## Learning Points 


This project was a daunting on the surface, thankfully I had a stronger grasp of functions from my work on the password generator. I still relied a great deal on google, though it felt a little more intuitive. Still painful, but mildly less so.


## Author Info
Armand Araujo
Age: 28
Location: Santa Barbara, CA

 
* [LinkedIn](https://www.linkedin.com/in/armand-araujo-a82ba2291/) 
* [Github](https://github.com/Armand57araujo) 


## Credits 