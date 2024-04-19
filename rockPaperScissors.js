function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    return (random == 0) ? "rock" : (random == 1 ) ? "paper" : "scissors";
}

function getPlayerChoice() {
    return prompt("Rock, Paper, Scissors. Choose one. Do it now!").toLowerCase().trim();
}

function playRound() {
    let player = getPlayerChoice();
    if (player != "rock" && player != "paper" && player != "scissors"){
        return `You heathen! "${player}"?! What sort of response is that?`;
    }
    let computer = getComputerChoice();
    return (player == computer) ? `${player}, eh? Good choice. I made the same... Its a DRAW!` :
           (player == "rock" && computer == "scissors"
           || player == "paper" && computer == "rock"
           || player == "scissors" && computer == "paper") ? `${player.toUpperCase()}?! No way! My poor innocent ${computer}... Its your WIN!` :
           `${player}, huh? Pathetic. My ${computer} crushes your feeble pick.. Its your LOSE!`;
}