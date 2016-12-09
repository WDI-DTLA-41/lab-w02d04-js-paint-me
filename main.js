var red = document.querySelector('.red');
red.addEventListener('click', handleClickColor);
var green = document.querySelector('.green');
green.addEventListener('click', handleClickColor);
var blue = document.querySelector('.blue');
blue.addEventListener('click', handleClickColor);
var btnClear = document.querySelector('.btnClear');
btnClear.addEventListener('click', clear);
var btnNewGrid = document.querySelector('.btnNewGrid');


var userColor;

addListeners();

// function handles pick the color
function handleClickColor(evt){
  userColor = evt.target.getAttribute('color');
  evt.target.style.border = '5px solid black';
}
// function addsEventListener to all 'box'
function addListeners(){
  var boxes = document.querySelectorAll('.box');
  for(var i=0; i<boxes.length; i++){
    boxes[i].addEventListener('click', handleSetColor);
  }
}
// function handles set color to box
function handleSetColor(evt){
  evt.target.style.backgroundColor = userColor;
}
// function handles pick the square
function handleClickSquare(evt){
  evt.target.setAttribute('color', userColor);
}
// function clears the boxes
function clear(evt){
  var boxes = document.querySelectorAll('.box');
  for(var i=0; i<boxes.length; i++){
    boxes[i].style.backgroundColor = '';
  }
}
