let guessCount = 0;
let humanScore = 0;
let computerScore = 0;

const selection = document.querySelector('#selection');

function endGame() {
    if (humanScore === 5 || computerScore === 5) {
        alert("Game has ended!");
    selection.style.display = 'none';   
};

};
                        /// Create players score
 const div = document.createElement("div");
            document.body.appendChild(div);
            let jugador = document.createElement("p");
            jugador.id = "jugador";
            
            div.appendChild(jugador);
            let maquina = document.createElement("p");
            maquina.id = "maquina";
            
            div.appendChild(maquina);
console.log("Hello World") 

function getComputerChoice(choice) {
    choice = Math.floor(Math.random() * 100);
    if (choice > 33 && choice < 66) {
        return "rock";
    }
    else if (choice <= 33) {
        return "scissors";
    }
    else  {
        return "paper";
    }
    
}
function playRound(humanChoice, choice) {
    
    if (humanChoice === choice) {
        console.log("It's a Tie!"); }
        else if (humanChoice === "scissors" && choice === "rock" || humanChoice === "rock" && choice === "paper" || humanChoice === "paper" && choice === "scissors") {
            computerScore++; 
            maquina.textContent = "Machine score is = " + computerScore; }
            else if (humanChoice === "paper" && choice === "rock" || humanChoice === "rock" && choice === "scissors" || humanChoice === "scissors" && choice === "paper") {
                console.log("You Win, " + humanChoice + " Beats " + choice)
                humanScore++;  
            jugador.textContent = "Human score is = " + humanScore;}
                console.log(humanChoice);
                console.log(choice);
                } 
                jugador.textContent = "Human score is = " + humanScore;
                maquina.textContent = "Machine score is = " + computerScore;
            
            /// Create a prompt box that only receives 'Paper, Rock or scissors'
            function playGame() {
                let replayButton;
                replayButton = document.createElement('button');
                replayButton.textContent = 'Start new game';
                document.body.appendChild(replayButton);
                replayButton.addEventListener('click', playAgain);
                function playAgain() {    
                    guessCount = 0;
                    humanScore = 0;
                    computerScore = 0;
                    console.clear();
                    replayButton.remove();
                    playGame();
                    jugador.textContent = "Human score is = " + humanScore;
                    maquina.textContent = "Machine score is = " + computerScore;
                    selection.style.display = ''; 
                }
                
            };

           


            playGame();
            let humanChoice = "";
            selection.addEventListener('click', (event) => {
                let choice = getComputerChoice();
                const opcion = event.target.id;
                switch(opcion) {
                    case 'rock':
                        humanChoice = "rock";
                        break;
                        case 'paper':
                            humanChoice = "paper";
                            break;
                            case 'scissors':
                                humanChoice = "scissors";                                               
                                break;
                            }
                            playRound(humanChoice, choice);
                            endGame(humanScore, computerScore);
                        });
            