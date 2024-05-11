"use strict";
function computerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    switch (randomNumber) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
};

function playRound(playerSelection) {
    const computerSelection = computerChoice();
    
    if (playerSelection === computerSelection) {
        document.getElementById('result').innerHTML = `It's a tie! You both chose ${playerSelection}.`;
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === `scissors` && computerSelection === `paper`)
    ) {
        document.getElementById('result').innerHTML= `You win! ${playerSelection} beats ${computerSelection}.`;
        document.getElementById('player-score').innerHTML = parseInt(document.getElementById('player-score').innerHTML) + 1;
    } else {
        document.getElementById('result').innerHTML= `Your lose! ${computerSelection} beats ${playerSelection}.`;
        document.getElementById('computer-score').innerHTML = parseInt(document.getElementById('computer-score').innerHTML) + 1;
    }
}