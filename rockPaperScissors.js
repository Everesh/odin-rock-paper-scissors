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

function playGame() {
    let player = 0;
    let computer = 0;
    let parseMe = ""
    for (let cycle = 0; cycle < 5; cycle++) {
        parseMe = playRound();
        if (parseMe.includes("WIN")) {
            player++;
        }
        else if (parseMe.includes("LOSE")) {
            computer++;
        }
        else {
            player++;
            computer++;
        }
        console.log(parseMe);
        console.log(`It's ${player}:${computer}`);
    }
    if (player == computer) {
        console.log(`${player}:${computer} nailbitter right? Looks like neither came on top, its an overall DRAW!`)
    }
    else if (player > computer) {
        console.log(`Whoa, good job! ${player}:${computer} that's an overall WIN!`);
    }
    
    else {
        console.log(`Oh... Such a shame. ${player}:${computer} looks like overall your LOSE!`);
    }
}