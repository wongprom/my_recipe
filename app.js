let data = [];

// Load init values
window.addEventListener('DOMContentLoaded', async () => {
  console.log('JS is loaded');
  const response = await fetch('data.json');
  data = await response.json();
  loadEvent();
});

const loadEvent = () => {
  piecesElement.textContent = data.pieces + ' pieces';
};

// DOM Elements
const amountsElement = document.querySelector('.amount');
const decreaseElement = amountsElement.querySelector('.decrease');
const increaseElement = amountsElement.querySelector('.increase');
const piecesElement = amountsElement.querySelector('.pieces');

// Functions
const changeAmount = (event) => {
  if (event.target.closest('.decrease')) {
    updateAmount(-1);
  } else if (event.target.closest('.increase')) {
    updateAmount(1);
  }
};

const updateAmount = (num) => {
  const currentPieces = parseInt(piecesElement.textContent);
  if (currentPieces <= 0) return;
  piecesElement.textContent = currentPieces + num + ' pieces';
};

// Event Listners
amountsElement.addEventListener('click', changeAmount);
