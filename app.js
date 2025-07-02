let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscorepara = document.querySelector("#user-score");
let compscorepara = document.querySelector("#computer-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  return options[index];
};

const showWinner = (userwin) => {
  if (userwin === true) {
    userScore++;
    console.log("you win");
    msg.innerText = "you win";
    msg.style.backgroundColor = "green";
    userscorepara.innerText = userScore;
  } else if (userwin === false) {
    computerScore++;
    console.log("you lose to bot");
    msg.innerText = "you lost to Bot";
    msg.style.backgroundColor = "red";
    compscorepara.innerText = computerScore;
  }
};

const draw = () => {
  console.log("its a draw. No one is winner.play Again!");
  msg.innerText = "It's a draw! Try again.";
  msg.style.backgroundColor = "#081b31";
};

const playGame = (userchoice) => {
  console.log("user-choice = ", userchoice);
  // generate computer  choice
  let computerchoice = genCompChoice();
  console.log("computer-choice = ", computerchoice);

  if (computerchoice === userchoice) {
    draw();
  } else {
    let userwin = true;

    if (userchoice == "rock") {
      userwin = computerchoice === "paper" ? false : true;
    } else if (userchoice == "paper") {
      userwin = computerchoice === "scissors" ? false : true;
    } else {
      userwin = computerchoice === "rock" ? false : true;
    }
    showWinner(userwin);
  }
};

choices.forEach((choice) => {
  const userchoice = choice.getAttribute("id");
  choice.addEventListener("click", () => {
    playGame(userchoice);
  });
});
