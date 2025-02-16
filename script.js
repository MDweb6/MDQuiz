
function OpenCredit(){
    let FirstBox = document.getElementById("FirstBox");
    let creditBox = document.getElementById("creditBox");

    FirstBox.style.display = "none";
    creditBox.style.display = "flex";

}

function BackToHome(){
    let FirstBox = document.getElementById("FirstBox");
    let creditBox = document.getElementById("creditBox");

    FirstBox.style.display = "flex";
    creditBox.style.display = "none";
}

function BackToHome1(){
    let FirstBox = document.getElementById("FirstBox");
    let PlayBox = document.getElementById("creditBox");

    FirstBox.style.display = "flex";
    PlayBox.style.display = "none";
}

let music = document.getElementById("backgroundMusic");
let musicIcon = document.getElementById("musicIcon");

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicIcon.className = "fa-solid fa-volume-high";
    } else {
        music.pause();
        musicIcon.className = "fa-solid fa-volume-off"; 
    }
}

function OpenPlayBox(){

    let PlayBox = document.getElementById("PlayBox");
    let FirstBox = document.getElementById("FirstBox");

    FirstBox.style.display = "none";
    PlayBox.style.display = "flex";
}




const question = document.getElementById("question");
const choices = Array.from(document.querySelectorAll('.choiceBox'));
const scoreText = document.querySelector('#score');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let quastions = [
    {
        quation: 'Vems huvued är lika stor som vattenmelon?',
        choice1: 'Mohammed',
        choice2: 'Hassan',
        choice3: 'Osamma',
        choice4: 'Nabil',
        choice5: 'Salam',
        answer: 5
    },
    {
        quation: 'Vem är angrybird?',
        choice1: 'Mohammed',
        choice2: 'Hassan',
        choice3: 'Osamma',
        choice4: 'Nabil',
        choice5: 'Salam',
        answer: 1
    },
    {
        quation: 'Vem har pincio näsa?',
        choice1: 'Mohammed',
        choice2: 'Hassan',
        choice3: 'Osamma',
        choice4: 'Nabil',
        choice5: 'Salam',
        answer: 2
    },
    {
        quation: 'Vem ser ut exakt som ekorre (Sinjab)?',
        choice1: 'Mohammed',
        choice2: 'Hassan',
        choice3: 'Osamma',
        choice4: 'Nabil',
        choice5: 'Salam',
        answer: 3
    },
    {
        quation: 'Vem är klassens 6ix9ine?',
        choice1: 'Mohammed',
        choice2: 'Hassan',
        choice3: 'Osamma',
        choice4: 'Nabil',
        choice5: 'Salam',
        answer: 4
    },
];

const MAX_QUESTIONS = quastions.length;

const startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...quastions];
    scoreText.innerText = `0/${MAX_QUESTIONS}`; // Återställ poäng
    getNewQuestion();
};

const getNewQuestion = () => {
    if (questionCounter >= MAX_QUESTIONS) {
        setTimeout(() => {
            alert(`Spelet är slut! Du fick ${score}/${MAX_QUESTIONS} poäng!`);
            startGame(); // Startar om spelet
        }, 500);
        return;
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.quation;

    choices.forEach((choice, index) => {
        choice.dataset['number'] = index + 1;
        choice.querySelector('p:last-child').innerText = currentQuestion['choice' + (index + 1)];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;

        const selectedChoice = e.currentTarget;
        const selectedAnswer = parseInt(selectedChoice.dataset['number']);

        let classToApply = selectedAnswer === currentQuestion.answer ? 'correct' : 'incorrect';

        selectedChoice.classList.add(classToApply);

        if (classToApply === 'correct') {
            score++;
            scoreText.innerText = `${score}/${MAX_QUESTIONS}`;
        }

        setTimeout(() => {
            selectedChoice.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

startGame();








