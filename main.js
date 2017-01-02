var swatch = document.querySelector('.swatch');
var grid = document.querySelector('.grid');
var button = document.querySelector('.clear');
<<<<<<< HEAD

=======
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var color3 = document.querySelector('.color3');
var cell1 = document.querySelectorAll('.cell1');

// function clickColor(){
//   if (color1.clicked == true) {
//   cell1.addClassList('.color1');
//   }
// };

// color1.addEventListener('click', clickColor);






// // console.log(td);
>>>>>>> 7b2c09609c0e1a87fa4a411fa19a0c7cec4c746d


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

<<<<<<< HEAD
grid.addEventListener('click', colorGrid);
=======
// function handleClick(){
//   var color2 = getValues();
//   var storeColor = color2;
//   this.classList.toggle(".color2")
// }

// button.addEventListener('click', handleClick);
>>>>>>> 7b2c09609c0e1a87fa4a411fa19a0c7cec4c746d




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
