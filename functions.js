//create global variables
let gameOver = false;
let player = 0;
let computer = 0;
let scoreToReach = 5;
let once = true;
const result = document.createElement('p');
const roundEnd = document.createElement('p');

//query html elements 
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const newgame = document.querySelector('.newGame');
const endgame = document.querySelector('.endGame');
const display = document.querySelector('.display');


//add eventListeners to buttons
rock.addEventListener("click", () => { playRound("rock", computerChoice()) });
paper.addEventListener("click", () => { playRound("paper", computerChoice()) });
scissors.addEventListener("click", () => { playRound("scissors", computerChoice()) });
endgame.addEventListener("click", endGame);
newgame.addEventListener("click", newGame);


//create function to generate random computer selection
function computerChoice() {
  let choice = 0;
  choice = Math.floor(Math.random() * 3);

  if (choice === 0) return "rock";
  else if (choice === 1) return "paper";
  else if (choice === 2) return "scissors";
  else return "";

}

function decider() {

  if (player === scoreToReach || computer === scoreToReach) {
    gameOver = true;

    while (once) {
      const newNode = document.createTextNode("Round ended! End game to see results");
      roundEnd.appendChild(newNode);
      display.appendChild(roundEnd);
      once = false;
    }
  }
}

//create function to take player choice and return result

function playRound(playerChoice, computerChoice) {

  decider();

  if (!gameOver) {
    if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
      player++
      playerScore.innerHTML = `${player}`;
      computerScore.innerHTML = `${computer}`;
    }

    else if ((computerChoice === "rock" && playerChoice === "scissors") || (computerChoice === "paper" && playerChoice === "rock") || (computerChoice === "scissors" && playerChoice === "paper")) {
      computer++
      playerScore.innerHTML = `${player}`;
      computerScore.innerHTML = `${computer}`;
    }

    else {
      playerScore.innerHTML = `${player}`;
      computerScore.innerHTML = `${computer}`;
    }
  }
}

//create function to end game 
function endGame() {
  // gameOver = true;

  roundEnd.innerHTML = "";
  display.removeChild(roundEnd);


  if (player > computer) {
    const node = document.createTextNode("Player Wins!");
    result.appendChild(node);
    display.appendChild(result);
  }

  else if (player < computer) {
    const node = document.createTextNode("Computer Wins!");
    result.appendChild(node);
    display.appendChild(result);
  }

  else {
    const node = document.createTextNode("It's a draw!");
    result.appendChild(node);
    display.appendChild(result);
  }
}


// create function for new game 
function newGame() {
  gameOver = false;
  player = 0;
  computer = 0;
  once = true;

  playerScore.innerHTML = `${player}`;
  computerScore.innerHTML = `${computer}`;
  result.innerHTML = "";
  display.removeChild(result);
}