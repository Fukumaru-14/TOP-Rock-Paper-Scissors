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
/// Create players scores
let humanScore = 0;
let computerScore = 0;

/// Create round logic
/// If human and Computer same answer, TIE
/// If human Paper and Computer Scissors, Scissors beats Paper
/// If human Paper and Computer Rock, Paper beats Rock
/// If human Rock and Computer Scissors, Rock beats Scissors
/// If human Rock and Computer Paper, Paper beats Rock
/// If human Paper and Computer Scissors, Scissors beats Paper
/// If human Paper and Computer Rock, Paper beats Rock
function playRound(humanChoice, choice) {
    if (humanChoice === choice)
        console.log("It's a Tie!");
    else if (humanChoice === "Scissors" && choice === "Rock")
        console.log("You Lose!, Rock Beats Scissors");
    else if (humanChoice === "Rock" && choice === "Paper")
        console.log("You Lose!, Paper Beats Rock");
    else if (humanChoice === "Paper" && choice === "Scissors")
        console.log("You Lose!, Scissors Beats Paper");

    else if (humanChoice === "Paper" && choice === "Rock")
        console.log("You Win, " + humanSelection + " Beats " + computerSelection);    
    else if (humanChoice === "Rock" && choice === "Scissors")
        console.log("You Win, " + humanSelection + " Beats " + computerSelection);    
    else if (humanChoice === "Scissors" && choice === "Paper")
        console.log("You Win, " + humanSelection + " Beats " + computerSelection);    
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(computerSelection)
playRound(humanSelection, computerSelection);