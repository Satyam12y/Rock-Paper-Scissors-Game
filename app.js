// Initial Scores
let userScore = 0;
let compScore = 0;

// Select all necessary elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset-btn");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};


const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.textContent = userScore;
    msg.textContent = `You Win! 🏆 ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#00b894";
  } else {
    compScore++;
    compScorePara.textContent = compScore;
    msg.textContent = `You Lose 😢 ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "#d63031";
  }
};


const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    msg.textContent = "It's a Draw! ";
    msg.style.backgroundColor = "#6c5ce7";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }

  
  const clicked = document.getElementById(userChoice);
  clicked.classList.add("active");
  setTimeout(() => clicked.classList.remove("active"), 400);
};


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});


resetBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScorePara.textContent = userScore;
  compScorePara.textContent = compScore;
  msg.textContent = "Make your move!";
  msg.style.backgroundColor = "#6c5ce7";
});