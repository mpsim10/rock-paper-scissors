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
    let result;
    if (humanChoice == compChoice) {
      result = "tie";
    } else if (
      (humanChoice == "paper" && compChoice == "rock") 
      || (humanChoice == "scissors" && compChoice == "paper") 
      || (humanChoice == "rock" && compChoice == "scissors")
    ) {
      result = "win";
      humanScore++;
    } else {
      result = "lose";
      compScore++;
    };
    console.log("you chose " + humanChoice);
    console.log("the computer chose " + compChoice);
    console.log("you " + result);
    console.log("human score: " + humanScore);
    console.log("computer score: " + compScore);
  };

  for (let i = 1; i < 6; i++) {
    console.log("round " + i);
    playRound(getHumanChoice(), getCompChoice())
  };

};

playGame();