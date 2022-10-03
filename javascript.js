

function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.33) return "rock";
    else if (randomNumber > 0.33 && randomNumber < 0.67) return "scissors";
    else return "paper"
}
 
console.log(getComputerChoice())

const computerSelection = getComputerChoice()

let playerScore = 0
let computerScore = 0



function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
    console.log ("You Tie! You both pick Rock")  

    } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log ("You Lose! Paper beats Rock")
    computerScore++

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log ("You Win! Rock beats Scissors")
    playerScore++

    } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log ("You Win! Paper beats Rock")
    playerScore++

    } else if (playerSelection=== "paper" && computerSelection === "paper") {
    console.log ("You Tie! You both pick Paper")

    } else if (playerSelection=== "paper" && computerSelection === "scissors") {
    console.log ("You Lose! Scissors beats Paper")
    computerScore++


    } else if (playerSelection=== "scissors" && computerSelection === "rock") {
    console.log ("You Lose! Rock beats Scissors")
    computerScore++

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log ("You Win! Scissors beats Paper")
    playerScore++

    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    console.log ("You Tie! You both pick Scissors")
    }
}


function game () {
    for (let i = 0; i < 5; i++) {
        let playerSelection = (prompt("Enter your choice").toLowerCase());
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log("Your score is " + playerScore + " and " + "the Computer score is " + computerScore);
    }
    if (playerScore > computerScore) {
        console.log("Congratulations! You beat the Computer")
    }
    else if (playerScore < computerScore) {
        console.log ("Unfortunately, the Computer beat you")
    }
    else if (playerScore = computerScore) {
        console.log ("It's a tie!")
    }
}

game ()
