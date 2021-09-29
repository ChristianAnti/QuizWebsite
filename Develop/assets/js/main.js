const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answer-buttons')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

var timerP = document.querySelector("#timer")

console.log("I'm connected WOW");

function setTime() {
    secondsLeft = 100;
}

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click',() => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    console.log('START TEST')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
}



function setNextQuestion(){
    resetState()
 showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton =e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//questions 1. What does CSS stand for? A:Colorful StyleSheet B:Creative Style Sheet C:Cascading Style Sheets D:Computer Style Sheets (Answer) C: C:Cascading Style Sheets
//questions 2. What does HTML stand for? A:Hyperlinks and text markup language B:Hyper text markup language C:Hyper text making language D:Hyper text mark language (Answer)B: Hypertext Markup Language
//questions 3. Which HTML tag is used to define an internal styles sheet? A:script B:style C:html D:svg (Answer)B: style
//questions 4. Which of these is a comment in Javascript? A:<!--Comment--> B://Comment// C:/*Comment*/ D://Comment (Answer)D: //Comment
const questions = [
    {
        question: 'What does CSS stand for?',
        answers: [
            {text:'A:Colorful StyleSheet', correct: false},
            {text:'B:Creative Style Sheet', correct: false},
            {text:'C:Cascading Style Sheets', correct: true},
            {text:'D:Computer Style Sheets', correct: false}
        ]
    },
    {
        question: 'What does HTML stand for?',
        answers: [
            {text:'A:Hyperlinks and text markup languaget', correct: false},
            {text:'B:Hyper text markup language', correct: true},
            {text:'C:Hyper text making language', correct: false},
            {text:'D:Hyper text mark language', correct: false}
        ]
    },
    {
        question: 'Which HTML tag is used to define an internal styles sheet?',
        answers: [
            {text:'A:script', correct: false},
            {text:'B:style', correct: true},
            {text:'C:html', correct: false},
            {text:'D:svg', correct: false}
        ]
    },
    {
        question: 'Which of these is a comment in Javascript?',
        answers: [
            {text:'A:<!--Comment-->', correct: false},
            {text:'B://Comment//', correct: false},
            {text:'C:/*Comment*/', correct: false},
            {text:'D://Comment', correct: true}
        ]
    },
]







// GIVEN I am taking a code quiz

// WHEN I click the start button
// THEN a timer starts and I am presented with a question



// WHEN I answer a question
// THEN I am presented with another question



// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock



// WHEN all questions are answered or the timer reaches 0
// THEN the game is over



// WHEN the game is over
// THEN I can save my initials and set my score on the board

