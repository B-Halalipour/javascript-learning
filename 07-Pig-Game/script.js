'use strict';
// My solution:
/*
// new game button:
// activate player one
// make players score 0
// make players current score 0
// make the dice disappear

const btnNewGame = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

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
  playerOne.classList.remove('player--winner', 'name');
  playerTwo.classList.remove('player--winner', 'name');
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
// nice number adds to current score if not one

const rollDice = function () {
  const number = Math.trunc(Math.random() * 6) + 1;
  console.log(number);
  if (playerOne.classList.contains('player--active')) {
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
  } else {
    if (number !== 1) {
      dice.classList.remove('hidden');
      dice.src = `dice-${number}.png`;
      playerTwoCurrent += number;
      playerTwoCurrentScore.textContent = playerTwoCurrent;
    } else {
      dice.classList.add('hidden');
      playerTwoCurrent = 0;
      playerTwoCurrentScore.textContent = 0;
      playerTwo.classList.toggle('player--active');
      playerOne.classList.toggle('player--active');
    }
  }
};
btnRollDice.addEventListener('click', rollDice);

// pressing hold button:
// toggles player
// adds the current score to total score
// checks if total score is more or equal to 100

const pressHoldBtn = function () {
  if (playerOne.classList.contains('player--active')) {
    playerOneTotal += playerOneCurrent;
    playerOneCurrent = 0;
    playerOneCurrentScore.textContent = playerOneCurrent;
    playerOneTotalScore.textContent = playerOneTotal;
    if (playerOneTotal >= 100) {
      playerOne.classList.add('player--winner', 'name');
    } else {
      playerOne.classList.toggle('player--active');
      playerTwo.classList.toggle('player--active');
    }
  } else {
    playerTwoTotal += playerTwoCurrent;
    playerTwoCurrent = 0;
    playerTwoCurrentScore.textContent = playerTwoCurrent;
    playerTwoTotalScore.textContent = playerTwoTotal;
    if (playerTwoTotal >= 100) {
      playerTwo.classList.add('player--winner', 'name');
    } else {
      playerTwo.classList.toggle('player--active');
      playerOne.classList.toggle('player--active');
    }
  }
};

btnHold.addEventListener('click', pressHoldBtn);
*/

// Jonas solution:

// Seleting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions:
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Dispplay dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. add current score to active players score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // switch to next player
      switchPlayer();
    }
    // finish the game
  }
});
