console.log('hello');

// var red = document.querySelector('.colorRed');
var selectSquare = document.querySelector('.squares');
var holdColor;

// var addRed = function(event) {
//   event.target.classList.add('colorred')
//   console.log('clicked');
// };

// selectSquare.addEventListener('click', addRed);

var selectRed = document.querySelector('#red');
var selectBlue = document.querySelector('#blue');
var selectYellow = document.querySelector('#yellow');
var selectColors = document.querySelector('.colors');

// var getColor = function(event) {
//   if(event.target.)
// }
// var holdColor = function(){

  selectColors.addEventListener('click', function(evt){
    // console.log('click');
    // console.log(evt.target);
    // console.log(window.getComputedStyle( event.target , null).getPropertyValue('background-color'));
    holdColor = window.getComputedStyle(event.target , null).getPropertyValue('background-color');
    console.log(holdColor);
});


// }
