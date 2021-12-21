//caching DOM: storing elements in variables so one can access in the future

let user = 0;
let comp = 0;
const userScore = document.getElementById("user-score");
const compScore = document.getElementById("comp-score");
const score = document.querySelector(".score-board");
const result = document.querySelector(".result");
const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissor = document.getElementById("Scissor");

//secondary functions
function win(userChoice, compChoice){
    user++;
    userScore.innerHTML = user;
    result.innerHTML = userChoice + " beats " + compChoice+", You Win!🔥🔥";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 1000);
}

function lose(userChoice, compChoice){
    comp++;
    compScore.innerHTML = comp;
    result.innerHTML = userChoice + " beats " + compChoice+", You Lose!💩💩";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 1000);
}

function draw(userChoice, compChoice){
    result.innerHTML = userChoice + " and " + compChoice+", Draw!";
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('grey-glow')}, 1000);
}



function getComp(){
    const choices = ["Rock", "Paper", "Scissor"];
    return choices[Math.floor(Math.random()*3)];
}
function game(userChoice){
    const compChoice = getComp();
    console.log(userChoice+compChoice);
    switch (userChoice+compChoice){
        case "RockPaper":
        case "PaperScissor":
        case "ScissorRock":
            lose(userChoice, compChoice);
            break;
        case "PaperRock":
        case "RockScissor":
        case "ScissorPaper":
            win(userChoice, compChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorScissor":
            draw(userChoice, compChoice);
            break;
    }
    
}

function main(){
    //adding event listeners
    Rock.addEventListener('click', function(){
        game("Rock");
    })

    Paper.addEventListener('click', function(){
        game("Paper");
    })

    Scissor.addEventListener('click', function(){
        game("Scissor");
    })
}

main();
