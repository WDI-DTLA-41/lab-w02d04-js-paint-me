console.log('hah')

var clearButton = document.querySelector('.clearButton');
var gridWrapper = document.querySelector('.canvas-wrapper');
var selectors = document.querySelector('.colors');
var redBrush = document.querySelector('#red');
var blueBrush = document.querySelector('#blue');
var yellowBrush = document.querySelector('#yellow');
var currentColor;

//select color function
var selectColor = function(event) {
  if (event.target.classList.contains('brush-color')){
    //remove and add classlist
    clearClass();
    //get color of click
    getColor();
    //add color to grid
  };
};

selectors.addEventListener('click', selectColor)

//add color to grid
var addColor = function(event) {
  event.target.style.backgroundColor = currentColor;
  // console.log('hah')
}

gridWrapper.addEventListener('click', addColor)

var clearColors = function(event){
  // gridWrapper.children.style.backgroundColor = 'rgba(0,0,0)';
  for (i = 0; i < gridWrapper.children.length; i++) {
    gridWrapper.children[i].setAttribute('style', 'rgb(0,0,0)')
  }
}


clearButton.addEventListener('click', clearColors);


//Invoked Functions
var clearClass = function() {
  redBrush.classList.remove('clicked');
  blueBrush.classList.remove('clicked');
  yellowBrush.classList.remove('clicked');
  event.target.classList.add('clicked');
}

var getColor = function() {
  currentColor = window.getComputedStyle( event.target ,null).getPropertyValue('background-color');
  console.log(currentColor);
}


