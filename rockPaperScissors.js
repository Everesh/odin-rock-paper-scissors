function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    return (random == 0) ? "rock" : (random == 1 ) ? "paper" : "scissors";
}

function playRound(player) {
    if (player != "rock" && player != "paper" && player != "scissors"){
        return `You heathen! "${player}"?! What sort of response is that?`;
    }
    let computer = getComputerChoice();
    return (player == computer) ? [2,`${player}, eh? Good choice. I made the same... Its a DRAW!`] :
           (player == "rock" && computer == "scissors"
           || player == "paper" && computer == "rock"
           || player == "scissors" && computer == "paper") ? [0,`${player.toUpperCase()}?! No way! My poor innocent ${computer}... Its your WIN!`] :
           [1,`${player}, huh? Pathetic. My ${computer} crushes your feeble pick.. Its your LOSE!`];
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const banterBoard = document.querySelector(".banterBoard");
const winnerPane = document.querySelector(".winnerPane");
const scoreMe = document.querySelector("#scoreMe");
const scoreComputer = document.querySelector("#scoreComputer");
let currentScoreMe = parseInt(scoreMe.textContent);
let currentScoreComputer = parseInt(scoreComputer.textContent);

const resetAll = document.querySelector("#resetAll");
const resetBanter = document.querySelector("#resetBanter");

rock.addEventListener("click", () => {
    let outcome = playRound("rock");

    if (outcome[0] == 0) {
        scoreMe.textContent = ++currentScoreMe;
        if (currentScoreMe >= 5 && winnerPane.classList.contains("hidden")){
            winnerPane.classList.remove("hidden");
            winnerPane.textContent = "You Won!"
        }
    }
    else if (outcome[0] == 1) {
        scoreComputer.textContent = ++currentScoreComputer;
        if (currentScoreComputer >= 5 && winnerPane.classList.contains("hidden")){
            winnerPane.classList.remove("hidden");
            winnerPane.textContent = "Computer Won!"
        }
    }

    const banter = document.createElement("p");
    banter.classList.add("banter");
    banter.textContent = outcome[1];
    banterBoard.prepend(banter);
});

paper.addEventListener("click", () => {
    let outcome = playRound("paper");

    if (outcome[0] == 0) {
        scoreMe.textContent = ++currentScoreMe;
        if (currentScoreMe >= 5 && winnerPane.classList.contains("hidden")){
            winnerPane.classList.remove("hidden");
            winnerPane.textContent = "You Won!"
        }
    }
    else if (outcome[0] == 1) {
        scoreComputer.textContent = ++currentScoreComputer;
        if (currentScoreComputer >= 5 && winnerPane.classList.contains("hidden")){
            winnerPane.classList.remove("hidden");
            winnerPane.textContent = "Computer Won!"
        }
    }

    const banter = document.createElement("p");
    banter.classList.add("banter");
    banter.textContent = outcome[1];
    banterBoard.prepend(banter);
});

scissors.addEventListener("click", () => {
    let outcome = playRound("scissors");

    if (outcome[0] == 0) {
        scoreMe.textContent = ++currentScoreMe;
        if (currentScoreMe >= 5 && winnerPane.classList.contains("hidden")){
            winnerPane.classList.remove("hidden");
            winnerPane.textContent = "You Won!"
        }
    }
    else if (outcome[0] == 1) {
        scoreComputer.textContent = ++currentScoreComputer;
        if (currentScoreComputer >= 5 && winnerPane.classList.contains("hidden")){
            winnerPane.classList.remove("hidden");
            winnerPane.textContent = "Computer Won!"
        }
    }

    const banter = document.createElement("p");
    banter.classList.add("banter");
    banter.textContent = outcome[1];
    banterBoard.prepend(banter);
});

resetAll.addEventListener("click", () => {
    currentScoreMe = 0;
    currentScoreComputer = 0;
    scoreMe.textContent = 0;
    scoreComputer.textContent = 0;
    banterBoard.textContent = "";
    winnerPane.classList.add("hidden");
});

resetBanter.addEventListener("click", () => {
    banterBoard.textContent = "";
});