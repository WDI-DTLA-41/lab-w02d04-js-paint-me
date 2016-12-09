console.log("Finger painting with the insane");

// set querySelectors
var tbody = document.querySelector('tbody');
var palleteContainer = document.querySelector('#pallete-container');
var gridContainer = document.querySelector('#grid-container');
var palleteGreen = document.querySelector('.pallete-green');
var palleteRed = document.querySelector('.pallete-red');
var palleteBlue = document.querySelector('.pallete-blue');

var buttonClass

// create a function to create Grid Table
// var createTable = function() {
  for(var i = 0; i < 3; i++) {
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tbody.appendChild(tr);
  }


// createTable();


var handleColorGrid = function(event) {
  console.log(event.target.classList);
  console.log(buttonClass);
  if (buttonClass === palleteGreen.classList) {
    event.target.classList.toggle('green');
  } else if (buttonClass === palleteRed.classList) {
    event.target.classList.toggle('red');
  } else {
    event.target.classList.toggle('blue');
  }
}

var handleColorTag = function(event) {
  console.log(event.target.classList);
  buttonClass = event.target.classList;
  gridContainer.addEventListener('click', handleColorGrid);
}


// event listener for clicks
palleteContainer.addEventListener('click',handleColorTag);

