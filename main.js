
// console.log('ODoyle rules');

// var colors = document.querySelector('.boxes');

// colors.addEventListener('mouseenter' function(event){

// })


// detect click event on top boxes - know which was clicked\
 var red = document.querySelector("#red");

 var blue = document.querySelector("#blue");
 var yellow = document.querySelector("#yellow");

 var allSquares = document.querySelectorAll(".square");
 var lastDiv = null;
 var clear = document.querySelector('#clear');

var handleClick = function(color, object) {
  lastDiv = object;

    // document.getElementById()
    // alert('box click ' + color);
}
// copy color from box last clicked- with color
var handleCopy = function(item) {
  item.style.backgroundColor = window.getComputedStyle(lastDiv).backgroundColor;
  // alert(lastDiv.style.backgroundColor);
}

var clearGrid = function() {
  for(var i = 0; i < allSquares.length; i++) {
    allSquares[i].style.backgroundColor = "white";
  }

}

 red.addEventListener('click', function(){
    handleClick("red", red);
    var style = window.getComputedStyle(red);
   console.log (style.backgroundColor);
 });

 blue.addEventListener('click', function(){
    handleClick("blue", blue);
 });
 yellow.addEventListener('click', function(){
    handleClick("yellow", yellow);
 });

allSquares.forEach(square => square.addEventListener('click', function(){
  console.log('clciked');
  handleCopy(this)
}));

clear.addEventListener('click', clearGrid);

// detect click in the grid - position as well as just clicking


// copying CSS attr's from top to grid

// use mouseover to highlight confirm selection

// clear the gird of all colors






