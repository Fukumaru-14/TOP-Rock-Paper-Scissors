console.log("Hello World") 
/// Generate a number between 0 and 100
/// If number is lesser or equal than 33 print scissors
/// If number is greater or equal than 66 print paper
/// Else print rock
function getComputerChoice(choice) {
    choice = Math.floor(Math.random() * 100);
    if (choice > 33 && choice < 66) {
        return "rock";
    }
    else if (choice <= 33) {
    return "scissors";
    }
    else (choice >= 66); {
        return "paper";
    }
    
    }

choice = getComputerChoice();
console.log(choice)
/// Create a prompt box that only receives 'Paper, Rock or scissors'
function getHumanChoice() {
    humanChoice = prompt("rock, paper, scissors, GO (please only use lesser case and no space at the end) ", )
    if (humanChoice === "scissors")
        return "scissors";
    else if (humanChoice === "rock")
        return "rock";
    else if (humanChoice === "paper")
        return "paper";
    else (humanChoice)
        alert("Wrong value");
}
humanChoice = getHumanChoice();
console.log(humanChoice)