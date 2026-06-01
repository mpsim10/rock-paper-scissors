const humanScore = 0;
const computerScore = 0;

function getComputerChoice() {
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
