var swatch = document.querySelector('.swatch');
var grid = document.querySelector('.grid');


var selectColor = function(){
  storeColor = event.target.classList;
  console.log(storeColor);
};
swatch.addEventListener('click', selectColor);


var colorGrid = function(){
  // add or toggle
  var changeColor = event.target.classList.toggle(storeColor);
  console.log(changeColor);
}

grid.addEventListener('click', colorGrid);






var button = document.querySelector('.clear');



// click on one color
// consolelog value of that color
// save that color to that variable
// change class of grid to that variable
