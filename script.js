const choices = ["rock", "paper", "scissors"];

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let resultMessage;

  const messageDisplay = document.createElement("div");
  messageDisplay.id = "message-display";
  messageDisplay.textContent = "make your first choice to begin";
  document.body.appendChild(messageDisplay);

  const scoreDisplay = document.createElement("div");
  scoreDisplay.id = "score-display";
  document.body.appendChild(scoreDisplay);

  function updateDisplay(display, human, computer) {
    display.textContent = `human: ${human} | computer: ${computer}`;
  };

  function playRound(playerSelection) {
    const human = Number(playerSelection);
    const computer = Math.floor(Math.random() * 3);
    const difference = human - computer;
    if (difference === 0) {
      return;
    } else if (difference === 1 || -2) {
      humanScore++;
    } else {
      computerScore++;
    };
    updateDisplay(messageDisplay, choices[human], choices[computer]);
    updateDisplay(scoreDisplay, humanScore, computerScore);
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
  };

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