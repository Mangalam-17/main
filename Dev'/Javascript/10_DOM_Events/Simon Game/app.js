let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let gameStarted = false;
let level = 0;

let h2 = document.querySelector("h2");

// first step - > starting the game
document.addEventListener("keypress", function () {
  if (gameStarted == false) {
    console.log("game started");
    gameStarted = true;

    levelUp();
  }
});

// second step -> any random button flash + level 1 displaying on the screen

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 175);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 175);
}

function levelUp() {
  userSeq = []; //major change
  level++;
  h2.innerText = `Level ${level}`;

  //random btn choose
  let randomIdx = Math.floor(Math.random() * 3);
  let randomColor = btns[randomIdx];
  let randomBtn = document.querySelector(`.${randomColor}`);
  gameSeq.push(randomColor);
  console.log(gameSeq);

  gameFlash(randomBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was : <b>${level}</b> <br> Press any key to play again`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

// now the game waits for the button which was flashed
function btnPress() {
  //console.log(this);
  let btn = this;
  userFlash(btn); // this will help to flash by the user's click

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  gameStarted = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
