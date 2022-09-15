const choices = ["rock", "paper", "scissors"] ;
const buttons = document.querySelectorAll("input");
let resultText = document.querySelector("#result");
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
    let result, winnerSelection, loserSelection;
    result, winnerSelection = loserSelection = "";
    if (playerSelection==computerSelection){
        return ("it's a tie !");
    } else if (playerSelection=="paper"){
        if (computerSelection=="rock") {
            result = "win";
            playerScore+= 1;
            winnerSelection=playerSelection;
            loserSelection = computerSelection;
        }
        else {
            result = "lose";
            computerScore+= 1;
            loserSelection = playerSelection;
            winnerSelection=computerSelection;}

    } 
    else if (playerSelection=="rock"){
        if (computerSelection=="scissors"){
            result = "win";
            playerScore +=1;
            winnerSelection=playerSelection;
            loserSelection = computerSelection;
        }
        else 
        {
            result = "lose";
            computerScore+= 1;
            loserSelection = playerSelection;
            winnerSelection=computerSelection;}
    }
    else if (playerSelection=="scissors"){
        if (computerSelection=="paper"){
            result = "win";
            playerScore +=1;
            loserSelection = computerSelection;
            winnerSelection=playerSelection;
        } else 
        {
            result ="lose";
            computerScore+= 1;
            loserSelection = playerSelection;
            winnerSelection=computerSelection;
        }
    }

    roundNb++;

    if (playerScore === 5) {
        winner = "YOU"; 
    } else {
        winner = "COMPUTER"; 
    }

    resultText.innerHTML = `Round ${roundNb}<br>
    choix joueur : ${playerSelection}<br>
    choix ordi : ${computerSelection}<br>
    score joueur : ${playerScore}<br>
    score ordi : ${computerScore}`

    if (playerScore === 5 || computerScore === 5) {
        stopGame();
        resultText.innerHTML = `${winner} win ! Final score : ${playerScore}-${computerScore}`
    }
   
    return resultText;

}

/* Déclenche le round à chaque clic */
buttons.forEach((button) => button.addEventListener("click", () => {
    playRound(button.value);
}))
