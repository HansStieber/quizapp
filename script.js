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

//Initialisiere nach laden des Bodys
function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question').innerHTML = question['questions'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(answer) {
    
}