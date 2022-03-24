'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(button => button.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Smooth Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to'); // class
const section1 = document.querySelector('#section--1'); // id
console.log(btnScrollTo);

btnScrollTo.addEventListener('click', function (e) {
  const s1Coords = section1.getBoundingClientRect();

  // Scrolling - old school way
  window.scrollTo({
    left: s1Coords.left + window.pageXOffset,
    top: s1Coords.top + window.pageYOffset,
    behavior: 'smooth'
  })

  // Scrolling - modern way
  section1.scrollIntoView({ behavior: 'smooth' })
});