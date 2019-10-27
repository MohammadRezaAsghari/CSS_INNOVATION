var turn = 1;
var player0_current = 0;
var player1_current = 0;
var player0_score = 0;
var player1_score = 0;

var dice0 = document.getElementById("dice0");
var dice1 = document.getElementById("dice1");

newgame();

document.getElementById("newgame").onclick = () => {
  newgame();
};

function newgame() {
  player0_current = 0;
  document.getElementById("player0-current").innerHTML = 0;
  player0_score = 0;
  document.getElementById("player0-score").innerHTML = 0;
  player1_current = 0;
  document.getElementById("player1-current").innerHTML = 0;
  player1_score = 0;
  document.getElementById("player1-score").innerHTML = 0;
  document.getElementById("player0-title").innerHTML = "PLAYER 0";
  document.getElementById("player1-title").innerHTML = "PLAYER 1";
  document.getElementById("player0-title").style.color = "#000000";
  document.getElementById("player1-title").style.color = "#000000";
  if (turn == 1) {
    changeTurn();
  }
}

document.getElementById("roll").onclick = () => {
  var dc0 = 1 + Math.floor(Math.random() * 6);
  var dc1 = 1 + Math.floor(Math.random() * 6);
  console.log(dc0 + " " + dc1);
  setDice(0, dc0);
  setDice(1, dc1);

  if (turn == 0) {
    if (dc0 == 6 && dc1 == 6) {
      player0_current = 0;
      document.getElementById("player0-current").innerHTML = 0;
      player0_score = 0;
      document.getElementById("player0-score").innerHTML = 0;
      changeTurn();
    } else {
      player0_current += dc0 + dc1;
      document.getElementById("player0-current").innerHTML = player0_current;
      if (dc0 == 1 || dc1 == 1) {
        player0_current = 0;
        document.getElementById("player0-current").innerHTML = 0;
        changeTurn();
      }
    }
  } else if (turn == 1) {
    if (dc0 == 6 && dc1 == 6) {
      player1_current = 0;
      document.getElementById("player1-current").innerHTML = 0;
      player1_score = 0;
      document.getElementById("player1-score").innerHTML = 0;
      changeTurn();
    } else {
      player1_current += dc0 + dc1;
      document.getElementById("player1-current").innerHTML = player1_current;
      if (dc0 == 1 || dc1 == 1) {
        player1_current = 0;
        document.getElementById("player1-current").innerHTML = 0;
        changeTurn();
      }
    }
  }
  hideDicesAfterOneSecond();
};

document.getElementById("hold").onclick = () => {
  if (turn == 0) {
    player0_score += player0_current;
    player0_current = 0;
    document.getElementById("player0-current").innerHTML = 0;
    document.getElementById("player0-score").innerHTML = player0_score;
    checkWinner();
    changeTurn();
    hideDicesAfterOneSecond();
  } else if (turn == 1) {
    player1_score += player1_current;
    player1_current = 0;
    document.getElementById("player1-current").innerHTML = 0;
    document.getElementById("player1-score").innerHTML = player1_score;
    checkWinner();
    changeTurn();
    hideDicesAfterOneSecond();
  }
};

function hideDicesAfterOneSecond() {
  setTimeout(function() {
    document.getElementById("dice0").style.visibility = "hidden";
    document.getElementById("dice1").style.visibility = "hidden";
  }, 700);
}
function setDice(dice, num) {
  document.getElementById("dice0").style.visibility = "visible";
  document.getElementById("dice1").style.visibility = "visible";
  if (dice == 0) {
    dice0.src = "assets/dice-" + num + ".png";
  } else {
    dice1.src = "assets/dice-" + num + ".png";
  }
}
function checkWinner() {
  var limit = document.getElementById("limit").value;
  if (limit == null || limit == 0) {
    limit = 100;
  }
  if (limit <= player0_score) {
    document.getElementById("player0-title").innerHTML = "WINNER";
    document.getElementById("player0-title").style.color = "#ff0000";
  } else if (limit <= player1_score) {
    document.getElementById("player1-title").innerHTML = "WINNER";
    document.getElementById("player1-title").style.color = "#ff0000";
  }
}

function changeTurn() {
  if (turn == 0) turn = 1;
  else turn = 0;
  //change styles
  document.getElementById("player0-dot").style.visibility = "hidden";
  document.getElementById("player1-dot").style.visibility = "hidden";
  document.getElementById("player" + turn + "-dot").style.visibility =
    "visible";
  document.getElementById("gamebox").classList.remove("game-box-player0-turn");
  document.getElementById("gamebox").classList.remove("game-box-player1-turn");
  document
    .getElementById("gamebox")
    .classList.add("game-box-player" + turn + "-turn");
  //change styles
}
