var red = document.querySelector('.red');
red.addEventListener('click', handleClickColor);
var green = document.querySelector('.green');
green.addEventListener('click', handleClickColor);
var blue = document.querySelector('.blue');
blue.addEventListener('click', handleClickColor);
var btnClear = document.querySelector('.btnClear');
btnClear.addEventListener('click', clear);
var btnNewGrid = document.querySelector('.btnNewGrid');
btnNewGrid.addEventListener('click', createGrid());

var userColor;
var boxes = document.querySelectorAll('.box');
addListeners(boxes);

// function handles pick the color
function handleClickColor(evt){
  userColor = evt.target.getAttribute('color');
  evt.target.style.border = '5px solid black';
}
// function addsEventListener to all 'box'
function addListeners(arrayBoxes){
  //var boxes = document.querySelectorAll('.box');
  for(var i=0; i<arrayBoxes.length; i++){
    arrayBoxes[i].addEventListener('click', handleSetColor);
  }
  return arrayBoxes;
}
// function handles set color to box
function handleSetColor(evt){
  evt.target.style.backgroundColor = userColor;
}
// function clears the boxes
function clear(evt){
  var boxes = document.querySelectorAll('.box');
  for(var i=0; i<boxes.length; i++){
    boxes[i].style.backgroundColor = '';
  }
}
function createGrid(){
  var inputRows = document.createElement('input');
  var inputBoxes = document.createElement('input');
  var btnCreate = document.createElement('button');
  inputRows.setAttribute('placeholder', 'Enter Height');
  inputBoxes.setAttribute('placeholder', 'Enter Width');
  btnCreate.textContent = 'Create';
  document.querySelector('.buttons').appendChild(inputRows);
  document.querySelector('.buttons').appendChild(inputBoxes);
  document.querySelector('.buttons').appendChild(btnCreate);


  btnCreate.addEventListener('click', getValues());

}
function getValues(){
  var inputRowsValue = inputRows.value;
  var inputBoxesValue = inputBoxes.value;
}
// function handles pick the square
// function handleClickSquare(evt){
//   evt.target.setAttribute('color', userColor);
// }
