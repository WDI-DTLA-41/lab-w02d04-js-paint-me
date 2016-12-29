var $palette = document.querySelector('.palette');
var $canvas = document.querySelector('.canvas');
var $colors = document.querySelectorAll('.color');
var $clearBtn = document.querySelector('#clear-canvas');
var $newGridBtn = document.querySelector('#new-grid');
var $createGridBtn = document.querySelector('#create-grid');
var $inputHeight = document.querySelector('input[name=height]');
var $inputWidth = document.querySelector('input[name=width]');
var $gridControls = document.querySelector('#grid-controls');

var currentColor = null;

var getColor = function(evt) {
  var node = evt.target.closest('.color');
  removeActive();
  node.classList.add('active');
  var style = window.getComputedStyle(node);
  currentColor = style.backgroundColor;
};

var getHeightAndWidth = function() {
  return {
    height: parseInt($inputHeight.value),
    width: parseInt($inputWidth.value)
  }
}

var renderGrid = function(grid) {
  var html = '';
  for (var i = 0; i < grid.height; i++) {
    html += '<div class="row">'
    for (var j = 0; j < grid.width; j++) {
      html += '<div class="square"></div>'
    }
    html += '</div>'
  }
  return html;
}

var removeActive = function(){
  $colors.forEach(function(color){
    color.classList.remove('active');
  })
}

var setColor = function(evt) {
  var square = evt.target.closest('.square');
  square.style.backgroundColor = currentColor;
};

var clearCanvas = function(evt) {
  var squares = document.querySelectorAll('.square');
  squares.forEach(function(square){
    square.style.backgroundColor = '';
  })
};

var createGrid = function(evt) {
  evt.preventDefault();
  var grid = getHeightAndWidth();
  var html = renderGrid(grid);
  $canvas.innerHTML = html;
  toggleGridControls();
}

var toggleGridControls = function(){
  $gridControls.classList.toggle('hide');
}

$palette.addEventListener('click', getColor);
$canvas.addEventListener('click', setColor);
$clearBtn.addEventListener('click', clearCanvas);
$newGridBtn.addEventListener('click', toggleGridControls);
$createGridBtn.addEventListener('click', createGrid);
