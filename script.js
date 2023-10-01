


document.getElementById('startButton').addEventListener('click', startQuiz);

function startQuiz() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'block';
    showQuestion();
    timer = setInterval(updateTimer, 1000);
}



let questions = [
    {question: "What comes after A ? ", answer: "B"},
    {question: "What comes after 1 ? ", answer: "2"},
    {question: "What comes after B ? ", answer: "C"},
    // Add more quiz questions
    {question: "What comes after 2 ? ", answer: "3"},
    {question: "What comes after C ? ", answer: "D"},
    
];


