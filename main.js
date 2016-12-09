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
var tr = document.querySelector('tr');
var table = document.querySelector('table');
var tbody = document.querySelector('tbody');
var clearbutton = document.querySelector('.clear');
var newbutton = document.querySelector('.newGrid');
var body = document.body;
var tdAll = document.querySelectorAll('td');
var tbody = document.querySelector('tbody');
  var newTbody = document.createElement('tbody');
  var newTr = document.createElement('tr');
  var newTd = document.createElement('td');
  var newTable = document.createElement('table');


//function to save color value of what you clicked on
var handleClick = function (event) {
  //click on new grid makes new grid
  if (event.target.classList.contains('newGrid') == true) {
    newGrid();
  }

  //clear function changes grid back to white
  if (event.target.classList.contains('clear') == true) {
    for (var i = 0; i < tdAll.length; i++) {
    // console.log('you clicked button');
    tdAll[i].style = "background: white";}
  }

  // console.log('clicked on grid', event.target)
  if (event.target == table || event.target == clearbutton || event.target == newbutton || event.target == body) return false;
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

//clear grid function


//New Grid function
//takes in parameters height, width

var newGrid = function(height, width) {
  tbody.innerHTML = " ";
  newTable;
  newTbody;
  newTr;
  newTd;
  newTr.innerHTML="<tr></tr>";
  newTd.innerHTMl="<td></td>";
  document.body.appendChild(table);
  // newTbody.appendChild(newTable);
  tbody.appendChild(newTr);
  newTr.appendChild(newTd);
}

//event listeners!
paints.addEventListener('click', whatColor);
body.addEventListener('click', handleClick);
// newbutton.addEventListener('click', newGrid);
