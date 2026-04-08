'use strict';

// new game button:
// activate player one
// make players score 0
// make players current score 0
// make the dice disappear

const btnNewGame = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');
const makePlayerOneCurrentScoreZero = function () {
  playerOneCurrentScore.textContent = 0;
};
const makePlayerTwoCurrentScoreZero = function () {
  playerTwoCurrentScore.textContent = 0;
};
const makePlayerOneTotalScoreZero = function () {
  playerOneTotalScore.textContent = 0;
};
const makePlayerTwoTotalScoreZero = function () {
  playerTwoTotalScore.textContent = 0;
};

//player 1:
const playerOne = document.querySelector('.player--0');
const playerOneTotalScore = document.querySelector('#score--0');
let playerOneTotal = 0;
const playerOneCurrentScore = document.querySelector('#current--0');
let playerOneCurrent = 0;

//player 2:
const playerTwo = document.querySelector('.player--1');
const playerTwoTotalScore = document.querySelector('#score--1');
let playerTwoTotal = 0;
const playerTwoCurrentScore = document.querySelector('#current--1');
let playerTwoCurrent = 0;
const newGame = function () {
  playerOne.classList.add('player--active');
  playerTwo.classList.remove('player--active');
  dice.classList.add('hidden');
  makePlayerOneTotalScoreZero();
  makePlayerOneCurrentScoreZero();
  makePlayerTwoTotalScoreZero();
  makePlayerTwoCurrentScoreZero();
};

btnNewGame.addEventListener('click', newGame);

// rolling a dice:

// random number between 1-6
// dice appears on the screen based on the generated number

const btnRollDice = document.querySelector('.btn--roll');
const rollDice = function () {
  const number = Math.trunc(Math.random() * 6) + 1;
  console.log(number);
  if (number !== 1) {
    dice.classList.remove('hidden');
    dice.src = `dice-${number}.png`;
    playerOneCurrent += number;
    playerOneCurrentScore.textContent = playerOneCurrent;
  } else {
    dice.classList.add('hidden');
    playerOneCurrent = 0;
    playerOneCurrentScore.textContent = 0;
    playerOne.classList.toggle('player--active');
    playerTwo.classList.toggle('player--active');
  }
};
btnRollDice.addEventListener('click', rollDice);
