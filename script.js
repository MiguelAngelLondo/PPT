const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const start = document.getElementById('start');
const playerChoiceSpan = document.getElementById('player-choice');
const botChoiceSpan = document.getElementById('bot-choice');
const resultElement = document.getElementById('result');
const botWinsElement = document.getElementById('bot-wins');
const playerWinsElement = document.getElementById('player-wins');
let botWins = 0;
let playerWins = 0;

window.addEventListener("DOMContentLoaded", pressButton);

function pressButton() {
    rock.addEventListener("click", (event) => pressedButton(event, "rock"));
    paper.addEventListener("click", (event) => pressedButton(event, "paper"));
    scissors.addEventListener("click", (event) => pressedButton(event, "scissors"));
}

function pressedButton(event, buttonType) {
    let answer = buttonType;
    playerChoiceSpan.textContent = answer;

    const opciones = ["rock", "paper", "scissors"];
    const bot = opciones[Math.floor(Math.random() * opciones.length)];
    botChoiceSpan.textContent = bot;

    determineWinner(answer, bot);
}

function determineWinner(answer, bot) {
    if (answer === bot) {
        resultElement.textContent = 'Draw';
    } else if ((answer === "paper" && bot === "rock") || 
               (answer === "scissors" && bot === "paper") || 
               (answer === "rock" && bot === "scissors")) {
        resultElement.textContent = 'You won';
        playerWins++;
    } else {
        resultElement.textContent = 'You lost';
        botWins++;
    }
    if(botWins==3){
        alert('Bot wins')
        document.location.reload()
    }else if (playerWins==3){
    alert ('player wins')
    document.location.reload()
    }
    updateWins();
}


function updateWins() {
    
    botWinsElement.textContent = "Bot Wins: " + botWins;
    playerWinsElement.textContent = "Player Wins: " + playerWins;
}

