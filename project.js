const choices = ["rock", "paper", "scissors"] ;
const buttons = document.querySelectorAll("input");
let resultText = document.querySelector(".result");
let roundNb = playerScore = computerScore = 0;


/* Retourne au hasard le choix de l'ordi parmi [rock, paper, scissors] */
function getComputerChoice(){
    randomChoice = Math.floor(Math.random() * choices.length);
    return (choices[randomChoice]);
}

/* Désactive les boutons */
function stopGame(){
    buttons.forEach(button  => {
        button.disabled = true});
    }
    

/* Joue un round selon le choix du joueur, retourne les scores et le vainqueur à l'issue des 5 rounds */
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result, winner, winnerSelection, loserSelection;
    result, winnerSelection = loserSelection = "";
    if (playerSelection==computerSelection){
        return ("It's a tie !");
    } else if (playerSelection=="paper"){
        if (computerSelection=="rock") {
            winner = "YOU";
            playerScore+= 1;
            winnerSelection=playerSelection;
            loserSelection = computerSelection;
        }
        else {
            winner = "COMPUTER";
            computerScore+= 1;
            loserSelection = playerSelection;
            winnerSelection=computerSelection;}

    } 
    else if (playerSelection=="rock"){
        if (computerSelection=="scissors"){
            winner = "YOU";
            playerScore +=1;
            winnerSelection=playerSelection;
            loserSelection = computerSelection;
        }
        else 
        {
            winner = "COMPUTER";
            computerScore+= 1;
            loserSelection = playerSelection;
            winnerSelection=computerSelection;}
    }
    else if (playerSelection=="scissors"){
        if (computerSelection=="paper"){
            winner = "YOU";
            playerScore +=1;
            loserSelection = computerSelection;
            winnerSelection=playerSelection;
        } else 
        {
            winner = "COMPUTER";
            computerScore+= 1;
            loserSelection = playerSelection;
            winnerSelection=computerSelection;
        }
    }

    roundNb++;

    resultText.innerHTML = `<div class="round">Round ${roundNb}</div>
    <div class="game">You played ${playerSelection} VS ${computerSelection}. ${winner} wins this round !</div>
    <div class="score"><div>YOU : ${playerScore}</div><div>COMPUTER : ${computerScore}</div></div>`

    if (playerScore === 5 || computerScore === 5) {
        stopGame();
        resultText.innerHTML = `<div class="score">${winner} won ! Final score : ${playerScore}-${computerScore}</div>`
    }
   
    return resultText;

}

/* Déclenche le round à chaque clic */
buttons.forEach((button) => button.addEventListener("click", () => {
    playRound(button.id);
}))
