const gamerSelected = document.getElementById('gamer-selected');
const winnerSelected = document.getElementById('winner-selected');

let gamer, winner = null;

changePlayer('X');

function chooseSquare(id) {
  if (winner !== null) {
    return;
  }

  var square = document.getElementById(id);
  if (square.innerHTML !== '-') {
    return;
  }

  square.innerHTML = gamer;
  square.style.color = '#000';

  if (gamer === 'X') {
    gamer = 'O';
  } else {
    gamer = 'X';
  }

  changePlayer(gamer);
  checksWinner();
}

function changePlayer(valor) {
  gamer = valor;
  gamerSelected.innerHTML = gamer;
}

function checksWinner() {
  const square1 = document.getElementById(1);
  const square2 = document.getElementById(2);
  const square3 = document.getElementById(3);
  const square4 = document.getElementById(4);
  const square5 = document.getElementById(5);
  const square6 = document.getElementById(6);
  const square7 = document.getElementById(7);
  const square8 = document.getElementById(8);
  const square9 = document.getElementById(9);
  
  if (checkSequence(square1, square2, square3)) {
    changesColorSquare(square1, square2, square3);
    changeWinner(square1);
    return;
  }

  if (checkSequence(square4, square5, square6)) {
    changesColorSquare(square4, square5, square6);
    changeWinner(square4);
    return;
  }

  if (checkSequence(square7, square8, square9)) {
    changesColorSquare(square7, square8, square9);
    changeWinner(square7);
    return;
  }

  if (checkSequence(square1, square4, square7)) {
    changesColorSquare(square1, square4, square7);
    changeWinner(square1);
    return;
  }

  if (checkSequence(square2, square5, square8)) {
    changesColorSquare(square2, square5, square8);
    changeWinner(square2);
    return;
  }

  if (checkSequence(square3, square6, square9)) {
    changesColorSquare(square3, square6, square9);
    changeWinner(square3);
    return;
  }

  if (checkSequence(square1, square5, square9)) {
    changesColorSquare(square1, square5, square9);
    changeWinner(square1);
    return;
  }

  if (checkSequence(square3, square5, square7)) {
    changesColorSquare(square3, square5, square7);
    changeWinner(square3);
  }
}

function changeWinner(square) {
  winner = square.innerHTML;
  winnerSelected.innerHTML = winner;
}

function changesColorSquare(square1, square2, square3) {
  square1.style.background = '#0f0';
  square2.style.background = '#0f0';
  square3.style.background = '#0f0';
}

function checkSequence(square1, square2, square3) {
  let ehIgual = false;

  if (square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML) {
    ehIgual = true;
  }

  return ehIgual;
}

function restart() {
  winner = null;
  winnerSelected.innerHTML = '';

  for (var i = 1; i <= 9; i++) {
    const square = document.getElementById(i);
    square.style.background = '#eee';
    square.style.color = '#eee';
    square.innerHTML = '-';
  }

  changePlayer('X');
}
