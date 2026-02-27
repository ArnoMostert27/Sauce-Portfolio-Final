var story = document.getElementById("story");
var question = document.getElementById("question");
var yourAnswer = document.getElementById("yourAnswer");
var submit = document.getElementById("submit");

var answers = [];

submit.addEventListener("click", getAnswer);

yourAnswer.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        getAnswer();
    }
});

askQuestion(0);

function askQuestion(number) {
    switch (number) {
        case 0:
            question.innerHTML = "Are you ready to race? (YES / NO)";
            break;
        case 1:
            question.innerHTML = "Choose route: FUNKY FOREST or HIGHWAY?";
            break;
    }
}

function getAnswer() {
    var cleanInput = yourAnswer.value.trim().toUpperCase();
    if (cleanInput === "") return;

    answers.push(cleanInput);
    yourAnswer.value = "";

    continueStory(answers.length - 1);
}

function continueStory(step) {

    // Remove start screen if it exists
    var startScreen = document.getElementById("startScreen");
    if (startScreen) {
        startScreen.remove();
    }

    switch (step) {

        case 0:
            if (answers[0] === "YES") {
                appendStory("answer11");
                askQuestion(1);
            } 
            else if (answers[0] === "NO") {
                appendStory("answer12");
                askQuestion(0);
            } 
            else {
                appendStory("err0");
                askQuestion(0);
            }
            break;

        case 1:
            if (answers[1] === "FUNKY FOREST") {
                appendStory("answer21");
                randomBonus();
                endStory();
            } 
            else if (answers[1] === "HIGHWAY") {
                appendStory("answer22");
                appendStory("bonusVincent");
                endStory();
            } 
            else {
                appendStory("err1");
                askQuestion(1);
            }
            break;
    }

    story.scrollTop = story.scrollHeight;
}

function appendStory(id) {
    story.innerHTML += document.getElementById(id).innerHTML;
}

function randomBonus() {
    var rand = Math.random();
    if (rand < 0.5) {
        appendStory("bonusAwonke");
    } else {
        appendStory("bonusKeisha");
    }
}

function endStory() {
    question.innerHTML = "";
}