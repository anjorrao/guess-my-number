'use strict';
// DOM - DOCUMENT OBJECT MODEL - Structured representation of HTML documents allows JS to access HTML elements and styles to manipulate them.
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 25;

// console.log(document.querySelector('.guess').value);

// ============================================================================================

// Setting Secret Number
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// Decrementing score value
const decrementScore = currentScore => {
  if (!currentScore) {
    return 0;
  } else {
    currentScore -= 1;
    return currentScore;
  }
};

// Resetting the game
const resetGame = () => {
  document.querySelector('.guess').value = ' ';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.cssText = `
		width: 15rem;
	`;
};

// Display message
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const myScore = Number(document.querySelector('.score').innerHTML);
  const myHighScore = Number(document.querySelector('.highscore').innerHTML);

  // No number
  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    // user wins
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (myScore > myHighScore) {
      myHighScore = myScore;
      document.querySelector('.highscore').textContent = myScore;
    }
  } else if (guess !== secretNumber) {
    // When guess is wrong
    if (decrementScore(myScore) === 0) {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = decrementScore(myScore);
    } else {
      displayMessage(guess > secretNumber ? 'Too High guess' : 'Too low guess');
      document.querySelector('.score').textContent = decrementScore(myScore);
    }
  }
});

document.querySelector('.again').addEventListener('click', resetGame);
