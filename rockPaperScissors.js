function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    return (random == 0) ? "rock" : (random == 1 ) ? "paper" : "scissors";
}

function getPlayerChoice() {
    return prompt("Rock, Paper, Scissors. Choose one. Do it now!").toLowerCase().trim();
}