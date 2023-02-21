function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  let win = "lose";
  let winner;
  if (computerSelection == 'rock' && playerSelection == 'paper') {
    win = "win";
  } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
    win = "win";
  } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
    win = "win";
  } else if (computerSelection === playerSelection) {
      win = "tie";
    }
    

  if (win === "lose") {
    console.log(`You ${win}! ${computerSelection} beats ${playerSelection}`);
    winner = "computer";
    return winner;
  } else if (win === "tie") {
    console.log(`Tie! You both picked ${playerSelection}`);
    return;
  } else {
    console.log(`You ${win}! ${playerSelection} beats ${computerSelection}`);
    winner = "player";
    return winner;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection;
  let computerSelection;
  let winner;

  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Rock, paper or scissors? ");
    console.log(playerSelection);
    computerSelection = getComputerChoice();
    winner = playRound(playerSelection, computerSelection);
    if (winner === "player") {
      playerScore++;
    } else if (winner === "computer") {
      computerScore++;
    }
    console.log(`You: ${playerScore}, Computer: ${computerScore}`);
  }

  if (playerScore > computerScore) {
    console.log("Congratulations! You win!");
  } else if (playerScore === computerScore) {
    console.log("It's a tie!");
  }
  else console.log("Better luck next time!");

}

game();