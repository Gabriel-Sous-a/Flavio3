let counterPl = 0;
let counterDraw = 0;
let counterOpp = 0;

const changeColors = document.getElementById("changeColors");
changeColors.addEventListener("change", bgChange);

function bgChange() {
  document.body.style.backgroundColor = changeColors.value;
}

document.getElementById("rock").addEventListener(
  "click",
  () => getInput("rock")
);
document.getElementById("paper").addEventListener(
  "click",
  () => getInput("paper")
);
document.getElementById("scissor").addEventListener(
  "click",
  () => getInput("scissor")
);

function getInput(input) {
  const cpuInput = cpuChoice();
  if (
    (input === "rock" && cpuInput === "paper") ||
    (input === "scissor" && cpuInput === "rock") ||
    (input === "paper" && cpuInput === "scissor")
  ) {
    //cpu wins
    counterOpp++;
    document.getElementById("opponentScore").innerHTML = counterOpp;
  }else if (
    (input === "paper" && cpuInput === "rock") ||
    (input === "rock" && cpuInput === "scissor") ||
    (input === "scissor" && cpuInput === "paper")
  ) {
    //player wins
    counterPl++;
    document.getElementById("playerScore").innerHTML = counterPl;
  }else{
    //draw
    counterDraw++;
    document.getElementById("draw").innerHTML = counterDraw;
  }
}

function cpuChoice() {
  const cpuInput = Math.floor(Math.random() * 3);
  switch (cpuInput) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }
}
