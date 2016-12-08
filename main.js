console.log("hello.")

var currentColor;
// Select a color on the color picker
// when i select a color put a border around it
// document.querySelector('.color-selector').classList.add('selected-color')
var selectColor = function (event){
  console.log(event.target);
  console.log(event);
  //console.log(event);
  //event.target.classList.add('select-color');
  event.target.classList.toggle('select-color');
  currentColor = event.target.classList[0];

};

// Add Event Listener to color selector div for the color palette
$colSelectors = document.querySelector('.color-selectors')
$colSelectors.addEventListener('click', selectColor);


// Function for changing color
var applyColor = function (event) {
  console.log(event.target);
  event.target.classList.toggle(currentColor);

};

// Add Event Listener on divTable for changing color
$divTable = document.querySelector('.divTable');
$divTable.addEventListener('click', applyColor);
