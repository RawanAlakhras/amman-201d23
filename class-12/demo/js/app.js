// Created by: Waleed A. Afifi
// Email: waleed-afifi@windowslive.com
// GitHub: https://github.com/waleedafifi90
// LinkedIn: https://www.linkedin.com/in/walafifi/

'use strict';

let goatArray = [
  'cruisin-goat',
  'float-your-goat',
  'goat-out-of-hand',
  'kissing-goat',
  'sassy-goat',
  'smiling-goat',
  'sweater-goat'
];

const imageSection = document.getElementById( 'imageSection' );
const leftImage = document.getElementById( 'leftImage' );
const rightImage = document.getElementById( 'rightImage' );

let leftGoatIndex = 0;
let rightGoatIndex = 0;
const clickCounter = 15;

function Goat( name ) {
  this.name = name;
  this.image = `./img/${name}.jpg`;
  this.clicks = 0;
  this.shown = 0;
  Goat.all.push( this );
}

Goat.all = [];
Goat.counter = 0;

for( let i = 0; i < goatArray.length; i++ ) {
  new Goat( goatArray[i] );
}

function renderNewGoat() {
  let leftIndex = randomNumber( 0, Goat.all.length - 1 );
  leftImage.src = Goat.all[leftIndex].image;
  leftImage.alt = Goat.all[leftIndex].name;
  leftGoatIndex = leftIndex;

  let rightIndex;
  do {
    rightIndex = randomNumber( 0, Goat.all.length - 1 );
  } while( leftIndex == rightIndex );

  rightImage.src = Goat.all[rightIndex].image;
  rightImage.alt = Goat.all[rightIndex].name;
  rightGoatIndex = rightIndex;

  Goat.all[leftIndex].shown++;
  Goat.all[rightIndex].shown++;


  // rightImage.src = Goat.all[0].image;
}

function handelClick( event ) {

  if( Goat.counter <= clickCounter ) {
    const clickedElement = event.target;
    if( clickedElement.id == 'leftImage' || clickedElement.id == 'rightImage' ) {
      if( clickedElement.id == 'leftImage' ) {
        Goat.all[leftGoatIndex].clicks++;
      }

      if( clickedElement.id == 'rightImage' ) {
        Goat.all[rightGoatIndex].clicks++;
      }

      Goat.counter++;
      renderNewGoat();

      console.log( Goat.all );
    }
  } else {
    renderChart();
  }
}

imageSection.addEventListener( 'click', handelClick );

console.log( Goat.all );

// Helper function
function randomNumber( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

renderNewGoat();

function renderChart() {

  let nameArray = [];
  let clicksArray = [];

  for(let i = 0; i < Goat.all.length; i++) {
    nameArray.push(Goat.all[i].name);
    clicksArray.push(Goat.all[i].clicks);

  }

  let ctx = document.getElementById( 'myChart' ).getContext( '2d' );
  new Chart( ctx, {
    type: 'bar',
    data: {
      labels: nameArray,
      datasets: [
        {
          label: '# of Votes',
          data: clicksArray,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 3
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  } );
}

