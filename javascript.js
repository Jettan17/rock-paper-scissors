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
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    } else if (winner == "computer") {
        console.log(`You lose! ${humanChoice} loses to ${computerChoice}`)
    } else {
        console.log(`You tied! ${humanChoice} ties with ${computerChoice}`)
    }

    return winner
}

function playGame() {
    let humanScore = 0
    let computerScore = 0
    
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}`) //Round no.

        winner = playRound(getHumanChoice(), getComputerChoice()) //grab winner

        if (winner == "human") {
            humanScore++
        } else if (winner == "computer") {
            computerScore++
        }
    }

    console.log(`Final Scores: Human: ${humanScore} Computer: ${computerScore}`)
    console.log(`${humanScore > computerScore ? "Human" : "Computer"} wins!`)
}

playGame()