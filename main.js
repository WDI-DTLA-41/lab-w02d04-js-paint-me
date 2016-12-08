console.log('hello')

var paints = document.querySelector('.paints');
var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var yellow = document.querySelector(".yellow");
red.value = 1;
blue.value = 2;
yellow.value = 3;
var color;
var td = document.querySelector('td');
var table = document.querySelector('table');




//function to save color value of what you clicked on
var handleClick = function (event) {
  console.log('clicked on grid', event.target)
  event.target.style = "background: red";
}

//function that saves what color you clicked on
//uses event.target is input to figure out, returns number
//that represents a color to var color
var whatColor = function (event) {
  if (event.target.value == 1)
  console.log('you clicked on red')
  else if (event.target.value == 2)
    console.log('you clicked on blue')
  else if (event.target.value == 3)
    console.log('you clicked on yellow')
  color = event.target.value;
  return color;
}

//event listeners!
paints.addEventListener('click', whatColor);
table.addEventListener('click', handleClick);
