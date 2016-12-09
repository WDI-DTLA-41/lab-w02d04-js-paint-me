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

var createGrid = function(event) {
  var totalDivs = $width.value * $height.value;
  var gridWidth = ($width.value * 200) + ($width.value * 2);
  console.log(gridWidth)
  $grid.innerHTML = '';
  for (var i =0; i<totalDivs; i++) {
    $grid.innerHTML += '<div class="cell"></div>';
  }
  $grid.style.width = gridWidth + 'px';
}

$create.addEventListener('click', createGrid);
$selectors.addEventListener('click', selectColor);
$grid.addEventListener('mouseover', changeColor);
$clear.addEventListener('click', clear);



