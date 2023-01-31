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
  (callFunction = () => {
    getInput("rock");
  })
);
document.getElementById("paper").addEventListener(
  "click",
  (callFunction = () => {
    getInput("paper");
  })
);
document.getElementById("scissor").addEventListener(
  "click",
  (callFunction = () => {
    getInput("scissor");
  })
);

function getInput(input) {
  console.log("player: " + input);
  const cpuInput = cpuChoice();
  console.log("CPU: " + cpuInput);
  if (
    (input === "rock" && cpuInput === "paper") ||
    (input === "scissor" && cpuInput === "rock") ||
    (input === "paper" && cpuInput === "scissor")
  ) {
    //cpu wins
    console.log("cpu won");
    counterOpp++;
    document.getElementById("opponentScore").innerHTML = counterOpp;
  }else if (
    (input === "paper" && cpuInput === "rock") ||
    (input === "rock" && cpuInput === "scissor") ||
    (input === "scissor" && cpuInput === "paper")
  ) {
    //player wins
    console.log("player won");
    counterPl++;
    document.getElementById("playerScore").innerHTML = counterPl;
  }else{
    //draw
    console.log("draw");
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
