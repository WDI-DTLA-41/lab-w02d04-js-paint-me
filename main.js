// USE BOOTSTRAP
var first = document.querySelector('.first-color');
var second = document.querySelector('.second-color');
var third = document.querySelector('.third-color');

var picker = document.querySelector('.picker')
var selected = document.querySelector('.selected');
var canvas = document.querySelector('.canvas');

var btnClr = document.querySelector('.clr-btn');
var btnNewGrid = document.querySelector('.newgrid-btn');



var handlePicker = function(e) {
  e.target.classList.toggle('selected');
  console.log('picker click');
  // while ()
}

var handleCanvas = function(e) {

  console.log('canvas click');
  if (first && first.classList.contains('selected')) {
    e.target.classList.toggle('first-color');
    console.log('first color selected');
  }
  if (second && second.classList.contains('selected')) {
    e.target.classList.toggle('second-color');
  }
  if (third && third.classList.contains('selected')) {
    e.target.classList.toggle('third-color');
  }

}
picker.addEventListener('click', handlePicker);
canvas.addEventListener('click', handleCanvas);
