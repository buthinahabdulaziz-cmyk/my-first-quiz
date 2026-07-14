const questions = [
    {
        question: "ما هي لغة البرمجة التي تستخدم لإضافة التفاعلية لصفحات الويب؟",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: false },
            { text: "JavaScript", correct: true }
        ]
    },
    {
        question: "أي من اللغات التالية تستخدم لتصميم وتنسيق شكل الصفحة وألوانها؟",
        answers: [
            { text: "CSS", correct: true },
            { text: "HTML", correct: false },
            { text: "C++", correct: false }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(questionObj) {
    resetState();
    questionElement.innerText = questionObj.question;
    
    questionObj.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.dataset.correct = answer.correct;
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    
    if (isCorrect) {
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('wrong');
    }

    // تلوين كل الأزرار عشان يظهر الصح والخطأ فوراً ونعطلها عن الضغط
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    // إظهار زر التالي
    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        nextButton.innerText = "إعادة الكويز 🔄";
        nextButton.classList.remove('hide');
    }
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        startQuiz();
    }
});

startQuiz();