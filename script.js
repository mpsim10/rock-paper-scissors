function testGame() {
  let humanScore = 0;
  let computerScore = 0;

  const options = ["rock", "paper", "scissors"];

  function playRound() {
    
    // determine the index of the option corresponding to the human's choice
    function getHumanChoice() {
      const input = prompt("rock, paper, or scissors?");
      for (let i = 0; i < options.length; i++) {
        if (options[i].match(input.toLowerCase())) {
          return i;
        };
      };
      return undefined;
    };

    const human = getHumanChoice();
    // generate a random index in the options array to assign as the computer's choice
    const computer = Math.floor(Math.random() * 3);

    // compare index values to determine the winner and increase points
    function resolveRound() {
      const difference = human - computer;
      if (difference === 0) {
        return;
      } else if (difference === 1 || -2) {
        humanScore++;
      } else {
        computerScore++;
      };
    };
    
    function displayResults() {
      alert(`
      you chose ${options[human]}
      the computer chose ${options[computer]}
      human ${humanScore} | computer ${computerScore}
      `);
    };

    // check if the input returns a defined index before trying to resolve the round
    if (!isNaN(human)) {
      resolveRound(human, computer);
      displayResults();
    } else {
      alert("invalid entry – you lose! refresh to start again");
    };
  };

  // play 5 rounds of the game
  for (let i = 0; i < 5; i++) {
    playRound();
  };

};

testGame();