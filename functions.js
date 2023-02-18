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

console.log(getComputerChoice());
