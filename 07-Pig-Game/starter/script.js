'use strict';

// Selecting elements
const playerElement0 = document.querySelector('.player--0');
const playerElement1 = document.querySelector('.player--1');
const scoreElement0 = document.getElementById('score--0');
const scoreElement1 = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  current0El.textContent = 0;
  current1El.textContent = 0;
  scoreElement0.textContent = 0;
  scoreElement1.textContent = 0;

  diceElement.classList.add('hidden');
  playerElement0.classList.remove('player--winner');
  playerElement1.classList.remove('player--winner');
  playerElement0.classList.add('player--active');
  playerElement1.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerElement0.classList.toggle('player--active');
  playerElement1.classList.toggle('player--active');
};

btnNew.addEventListener('click', init);

// Rolling the dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);

    // Display dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    // Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});
