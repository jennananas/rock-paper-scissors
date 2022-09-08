const choices = ["rock", "paper", "scissors"] ;
function getComputerChoice(){
    randomChoice = Math.floor(Math.random() * choices.length);
    return (choices[randomChoice]);
}

function getPlayerChoice(){
    let playerChoice = "";
    while (!(choices.includes(playerChoice))){
        playerChoice = prompt("Rock, Paper or Scissors ?").toLowerCase();
    }
    return(playerChoice);
}