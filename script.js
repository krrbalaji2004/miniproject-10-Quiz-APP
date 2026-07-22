const quiz = [
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the capital of India?",
        options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
        answer: "Delhi"
    },
    {
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Home Tool Markup Language",
            "Hyperlinks Text Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "CSS is used for?",
        options: ["Styling", "Programming", "Database", "Networking"],
        answer: "Styling"
    },
    {
        question: "JavaScript is a?",
        options: [
            "Programming Language",
            "Database",
            "Browser",
            "Operating System"
        ],
        answer: "Programming Language"
    }
];

let current = 0;
let score = 0;

let questionBox = document.querySelector(".young");
let scoreBox = document.querySelector(".rest");
let nextBtn = document.querySelector("#next");

function showQuiz() {

    let q = quiz[current];

    questionBox.innerHTML = `
        <p>Question ${current + 1} of ${quiz.length}</p>
        <label>${q.question}</label><br>

        ${q.options.map(option => `
            <label class="option">
            <input type="radio" name="answer" value="${option}">
            ${option}
            </label>
        `).join("")}
    `;

    scoreBox.innerHTML = `Score ${score}/${quiz.length}`;
}

nextBtn.onclick = function(){

    let selected = document.querySelector(
        "input[name='answer']:checked"
    );

    if(selected && selected.value == quiz[current].answer){
        score++;
    }

    current++;

    if(current < quiz.length){
        showQuiz();
    }
else{
    questionBox.innerHTML = `
        <h2> Quiz Completed!</h2>
        <h3>Your Score: ${score}/${quiz.length}</h3>
    `;

    scoreBox.innerHTML = `Final Score ${score}/${quiz.length}`;

    document.querySelector(".used").style.display = "none";
}
};

showQuiz();