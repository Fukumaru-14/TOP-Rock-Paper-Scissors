console.log("Hello World") 
/// Generate a number between 0 and 100
/// If number is lesser or equal than 33 print scissors
/// If number is greater or equal than 66 print paper
/// Else print rock
function getComputerChoice(choice) {
    choice = Math.floor(Math.random() * 100);
    if (choice > 33 && choice < 66) {
        return "Rock";
    }
    else if (choice <= 33) {
    return "Scissors";
    }
    else (choice >= 66); {
        return "Paper";
    }
    
    }

/// Create a prompt box that only receives 'Paper, Rock or scissors'
function getHumanChoice() {
    humanChoice = prompt("Rock, Paper or Scissors? ", ).toLowerCase();
    if (humanChoice === "scissors")
        return "Scissors";
    else if (humanChoice === "rock")
        return "Rock";
    else if (humanChoice === "paper")
        return "Paper";
    else (humanChoice)
        alert("Wrong value");
}
/// Create players score
let replayButton;
let guessCount = 0;
let humanScore = 0;
let computerScore = 0;
function playGame() {
/// Create a value for each round, then each time game is played, add 1 to value each round

    rounds = 5;
for (i = 1; i <= rounds; i++) {
//    console.log(i);
//}




/// Create round logic
/// If human and Computer same answer, TIE
/// If human Paper and Computer Scissors, Scissors beats Paper
/// If human Paper and Computer Rock, Paper beats Rock
/// If human Rock and Computer Scissors, Rock beats Scissors
/// If human Rock and Computer Paper, Paper beats Rock
/// If human Paper and Computer Scissors, Scissors beats Paper
/// If human Paper and Computer Rock, Paper beats Rock
function playRound(humanChoice, choice) {
    
    if (humanChoice === choice) {
        console.log("It's a Tie!"); }
    else if (humanChoice === "Scissors" && choice === "Rock" || humanChoice === "Rock" && choice === "Paper" || humanChoice === "Paper" && choice === "Scissors") {
        console.log("You Lose, " + computerSelection + " Beats " + humanSelection)
        computerScore++; }
    else if (humanChoice === "Paper" && choice === "Rock" || humanChoice === "Rock" && choice === "Scissors" || humanChoice === "Scissors" && choice === "Paper") {
        console.log("You Win, " + humanSelection + " Beats " + computerSelection)
        humanScore++;  }  
} guessCount++;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log("-----------");
console.log("Computer choose " + computerSelection)

playRound(humanSelection, computerSelection);

console.log("Ronda #" + guessCount);
console.log(humanScore + " Your score");
console.log(computerScore + " Computer score");

} }
playGame(); 
replayButton = document.createElement('button');
replayButton.textContent = 'Start new game';
document.body.appendChild(replayButton);
replayButton.addEventListener('click', playAgain);
function playAgain() {    
    guessCount = 0;
    humanScore = 0;
    computerScore = 0;
    console.clear();
    playGame();
}
