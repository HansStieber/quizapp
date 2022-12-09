let questions = [
    {
        "questions": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "questions": "Was bedeutet das HTML Tag &lt;a&gt;?",
        "answer_1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right_answer": 3
    },
    {
        "questions": "Wie bindet man eine Website in eine Website ein?",
        "answer_1": "&lt;iframe&gt;, &lt;frame&gt; and &lt;frameset&gt;",
        "answer_2": "&lt;iframe&gt;",
        "answer_3": "&lt;frame&gt",
        "answer_4": "&lt;frameset&gt",
        "right_answer": 2
    },
    {
        "questions": "Welches Attribut kann man NICHT für textarea verwenden?",
        "answer_1": "readonly",
        "answer_2": "max",
        "answer_3": "from",
        "answer_4": "spellcheck",
        "right_answer": 1
    },
    {
        "questions": "Wie definiert man in JavaScript eine Variable?",
        "answer_1": "let 100 = rate",
        "answer_2": "100 = let rate",
        "answer_3": "rate = 100",
        "answer_4": "let rate = 100",
        "right_answer": 4
    }
];

let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('audio/right.mp3');
let AUDIO_FAIL = new Audio('audio/false.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function start() {
    document.getElementById('startscreen').style = 'display: none;';
    document.getElementById('endscreen').style = 'display: none;';
    document.getElementById('question-body').classList.remove('hide');
    document.getElementById('progress').style = '';
}

function showQuestion() {
    if (gameIsOver()) {
        showEndscreen();
    } else {
        hideEndscreen();
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndscreen() {
    document.getElementById('startscreen').style = 'display: none;';
    document.getElementById('endscreen').style = '';
    document.getElementById('question-body').style = 'display: none;';
    document.getElementById('progress').style = 'display: none;';

    document.getElementById('amount-questions').innerHTML = questions.length;
    document.getElementById('amount-right-questions').innerHTML = rightQuestions;
}

function hideEndscreen() {
    document.getElementById('endscreen').style = 'display: none';
    document.getElementById('question-body').style = '';
}

function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('question').innerHTML = question['questions'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected(selectedQuestionNumber, question)) {
        AUDIO_SUCCESS.play();
        rightQuestions++;
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        AUDIO_FAIL.play();
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;

    disableClickAnswer();
}

function rightAnswerSelected(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question['right_answer']
}

function disableClickAnswer() {
    document.getElementById('answer_1').setAttribute('onclick', '');
    document.getElementById('answer_2').setAttribute('onclick', '');
    document.getElementById('answer_3').setAttribute('onclick', '');
    document.getElementById('answer_4').setAttribute('onclick', '');
}


function nextQuestion() {
    currentQuestion++;

    enableClickAnswer();
    
    showQuestion();

    document.getElementById('next-button').disabled = true;

    resetAnswerButtons();
}

function enableClickAnswer() {
    document.getElementById('answer_1').setAttribute("onclick", "answer('answer_1');")
    document.getElementById('answer_2').setAttribute("onclick", "answer('answer_2');")
    document.getElementById('answer_3').setAttribute("onclick", "answer('answer_3');")
    document.getElementById('answer_4').setAttribute("onclick", "answer('answer_4');")
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restart() {
    currentQuestion = 0;
    rightQuestions = 0;
    init();
}