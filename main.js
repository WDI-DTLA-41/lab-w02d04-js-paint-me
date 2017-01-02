var swatch = document.querySelector('.swatch');
var grid = document.querySelector('.grid');
var button = document.querySelector('.clear');



// =========================
// SELECT COLOR
// =========================
var selectColor = function(){
  storeColor = event.target.classList;
  console.log(storeColor);
};
swatch.addEventListener('click', selectColor);




// =========================
// ADD COLOR TO GRID
// =========================
var colorGrid = function(){
  // add or toggle
  var changeColor = event.target.classList.add(storeColor);
  console.log(changeColor);
};

grid.addEventListener('click', colorGrid);




// =========================
// CLEAR GRID
// =========================
function clear() {
  console.log('click');
    location.reload();
}

button.addEventListener('click', clear);



// =========================
// PSEUDO CODE
// =========================

// click on one color
// consolelog value of that color
// save that color to that variable
// change class of grid to that variable
