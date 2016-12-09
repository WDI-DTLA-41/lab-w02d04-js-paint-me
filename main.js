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
var button = document.querySelector('button');
var body = document.body;




//function to save color value of what you clicked on
var handleClick = function (event) {
  if (event.target == button) console.log('you clicked button');
  console.log('clicked on grid', event.target)
  if (event.target == table || event.target == button || event.target == body) return false;
    else {
      if (color == 1) event.target.style = "background: red";
      else if (color == 2) event.target.style = "background: blue";
      else if (color == 3) event.target.style = "background: yellow";
    }
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

//clear function changes grid back to white

//event listeners!
paints.addEventListener('click', whatColor);
body.addEventListener('click', handleClick);
