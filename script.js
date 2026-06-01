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

console.log(getComputerChoice());

function getHumanChoice() {
  return prompt("rock, paper, or scissors?")
};

console.log(getHumanChoice());