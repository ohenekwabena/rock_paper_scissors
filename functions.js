let playerSelection = prompt("What do you choose? Rock, Paper or Scissors?");

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  let computerChoice = "";

  if (random === 0) {
    computerChoice = "Rock";
  } else if (random === 1) {
    computerChoice = "Paper";
  } else if (random === 2) {
    computerChoice = "Scissors";
  }

  return computerChoice;
}

// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  let A = playerSelection;
  let B = computerSelection;

  A = A.toLowerCase();
  B = B.toLowerCase();

  //   if (A === "rock" && B === "scissors") {
  //     return "You win! Rock beats Scissors";
  //   } else if (A === "rock" && B === "paper") {
  //     return "You lose! Paper beats Rock";
  //   } else if (A === "paper" && B === "rock") {
  //     return "You win! Paper beats Rock";
  //   }

  switch (true) {
    case A === "rock" && B === "paper":
      return "You lose! Paper beats rock";
      break;

    case A === "rock" && B === "scissors":
      return "You win! Rock beats Scissors";
      break;

    case A === "paper" && B === "rock":
      return "You win! Paper beats rock";
      break;

    case A === "paper" && B === "scissors":
      return "You lose! Scissors beats Paper";
      break;

    case A === "scissors" && B === "rock":
      return "You lose! Rock beats Scissors";
      break;

    case A === "scissors" && B === "paper":
      return "You win! Scissors beats Paper";
      break;

    default:
      return "That's a draw!";
  }
}

function game() {
  let player = 0;
  let computer = 0;

  for (let i = 0; i < 5; i++) {
    let winningChoice = playRound(playerSelection, getComputerChoice());

    if (winningChoice.includes("win")) {
      player += 1;
    } else if (winningChoice.includes("lose")) {
      computer += 1;
    }

    console.log(winningChoice);
  }

  if (player > computer) {
    console.log("You win the game!");
  } else if (player < computer) {
    console.log("You lost to Computer. Better luck next time");
  } else if ((player = computer)) {
    console.log("A draw! Play again");
  }
}

game();
