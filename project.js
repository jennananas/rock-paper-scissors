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



function playARound(playerSelection, computerSelection) {
    let result, winnerSelection, loserSelection = "" ;
    if (playerSelection==computerSelection){
        return ("it's a tie !");
    } else if (playerSelection=="paper"){
        if (computerSelection=="rock") {
            result = "win";
            winnerSelection=playerSelection;
            loserSelection = computerSelection;
        }
        else {
            result = "lose";
            loserSelection = playerSelection;
            winnerSelection=computerSelection;}

    } 
    else if (playerSelection=="rock"){
        if (computerSelection=="scissors"){
            result = "win";
            winnerSelection=playerSelection;
            loserSelection = computerSelection;
        }
        else 
        {
            result = "lose";
            loserSelection = playerSelection;
            winnerSelection=computerSelection;}
    }
    else if (playerSelection=="scissors"){
        if (computerSelection=="paper"){
            result = "win";
            loserSelection = computerSelection;
            winnerSelection=playerSelection;
        } else 
        {
            result ="lose";
            loserSelection = playerSelection;
            winnerSelection=computerSelection;
        }
    }
    return(`You ${result} ! ${winnerSelection} beats ${loserSelection}`);
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();