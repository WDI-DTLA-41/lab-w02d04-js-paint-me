var color = "";
var $clear = document.querySelector('#clear');
var $selectors = document.querySelector('#color-selectors');
var $grid = document.querySelector('#grid');
var $create = document.querySelector('#create-grid');
var $width = document.querySelector('#width-input');
var $height = document.querySelector('#height-input');

var selectColor = function(event) {
  if (event.target.classList.contains('color')) {
    for (var i=0; i<event.currentTarget.children.length; i++) {
    event.currentTarget.children[i].classList.remove('color-selected');
    }
    event.target.classList.toggle('color-selected');
  }
  color = event.target.id;
}

var changeColor = function(event) {
  if (color === "red") {
    event.target.style.backgroundColor = "red";
  }  if (color === "blue") {
    event.target.style.backgroundColor = "blue";
  }  if (color === "yellow") {
    event.target.style.backgroundColor = "yellow";
  }
}

var clear = function(event) {
  for (var i=0; i<$grid.children.length; i++) {
    $grid.children[i].style.backgroundColor = "white";
  }
}

// get width of cell from CSS stylesheet
var cell = document.querySelector('.cell');
var cellStyles = window.getComputedStyle(cell);
var cellWidthValue = cellStyles.getPropertyValue('width'); // 200px
//get substring from 0 to P using indexOf to return 200
var cellWidth = cellWidthValue.substring(0, cellWidthValue.indexOf('p'));
console.log(cellWidth)

var createGrid = function(event) {
  var totalDivs = $width.value * $height.value;
  var gridWidth = ($width.value * cellWidth) + (parseInt($width.value));
  console.log(gridWidth)
  $grid.innerHTML = '';
  for (var i =0; i<totalDivs; i++) {
    $grid.innerHTML += '<div class="cell"></div>';
  }
  $grid.style.width = gridWidth + 'px';
}

$create.addEventListener('click', createGrid);
$selectors.addEventListener('click', selectColor);
$grid.addEventListener('click', changeColor);
$clear.addEventListener('click', clear);





