let data = [];

window.addEventListener('DOMContentLoaded', async () => {
  console.log('JS is loaded');
  const response = await fetch('data.json');
  data = await response.json();
  loadEvent();
});

const loadEvent = () => {
  console.log(data.pieces);
  piecesElement.textContent = data.pieces + ' pieces';
};

// DOM Elements
const amountsElement = document.querySelector('.amount');
const decreaseElement = amountsElement.querySelector('.decrease');
const increaseElement = amountsElement.querySelector('.increase');
const piecesElement = amountsElement.querySelector('.pieces');
