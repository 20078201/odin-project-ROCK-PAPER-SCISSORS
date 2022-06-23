// return a string that can be rock, paper, scissor
function computerPlay (){
    let choices = ["rock", "paper", "scissor"]
    // Math.floor removes decimals and Math.random() return a floating point number between 0 and 1
    return choices[Math.floor(Math.random() * choices.length)]
}

// logic for wining and losing the game
function playRound(playerSelection, computerSelection){
    const winingMsg = "You Win!"
    const losingMsg = "You Lose!"
    //Rock beats sci
    if (playerSelection == "rock" && computerSelection == "scissor"){
        return winingMsg
    } 
    //sci beat paper
    else if (playerSelection == "scissor" && computerSelection == "paper"){
        return winingMsg
    }
    // paper beat rock 
    else if (playerSelection == "paper" && computerSelection == "rock"){
        return winingMsg
    }
    // Computer Wins scenario
    else if (playerSelection == "scissor" && computerSelection == "rock"){
        return losingMsg
    }
    else if (playerSelection == "paper" && computerSelection == "scissor"){
        return losingMsg
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        return losingMsg
    } else {
        return "Draw"
    }
}

function decider(player, computer) {
    if (player > computer) {
        return "You win the game"
    } else if (computer > player) {
        return "You lose the game"
    } else if (player === computer) {
        return "The game ended in a draw"
    }
}

// DOM - Creating container, div, p elements
const container = document.querySelector('.container')

const resultArea = document.createElement('div')
const winingComment = document.createElement('p')
const scoreSection = document.createElement('p')

winingComment.classList.add('score')
resultArea.classList.add('btn')

resultArea.appendChild(winingComment)
resultArea.appendChild(scoreSection)

// btn
const rockBtn = document.createElement('button')
rockBtn.classList.add('btn')
rockBtn.textContent = "Rock"

const paperBtn = document.createElement('button')
paperBtn.classList.add('btn')
paperBtn.textContent = "paper"

const scissorBtn = document.createElement('button')
scissorBtn.classList.add('btn')
scissorBtn.textContent = "scissor"

let playerPoints = 0
let computerPoints = 0
let currentRound = 1

// https://www.linkedin.com/learning/javascript-essential-training/pass-arguments-through-event-listeners?autoplay=true
rockBtn.addEventListener("click", () => {
    let outcome = playRound("rock", computerPlay())
    // when round reaches 5
    if (currentRound === 5) {
        winingComment.textContent = decider(playerPoints, computerPoints)
        rockBtn.disabled = true
        paperBtn.disabled = true
        scissorBtn.disabled = true
        return
    }
    // point allocation
    if (outcome.includes("Win")) {
        playerPoints += 1
        currentRound += 1
    } else if (outcome.includes("Lose")) {
        computerPoints += 1
        currentRound += 1
    }

    winingComment.textContent = outcome
    scoreSection.textContent = `Round ${currentRound} Player = ${playerPoints}: Computer = ${computerPoints}`

    
})
paperBtn.addEventListener("click", () => {
    let outcome = playRound("paper", computerPlay())
    // when round reaches 5
    if (currentRound === 5) {
        winingComment.textContent = decider(playerPoints, computerPoints)
        rockBtn.disabled = true
        paperBtn.disabled = true
        scissorBtn.disabled = true
        return
    }
    // point allocation
    if (outcome.includes("Win")) {
        playerPoints += 1
        currentRound += 1
    } else if (outcome.includes("Lose")) {
        computerPoints += 1
        currentRound += 1
    }
    winingComment.textContent = outcome
    scoreSection.textContent = `Round ${currentRound} Player = ${playerPoints}: Computer = ${computerPoints}`

})
scissorBtn.addEventListener("click", () => {
    let outcome = playRound("scissor", computerPlay())
    // when round reaches 5
    if (currentRound === 5) {
        winingComment.textContent = decider(playerPoints, computerPoints)
        rockBtn.disabled = true
        paperBtn.disabled = true
        scissorBtn.disabled = true
        return
    }
    // point allocation
    if (outcome.includes("Win")) {
        playerPoints += 1
        currentRound += 1
    } else if (outcome.includes("Lose")) {
        computerPoints += 1
        currentRound += 1
    }
    winingComment.textContent = outcome
    scoreSection.textContent = `Round ${currentRound} Player = ${playerPoints}: Computer = ${computerPoints}`
})

// Append items to container
container.appendChild(rockBtn)
container.appendChild(paperBtn)
container.appendChild(scissorBtn)
container.appendChild(resultArea)