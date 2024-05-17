const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const start = document.getElementById('start');

window.addEventListener("DOMContentLoaded", pressButton);


function pressButton() {
    rock.addEventListener("click", (event) => pressedButton(event, "rock"));
    paper.addEventListener("click", (event) => pressedButton(event, "paper"));
    scissors.addEventListener("click", (event) => pressedButton(event, "scissors"));
}

function pressedButton(event, buttonType) {

    let answer = buttonType;
    console.log(answer);



    const opciones = ["rock", "paper", "scissors"];
    const bot = opciones[Math.floor(Math.random() * opciones.length)];
    console.log("bot election:", bot);
   
    winner(answer, bot);
}

function winner(answer, bot) {
    if (answer === bot) {
        console.log('Draw');
    } else if ((answer === "paper" && bot === "rock") || 
               (answer === "scissors" && bot === "paper") || 
               (answer === "rock" && bot === "scissors")) {
        console.log('You won');
    } else {
       console.log('You lost');
    }
}