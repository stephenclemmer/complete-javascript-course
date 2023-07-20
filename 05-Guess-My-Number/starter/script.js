'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

// Set state for score
let score = 20;
document.querySelector('.score').textContent = score;

// Set state for high score
let highscore = 0;

let won = false;

// EVENT LISTENER for when the check button is clicked
document.querySelector('.check').addEventListener('click', function () {
  // Store the number inputted as a variable
  const guess = Number(document.querySelector('.guess').value);

  //   When there is no guess, display a message indicating that.
  if (!guess) {
    document.querySelector('.message').textContent =
      'Sorry, No number inputted.';

    // When player wins
  } else if (guess === secretNumber && won === false) {
    if (score > 0) {
      score = score + 5;
      won = true;
      //   console.log(won);
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'You guessed correctly!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.check').textContent = 'Play again!';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      document.querySelector('.message').textContent = 'You lost!';
    }

    // Once the game has been won
  } else if (guess === secretNumber && won === true) {
    if (score > 0) {
      won = true;
      highscore === score ? (score = highscore) : (score = 20);
      secretNumber = Math.trunc(Math.random() * 20 + 1);
      document.querySelector('.message').textContent = 'Start guessing...';
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = '';
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';
      document.querySelector('.check').textContent = 'Check!';
      won = false;
    } else {
      document.querySelector('.message').textContent = 'You lost!';
    }

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high, guess again!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!';
    }

    // When guess is too low
  } else {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low, guess again!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!';
    }
  }

  if (score === 0) {
    document.querySelector('.message').textContent = 'You lost!';
  }

  //   Make the Reset button reset the game
  document.querySelector('.reset').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.check').textContent = 'Check!';
    won = false;
  });
});
