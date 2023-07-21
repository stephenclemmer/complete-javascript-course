'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

// Set state for score
let score = 20;

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

displayScore(score);

// Set state for high score
let highscore = 0;
let won = false;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// EVENT LISTENER for when the check button is clicked
document.querySelector('.check').addEventListener('click', function () {
  // Store the number inputted as a variable
  const guess = Number(document.querySelector('.guess').value);

  //   When there is no guess, display a message indicating that.
  if (!guess) {
    displayMessage('Sorry, No number inputted.');

    // When player wins
  } else if (guess === secretNumber && won === false) {
    if (score > 0) {
      score = score + 5;
      won = true;
      displayScore(score);
      displayMessage('You guessed correctly!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.check').textContent = 'Play again!';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      displayMessage('You lost!');
    }

    // Once the game has been won
  } else if (guess === secretNumber && won === true) {
    if (score > 0) {
      highscore === score ? (score = highscore) : (score = 20);
      secretNumber = Math.trunc(Math.random() * 20 + 1);
      displayMessage('Start guessing...');
      displayScore(score);
      document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = '';
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';
      document.querySelector('.check').textContent = 'Check!';
      won = false;
    } else {
      displayMessage('You lost!');
    }

    // When guess is too high or too low
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(
        guess > secretNumber
          ? 'Too high, guess again!'
          : 'Too low, guess again!'
      );
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost!');
    }
  }

  //   Make the Reset button reset the game
  document.querySelector('.reset').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    displayScore(score);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.check').textContent = 'Check!';
    won = false;
  });
});
