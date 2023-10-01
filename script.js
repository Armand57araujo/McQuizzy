let questions = [
    { question: "What comes after A ? ", answer: "B" },
    { question: "What comes after 1 ? ", answer: "2" },
    { question: "What comes after B ? ", answer: "C" },
    // Add more quiz questions
    { question: "What comes after 2 ? ", answer: "3" },
    { question: "What comes after C ? ", answer: "D" },

];

let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let timer;



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

document.getElementById('submitScore').addEventListener('click', submitScore);

function submitScore() {
    let initials = document.getElementById('initials').value;
    if (initials) {
        let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        highScores.push({ initials, score });
        highScores.sort((a, b) => b.score - a.score);
        highScores = highScores.slice(0, 5); // Keep top 5 scores
        localStorage.setItem('highScores', JSON.stringify(highScores));
    }
    alert('Score saved!');
    location.reload(); // Reload the page
}











document.getElementById('startButton').addEventListener('click', startQuiz);

function startQuiz() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'block';
    showQuestion();
    timer = setInterval(updateTimer, 1000);
}






