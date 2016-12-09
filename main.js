var redBox = document.querySelector('.redBox');
var blueBox = document.querySelector('.blueBox');
var yellowBox = document.querySelector('.yellowBox');
var changeColor = document.querySelectorAll('.grid')

var selectedColor = null;

var pickAColor = function(evt){
  console.log('clicked');
  selectedColor =  evt.target.style.backgroundColor;
}

var newColor = function(evt){
  console.log('clicked');
  evt.target.style.backgroundColor = selectedColor;
  };

redBox.addEventListener('click', pickAColor);

blueBox.addEventListener('click', pickAColor);

yellowBox.addEventListener('click', pickAColor);

for (var i = 0; i < changeColor.length; i++) {
  changeColor[i].addEventListener('click', newColor);
}

