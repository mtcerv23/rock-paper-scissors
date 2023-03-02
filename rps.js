const buttons = document.querySelectorAll('.game');
const div = document.querySelector('div');
const reset = document.querySelector('.reset');

div.style.paddingTop = '50px';

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener('click', () => {game(button.textContent.toLowerCase());})
})

reset.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  div.innerHTML = ''});


function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  let win = "lose";
  let winner;
  if (playerSelection == 'paper' && computerSelection == 'rock') {
    win = "win";
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    win = "win";
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    win = "win";
  } else if (computerSelection === playerSelection) {
    win = "tie";
    }
    
  if (win === "lose") {
    div.innerHTML += `You ${win}! ${computerSelection} beats ${playerSelection}<br>`;
    winner = "computer";
    return winner;
  } else if (win === "tie") {
    div.innerHTML += `Tie! You both picked ${playerSelection}<br>`;
    return;
  } else {
    div.innerHTML += `You ${win}! ${playerSelection} beats ${computerSelection}<br>`;
    winner = "player";
    return winner;
  }
}

function game(playerSelection) {
  if (playerScore == 5 || computerScore == 5) return;

  else {
    div.innerHTML += `You chose: ${playerSelection}<br>`;
    let computerSelection = getComputerChoice();
    let winner = playRound(playerSelection, computerSelection);

    if (winner === "player") playerScore++;
    else if (winner === "computer") computerScore++;

    div.innerHTML += `You: ${playerScore}, Computer: ${computerScore}<br><br>`;

    if (playerScore === 5) div.innerHTML += "Congratulations! You win!<br><br>";
    else if (computerScore === 5) div.innerHTML += "Better luck next time!<br><br>";
  }
}