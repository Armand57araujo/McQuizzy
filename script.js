


document.getElementById('startButton').addEventListener('click', startQuiz);

function startQuiz() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'block';
    showQuestion();
    timer = setInterval(updateTimer, 1000);
}
