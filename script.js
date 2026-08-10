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

function computerChoiceIndex() {
  return Math.floor(Math.random() * 3);
};

function compareChoices(humanIndex, computerIndex) {
  return humanIndex - computerIndex;
};

function testRound() {

  const humanIndex = humanChoiceIndex(getHumanChoice());
  const computerIndex = computerChoiceIndex();

  console.log(`you chose ${options[humanIndex]}`);
  console.log(`the computer chose ${options[computerIndex]}`);
  console.log(`the difference is ${compareChoices(humanIndex, computerIndex)}`);
};

testRound();