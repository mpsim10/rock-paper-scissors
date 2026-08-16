const choices = ["🪨", "📄", "✂️"];

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let resultMessage;

  function playRound(playerSelection) {    

    const human = Number(playerSelection);
    const computer = Math.floor(Math.random() * 3);
    
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
      you chose ${choices[human]}
      the computer chose ${choices[computer]}
      human ${humanScore} | computer ${computerScore}
      `);
    };
    
    if (!isNaN(human)) {
      resolveRound(human, computer);
      displayResults();
    } else {
      alert("invalid entry, round forfeited");
    };
  };

  function resolveGame() {
    const difference = humanScore - computerScore;
    if (difference === 0) {
      resultMessage = "it was a tie :|"
    } else if (difference > 0) {
      resultMessage = "you won! :D"
    } else {
      resultMessage = "you lost. :("
    };
  }

  function displayResults() {
    alert(`
    final score: human ${humanScore}, computer ${computerScore}
    ${resultMessage}
    refresh to play again
    `);
  };
  
  for (let i = 0; i < choices.length; i++) {
    const choiceButton = document.createElement("button");
    choiceButton.setAttribute("id", i);
    choiceButton.classList.add("choice-button");
    choiceButton.textContent = choices[i];
    document.body.appendChild(choiceButton);
  };
  
  const choiceButtons = document.querySelectorAll(".choice-button");
  choiceButtons.forEach(button => {
    button.addEventListener("click", (e) => playRound(e.target.id));
  });

};

playGame();