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

function playGame() {

  let hScore = 0;
  let cScore = 0;

  const updateScore = () => scoreDisplay.textContent = `human: ${hScore} | computer: ${cScore}`;

  function endGame() {
    const winner = hScore === 5 ? "human" : "computer";
    choiceButtons.forEach(button => (button.disabled = true));
    messageDisplay.textContent = `${winner} wins! refresh to play again`;
  };

  function playRound(playerSelection) {
    const human = Number(playerSelection);
    const computer = Math.floor(Math.random() * 3);
    const diff = human - computer;
    if (diff === 1 || diff === -2) {hScore++};
    if (diff === -1 || diff === 2) {cScore++};
    messageDisplay.textContent = `human: ${choices[human]} | computer: ${choices[computer]}`;
    updateScore();
    if (hScore === 5 || cScore === 5) {endGame()}
  };
  
  const choiceButtons = document.querySelectorAll(".choice-button");
  choiceButtons.forEach(button => {
    button.addEventListener("click", (e) => playRound(e.target.id));
  });

};

playGame();