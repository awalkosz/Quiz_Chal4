var secondsLeft = 45;
var num = 0;
var score = 0;
var buttonClick = document.getElementById("Start");
var startingInter = 0;
var wrong = 10;
var correct = 0;
var quizStart = false;
var startQuiz = document.querySelector("#Quiz");
var showTimer = document.querySelector("#Timer");
var showQuestions = document.querySelector("#Questions");
var question = document.querySelector("#questions");
var questionnum = document.querySelector("#questionnum");
var text = document.querySelector("#text");
var answ = document.querySelector("#answers");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");


var questions = [
    {
        question: "Which of the answers does not belong with front end development:",
        answers: ["HTML", "node.js", "script.js", "style"],
        answer: ["node.js"]
    },
    {
        question: "Which answer below is not a data type",
        answers: ["string", "numbers", "documents", "boolean"],
        answer: ["documents"]
    },
    {
        question: "Which command in gitBash creates a new directory",
        answers: ["git push", "mkdir", "rm -rm", "touch"],
        answer: ["mkdir"]
    },
];



buttonClick.addEventListener("click", function() {
    console.log("click");
        if (quizStart === false) {
            quizStart = true;
            startQuiz.setAttribute("class", "hide");
            showTimer.setAttribute("class", "shown");
            showQuestions.setAttribute("class", "shown");
            answ.setAttribute("class", "shown");
        }
        var loadquests = function() {
            questionnum.innerText = num + 1 + ".";
            text.innerText = questions[num].question;
            answer1.innerText = questions[num].answers[0];
            answer2.innerText = questions[num].answers[1];
            answer3.innerText = questions[num].answers[2];
            answer4.innerText = questions[num].answers[3];
            }
            interval = setInterval(countDown, 1000);
            return loadquests();
});

var countDown = function() {
    if(secondsLeft <= 0)
    {
    clearInterval(interval);
    } else {
        secondsLeft--;
        console.log(secondsLeft);
        showTimer.textContent = secondsLeft;
    }
 }

 function Clickanswer(event) {
    var select = event.target;
    console.log(select.textContent);
    if (select.textContent == questions[num].answer) {
       
    } else {
        secondsLeft -= wrong;
    }
    nextQuestions();
 }

function nextQuestions () {
    if (num !== questions.length - 1) {
        num ++;
        var loadquests = function() {
            questionnum.innerText = num + 1 + ".";
            text.innerText = questions[num].question;
            answer1.innerText = questions[num].answers[0];
            answer2.innerText = questions[num].answers[1];
            answer3.innerText = questions[num].answers[2];
            answer4.innerText = questions[num].answers[3];
            }
            return loadquests();
        }

}

answer1.addEventListener("click", Clickanswer);
answer2.addEventListener("click", Clickanswer);
answer3.addEventListener("click", Clickanswer);
answer4.addEventListener("click", Clickanswer);