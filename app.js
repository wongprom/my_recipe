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
const decreaseAmount = () => {
  const currentPieces = parseInt(piecesElement.textContent);
  piecesElement.textContent = currentPieces - 1 + ' pieces';
};

const increaseAmount = () => {
  const currentPieces = parseInt(piecesElement.textContent);
  piecesElement.textContent = currentPieces + 1 + ' pieces';
};

// Event Listners
increaseElement.addEventListener('click', increaseAmount);
decreaseElement.addEventListener('click', decreaseAmount);
