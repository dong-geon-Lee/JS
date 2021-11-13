'use strict';

// todo 1단계
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// todo 2단계
// const valueX = () => {
//   const result = Number(document.querySelector('.guess').value);

//   console.log(`value: ${result}`);
//   console.log(`type: ${typeof result}`);
// };

// const checkX = () => {
//   const check = Number(document.querySelector('.guess').value);

//   if (!check) {
//     document.querySelector('.message').textContent = ' 💄 No number!';
//     console.log(
//       (document.querySelector('.message').textContent = ' 💄 No number!')
//     );
//   } else {
//     document.querySelector('.message').textContent = ' 🦩 Valid number!';
//     console.log(
//       (document.querySelector('.message').textContent = ' 🦩 Valid number!')
//     );
//   }
// };

// document.querySelector('.check').addEventListener('click', checkX);

// todo 3단계
// let secretNumber = Math.trunc(Math.random() * 10) + 1;
// let score = 20;
// let highscore = 0;

// const displayMessage = message => {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', () => {
//   const guess = Number(document.querySelector('.guess').value);

//   if (!guess) {
//     displayMessage('🦢 No, Number!');
//   } else if (guess === secretNumber) {
//     displayMessage('🐝 Correct Number!');
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('.score').textContent = score;

//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//   } else if (guess !== secretNumber) {
//     displayMessage(guess > secretNumber ? '🦎 Too high!' : '🦂 Too Low!');

//     document.querySelector('.score').textContent = --score;

//     if (score < 0) {
//       displayMessage('🎇 You game over!');
//     }
//   }

//   console.log(guess);
// });

// document.querySelector('.again').addEventListener('click', () => {
//   displayMessage('Start guessing...');
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.score').textContent = 20;
// });
