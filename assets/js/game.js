function computerPlay (){
    let choices = ["rock", "paper", "scissor"]
    // Math.floor removes decimals and Math.random() return a floating point number between 0 and 1
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection){
    const winingMsg = "You Win!"
    const losingMsg = "You Lose!"
    //Rock beats sci
    if (playerSelection == "rock" && computerSelection == "scissor"){
        return winingMsg.concat(" rock beats scissor.")
    } 
    //sci beat paper
    else if (playerSelection == "scissor" && computerSelection == "paper"){
        return winingMsg.concat(" scissor beats paper.")
    }
    // paper beat rock 
    else if (playerSelection == "paper" && computerSelection == "rock"){
        return winingMsg.concat(" paper beats rock.")
    }
    // Computer Wins scenario
    else if (playerSelection == "scissor" && computerSelection == "rock"){
        return losingMsg.concat(" rock beats scissor.")
    }
    else if (playerSelection == "paper" && computerSelection == "scissor"){
        return losingMsg.concat(" scissor beats paper.")
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        return losingMsg.concat(" paper beats rock.")
    } else {
        return "Draw"
    }
}

function game(round, playerChoice, computerChoice){
    let playerWin = 0
    let computerWin = 0

    for (let i = 0; i < round; i++) {
        let outcome = playRound(playerChoice, computerChoice)
        
        console.log(outcome)

        if (outcome.includes("Win")){
            playerWin++
        } else if (outcome.includes("Lose")) {
            computerWin++
        }

        
    }

    // Player wins
    if (playerWin > computerWin) {
        return "You won the game."
    }
    // Computer wins 
    else if (computerWin > playerWin) {
        return "You lose the game."        
    }
    // Draw
    else {
        return "Tie game."
    }
}

playerSelection = prompt("Please enter rock, paper, or scissor: ")
computerSelection = computerPlay()

console.log(game(5, playerSelection.toLowerCase(), computerSelection))