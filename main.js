// SAVE USER'S COLOR SELECTION

var palette = document.querySelector('.palette');
var selectedColor;
var handleSelectedColor = function(event){
  selectedColor = event.target.classList[0];
}

palette.addEventListener('click', handleSelectedColor);



// COLOR GRID TD'S ACCORDING TO COLOR SELECTION

var grid = document.querySelector('#grid');
var handleGridClick = function(event){
  var colorTheGrid = event.target.classList;
  if (colorTheGrid.length > 0) {
    colorTheGrid.remove(colorTheGrid);
  }
  colorTheGrid.add(selectedColor);
}

grid.addEventListener('click', handleGridClick);



// 'CLEAR' BUTTON

var clearButton = document.querySelector('#clear');
var gridTD = grid.querySelectorAll('td')
var handleClear = function(event){
  var i = 0;
  while(i<gridTD.length){
    if (gridTD[i].classList.length>0){
      gridTD[i].classList.remove(gridTD[i].classList);
    }
    i++;
  };
}

clearButton.addEventListener('click', handleClear);



// 'LINE-DRAW' MODE

var lineModeButton = document.querySelector('#lineMode');
// toggle line drawing class
var lineModeToggle = function(event){

}

var lineMode = function(event){
  event.target.classList.add(selectedColor);
};



lineModeButton.addEventListener('click', )


