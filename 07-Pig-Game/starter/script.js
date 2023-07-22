'use strict';

// QUERY SELECTORS
const playerOne = document.querySelector('#score--0');
const playerTwo = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

const sectionOne = document.querySelector('.player--0');
const sectionTwo = document.querySelector('.player--1');

const rollDiceBtn = document.querySelector('.btn--roll');
const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');

const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');

const die = document.querySelector('img');

// STATE
playerOne.textContent = Number(0);
playerTwo.textContent = Number(0);
diceEl.classList.add('hidden');
let roll = 0;
let playerOneTurn = true;
let playerOneScore = 0;
let playerTwoScore = 0;

let playerOneWin = 0;
let playerTwoWin = 0;

// FUNCTIONS
const rollDiceFunction = function () {
  roll = Math.trunc(Math.random() * 6 + 1);
  die.src = `dice-${roll}.png`;
  diceEl.classList.remove('hidden');

  if (roll === 1 && playerOneTurn === true) {
    currentScore0.textContent = 0;
    switchPlayers();
  } else if (roll === 1 && playerOneTurn === false) {
    currentScore1.textContent = 0;
    switchPlayers();
  } else if (roll !== 1 && playerOneTurn === true) {
    currentScore0.textContent = Number(currentScore0.textContent) + roll;
  } else if (roll !== 1 && playerOneTurn === false) {
    currentScore1.textContent = Number(currentScore1.textContent) + roll;
  }
};

const newGameFunction = function () {
  diceEl.classList.add('hidden');
  playerOneTurn = true;
  playerOne.textContent = 0;
  playerTwo.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  if (playerOneWin > 20) {
    sectionOne.classList.toggle('player--winner');
  } else {
    sectionTwo.classList.toggle('player--winner');
  }

  sectionOne.classList.add('player--active');
  sectionTwo.classList.remove('player--active');
  rollDiceBtn.classList.remove('hidden');
  holdBtn.classList.remove('hidden');
  playerOneWin = 0;
  playerTwoWin = 0;
};

const switchPlayers = function () {
  playerOneTurn === true
    ? ((playerOneTurn = false),
      sectionOne.classList.toggle('player--active'),
      sectionTwo.classList.toggle('player--active'))
    : ((playerOneTurn = true),
      sectionOne.classList.toggle('player--active'),
      sectionTwo.classList.toggle('player--active'));
};

const holdFunction = function () {
  if (playerOneTurn === true) {
    playerOne.textContent =
      Number(playerOne.textContent) + Number(currentScore0.textContent);
    playerOneWin = Number(playerOne.textContent);
    currentScore0.textContent = 0;

    if (playerOneWin > 20) {
      sectionOne.classList.toggle('player--active');
      sectionOne.classList.toggle('player--winner');
      diceEl.classList.add('hidden');
      rollDiceBtn.classList.add('hidden');
      holdBtn.classList.add('hidden');
    }
  } else {
    playerOneTurn === true;
    playerTwo.textContent =
      Number(playerTwo.textContent) + Number(currentScore1.textContent);
    playerTwoWin = Number(playerTwo.textContent);
    currentScore1.textContent = 0;

    if (playerTwoWin > 20) {
      sectionTwo.classList.toggle('player--active');
      sectionTwo.classList.toggle('player--winner');
      diceEl.classList.add('hidden');
      rollDiceBtn.classList.add('hidden');
      holdBtn.classList.add('hidden');
    }
  }

  switchPlayers();
};

// EVENT LISTENERS
const diceRoll = rollDiceBtn.addEventListener('click', rollDiceFunction);

const newGame = newGameBtn.addEventListener('click', newGameFunction);

const hold = holdBtn.addEventListener('click', holdFunction);
