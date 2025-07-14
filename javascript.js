function getComputerChoice() {
    let prob = Math.random()
    let choice = "scissors"
    
    if (prob <= 0.33) {
        choice = "rock"
    } else if (prob <= 0.67) {
        choice = "paper"
    }

    return choice
}

function getHumanChoice() {
    choice = prompt("Rock Paper or Scissors")
    return choice
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()

    winner = ""

    const container = document.querySelector(".results");
    
    if (humanScore == 5 || computerScore == 5) {
        //Reset game
        humanScore = 0;
        computerScore = 0;

        container.innerHTML = '';
    }

    switch (humanChoice) {
        case ("rock"):
            switch (computerChoice) {
                case ("rock"):
                    winner = ""
                    break
                case ("scissors"):
                    winner = "human"
                    break
                case ("paper"):
                    winner = "computer"
                    break
            }
            break
        case ("scissors"):
            switch (computerChoice) {
                case ("rock"):
                    winner = "computer"
                    break
                case ("scissors"):
                    winner = ""
                    break
                case ("paper"):
                    winner = "human"
                    break
            }
            break
        case ("paper"):
            switch (computerChoice) {
                case ("rock"):
                    winner = "human"
                    break
                case ("scissors"):
                    winner = "computer"
                    break
                case ("paper"):
                    winner = ""
                    break
            }
            break
    }

    if (winner == "human") {
        const result = document.createElement("p");
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        container.appendChild(result);
    } else if (winner == "computer") {
        const result = document.createElement("p");
        result.textContent = `You lose! ${humanChoice} loses to ${computerChoice}`;
        container.appendChild(result);
    } else {
        const result = document.createElement("p");
        result.textContent = `You tied! ${humanChoice} ties with ${computerChoice}`;
        container.appendChild(result);
    }

    //Display running score + winner
    const score = document.createElement("p");
    

    switch (winner) {
        case "human":
            humanScore++;
            break;
        case "computer":
            computerScore++;
            break;
    }

    if (humanScore == 5 || computerScore == 5) {
        score.textContent = `Final Scores: Human: ${humanScore} Computer: ${computerScore}`;
        container.appendChild(score);

        //Winner
        const winner = document.createElement("p");
        winner.textContent = `Winner: ${humanScore > computerScore ? "Human" : "Computer"} wins!`;
        container.appendChild(winner);
    } else {
        score.textContent = `Scores: Human: ${humanScore} Computer: ${computerScore}`;
        container.appendChild(score);
    }
    
    

    return
}

// function playGame() {
//     let humanScore = 0
//     let computerScore = 0
    
//     for (let i = 0; i < 5; i++) {
//         console.log(`Round ${i+1}`) //Round no.

//         winner = playRound(getHumanChoice(), getComputerChoice()) //grab winner

//         if (winner == "human") {
//             humanScore++
//         } else if (winner == "computer") {
//             computerScore++
//         }
//     }

//     console.log(`Final Scores: Human: ${humanScore} Computer: ${computerScore}`)
//     console.log(`${humanScore > computerScore ? "Human" : "Computer"} wins!`)
// }

// playGame()

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => 
    button.addEventListener("click", () => playRound(button.textContent, getComputerChoice())));

