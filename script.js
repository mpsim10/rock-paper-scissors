const choices = ["rock", "paper", "scissors"];

for (let i = 0; i < choices.length; i++) {
  const choiceButton = document.createElement("button");
  choiceButton.setAttribute("id", i);
  choiceButton.classList.add("choice-button");
  choiceButton.textContent = choices[i];
  document.body.appendChild(choiceButton);
};

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

function playGame() {

  let humanScore = 0;
  let computerScore = 0;

  function endGame() {
    const winner = humanScore === 5 ? "human" : "computer";
    choiceButtons.forEach(button => (button.disabled = true));
    messageDisplay.textContent = `${winner} wins! refresh to play again`;
  };

  function playRound(playerSelection) {
    const human = Number(playerSelection);
    const computer = Math.floor(Math.random() * 3);
    const difference = human - computer;
    if (difference === 1 || difference === -2) {humanScore++};
    if (difference === -1 || difference === 2) {computerScore++};
    updateDisplay(messageDisplay, choices[human], choices[computer]);
    updateDisplay(scoreDisplay, humanScore, computerScore);
    if (humanScore === 5 || computerScore === 5) {endGame()}
  };
  
  const choiceButtons = document.querySelectorAll(".choice-button");
  choiceButtons.forEach(button => {
    button.addEventListener("click", (e) => playRound(e.target.id));
  });

};

playGame();