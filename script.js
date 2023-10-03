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

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        document.getElementById('timeLeft').textContent = timeLeft;
    } else {
        endGame();
    }
}

function endGame() {
    clearInterval(timer);
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('scoreContainer').style.display = 'block';
    document.getElementById('score').textContent = score;
    document.getElementById('initials').focus();
}

function submitScore() {
    let initials = document.getElementById('initials').value;
    if (initials) {
        let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        highScores.push({ initials, score });
        highScores.sort((a, b) => b.score - a.score);
        highScores = highScores.slice(0, 5);
        localStorage.setItem('highScores', JSON.stringify(highScores));
    }

    alert('Score saved!');
    const myObj = {
        name: "James",
        score: 100
    }
    // location.reload(); 
}

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

document.getElementById('startButton').addEventListener('click', startQuiz);
document.getElementById('submitScore').addEventListener('click', submitScore);
highScoresBtn.addEventListener("click", showScores);
