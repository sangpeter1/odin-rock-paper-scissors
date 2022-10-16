const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        const player = document.createElement('div');
        player.textContent = "You picked " + playerSelection;
        container.appendChild(player);

        let computerSelection = getComputerChoice();
        const computer = document.createElement('div');
        computer.textContent = "Computer picked " + computerSelection;
        container.appendChild(computer);

        playRound(playerSelection, computerSelection);
        const score = document.createElement('div');
        score.textContent = "Your score: " + playerScore + " Computer Score: " + computerScore;
        container.appendChild(score);        
        if (playerScore === 5) {
            computerScore = 0;
            playerScore = 0;
            const winner = document.createElement ('div')
            winner.textContent = "Congrats! You beat the Computer!";
            container.appendChild(winner);
        } else if (computerScore === 5) {
            computerScore = 0;
            playerScore = 0;
            const winner = document.createElement ('div')
            winner.textContent = "Game over! The Computer beat you!";
            container.appendChild(winner);
        }   
        
    });
});
    


function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.33) return "rock";
    else if (randomNumber > 0.33 && randomNumber < 0.67) return "scissors";
    else return "paper"
}
 

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {


    if (playerSelection === "rock" && computerSelection === "rock") {
    const record = document.createElement('div');
    record.textContent = 'You Tie! You both pick Rock';
    container.appendChild(record);  

    } else if (playerSelection === "rock" && computerSelection === "paper") {
    const record = document.createElement("div");
    record.textContent = "You Lose! Paper beats Rock";
    container.appendChild(record);  
    computerScore++

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
    const record = document.createElement("div");
    record.textContent ="You Win! Rock beats Scissors";
    container.appendChild(record);  
    playerScore++

    } else if (playerSelection === "paper" && computerSelection === "rock") {
    const record = document.createElement("div");
    record.textContent ="You Win! Paper beats Rock";
    container.appendChild(record);  
    playerScore++

    } else if (playerSelection=== "paper" && computerSelection === "paper") {
    const record = document.createElement("div");
    record.textContent ="You Tie! You both pick Paper";
    container.appendChild(record);  

    } else if (playerSelection=== "paper" && computerSelection === "scissors") {
    const record = document.createElement("div");
    record.textContent ="You Lose! Scissors beats Paper";
    container.appendChild(record);  
    computerScore++


    } else if (playerSelection=== "scissors" && computerSelection === "rock") {
    const record = document.createElement("div");
    record.textContent ="You Lose! Rock beats Scissors";
    container.appendChild(record);  
    computerScore++

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
    const record = document.createElement("div");
    record.textContent ="You Win! Scissors beats Paper";
    container.appendChild(record);  
    playerScore++

    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    const record = document.createElement("div");
    record.textContent ="You Tie! You both pick Scissors";
    container.appendChild(record);  
    }
}



/*function game () {
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

game ()*/

