// مصفوفة الأسئلة الجديدة (سؤال برمجي ممتع وخفيف)
const questions = [
    {
        question: "ما هي لغة البرمجة التي تستخدم لإضافة التفاعلية والحركة لصفحات الويب؟",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: false },
            { text: "JavaScript (جافا سكريبت)", correct: true }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

function startQuiz() {
    showQuestion(questions[0]);
}

function showQuestion(questionObj) {
    questionElement.innerText = questionObj.question;
    answerButtonsElement.innerHTML = ''; // نمسح أي أزرار قديمة
    
    questionObj.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        alert("يا سلااام! إجابة صحيحة ومبدعة كالعادة 🎉");
    } else {
        alert("أوف، حاول مرة ثانية! ❌");
    }
}

// تشغيل الكويز أول ما تفتح الصفحة
startQuiz();