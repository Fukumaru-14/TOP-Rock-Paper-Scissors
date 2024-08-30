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