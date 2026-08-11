const options = ["rock", "paper", "scissors"];

function getHumanChoice() {
  return prompt("rock, paper, or scissors?");
};

function humanChoiceIndex(input) {
  for (let i = 0; i < options.length; i++) {
    if (options[i].match(input.toLowerCase())) {
      return i;
    };
  };
  return undefined;
};

function isValidChoice(choice) {
  return !isNaN(humanChoiceIndex(choice));
};

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
};

function compareChoices(humanIndex, computerIndex) {
  const difference = humanIndex - computerIndex;
  if (difference === 0) {
    return "tie";
  } else if (difference === 1 || difference === -2) {
    return "win";
  } else {
    return "lose";
  };
};

function testGame() {
  let humanScore = 0;
  let computerScore = 0;

  function testRound() {

    const humanChoice = getHumanChoice();
    const humanIndex = humanChoiceIndex(humanChoice);
    const computerIndex = getComputerChoice();

    if (isValidChoice(humanChoice)) {
      console.log(`you chose ${options[humanIndex]}`);
      console.log(`the computer chose ${options[computerIndex]}`);
      console.log(`you ${compareChoices(humanIndex, computerIndex)}`);
    } else {
      alert("invalid entry, refresh to start again");
    }
  
  };

  testRound();
  testRound();
  testRound();
  testRound();
  testRound();

};

testGame();