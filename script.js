'use strict';

let randomNum = Math.floor(Math.random() * 100 + 1);
let score = 20;
let highScore = 0;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('⛔️ No number');
  } else if (guess === randomNum) {
    displayMessage('🥳 CORRECT NUMBER!!!');

    document.querySelector('.number').textContent = randomNum;
    document.querySelector('body').style.backgroundColor = '#c83cb9';
    document.querySelector('.number').style.width = '40rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== randomNum) {
    if (score > 1) {
      displayMessage(guess > randomNum ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😭 You Lose!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNum = Math.floor(Math.random() * 100 + 1);
  score = 20;
  console.log('click');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start Guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
});
