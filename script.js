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

function computerChoiceIndex() {
  return Math.floor(Math.random() * 3);
};

function compareChoices(humanIndex, computerIndex) {
  const difference = humanIndex - computerIndex;
  if (difference === 0) {
    return "tie"
  } else if (difference === 1 || difference === -2) {
    return "win"
  } else {
    return "lose"
  };
};



function testRound() {

  let humanChoice = getHumanChoice()
  const humanIndex = humanChoiceIndex(humanChoice);
  const computerIndex = computerChoiceIndex();

  console.log(isValidChoice(humanChoice));
  console.log(`you chose ${options[humanIndex]}`);
  console.log(`the computer chose ${options[computerIndex]}`);
  console.log(`you ${compareChoices(humanIndex, computerIndex)}`);
};

testRound();