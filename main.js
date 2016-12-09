var color = "";

var $clear = document.querySelector('#clear');

// select all color seletors and store in variable
var $selectors = document.querySelector('#color-selectors');

// select each colored box and store in variable
var $red = document.querySelector('red');
var $blue = document.querySelector('blue');
var $yellow = document.querySelector('yellow');

// select grid container and store in variable
var $grid = document.querySelector('#grid');

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
    event.target.style.backgroundColor = "yello";
  }
  console.log(event.target.style.backgroundColor);
}

var clear = function(event) {
  for (var i=0; i<$grid.children.length; i++) {
    $grid.children[i].style.backgroundColor = "white";
  }
}

$selectors.addEventListener('click', selectColor);
$grid.addEventListener('click', changeColor);
$clear.addEventListener('click', clear);


