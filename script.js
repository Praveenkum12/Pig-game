'use strict';

const btnroll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const firstPlayer = document.querySelector('.player--0');
const secondPlayer = document.querySelector('.player--1');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
dice.classList.add('hidden');
let score = [0, 0];

btnroll.addEventListener('click', function () {
  const randomNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(randomNumber);
  dice.classList.remove('hidden');
  dice.src = `dice-${randomNumber}.png`;

  if (randomNumber !== 1) {
    currentScore += randomNumber;
    // current0El.textContent = currentScore;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer !== 0 ? 0 : 1;
    firstPlayer.classList.toggle('player--active');
    secondPlayer.classList.toggle('player--active');
    currentScore = 0;
  }
});

btnHold.addEventListener('click', function () {
  score[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    score[activePlayer];
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  if (score[activePlayer] >= 100) {
    document.querySelector(`#score--${activePlayer}`).textContent =
      '💥 You win 💥';
    document.querySelector(`#score--${activePlayer}`).style.marginTop = '30px';
    document.querySelector(`#score--${activePlayer}`).style.fontSize = '4rem';
    btnHold.disabled = true;
    btnroll.disabled = true;
  } else {
    currentScore = 0;
    activePlayer = activePlayer !== 0 ? 0 : 1;
    firstPlayer.classList.toggle('player--active');
    secondPlayer.classList.toggle('player--active');
  }
});

btnNew.addEventListener('click', function () {
  score = [0, 0];
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  activePlayer = 0;
  firstPlayer.classList.add('player--active');
  secondPlayer.classList.remove('player--active');
  dice.classList.add('hidden');
});
