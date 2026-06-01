function getCompChoice() {
  const n = Math.ceil(Math.random() * 3);
  switch (n) {
    case 1:
      return "rock"
      break;
    case 2:
      return "paper"
      break;
    case 3:
      return "scissors"
    default:
      break;
  };
};

function getHumanChoice() {
  return prompt("rock, paper, or scissors?")
};

function playGame() {
  
  let humanScore = 0;
  let compScore = 0;

  function playRound(humanInput, compChoice) {
    const humanChoice = humanInput.toLowerCase();
    if (humanChoice == compChoice) {
      console.log("you both chose " + humanChoice);
    } else if (
      (humanChoice == "paper" && compChoice == "rock") 
      || (humanChoice == "scissors" && compChoice == "paper") 
      || (humanChoice == "rock" && compChoice == "scissors")
    ) {
      console.log("you win! " + humanChoice + " beats " + compChoice);
      humanScore++;
    } else {
      console.log("you lose :( " + compChoice + " beats " + humanChoice);
      compScore++;
    };
    console.log("human: " + humanScore + " | computer: " + compScore);
  };

  for (let i = 1; i < 6; i++) {
    console.log("round " + i);
    playRound(getHumanChoice(), getCompChoice())
  };

  console.log("GAME OVER");

  if (humanScore > compScore) {
    console.log("you win the game!");
  } else if (humanScore == compScore) {
    console.log("it's a tie");
  } else {
    console.log("you lose the game :(");
  };

};

playGame();