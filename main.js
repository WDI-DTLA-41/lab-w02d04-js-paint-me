console.log("see me?");

// variables
var colorOrange = document.querySelector('#orangeBox');
var colorGreen = document.querySelector('#greenBox');
var colorBlue = document.querySelector('#blueBox');
var header = document.querySelector('header');
var grid = document.querySelector('#grid');
var container = document.querySelector('#container');
var btnClear = document.querySelector('#clear');



// create grid
var createGrid = function() {
  for (var col = 0; col < 3; col++) {
    var tr = document.createElement('tr');
    grid.appendChild(tr);
    for (var row = 0; row < 4; row++) {
      var td = document.createElement('td');
      tr.appendChild(td);
    }
  }
}

// colored boxes
var selectColor = function() {
  if (event.target.id === 'orangeBox') {
    grid.addEventListener('click',function() {
      event.target.setAttribute('id','orangeBox');
    });
  }
  if (event.target.id === 'greenBox') {
    grid.addEventListener('click',function() {
      event.target.setAttribute('id','greenBox');
    });
  }
  if (event.target.id === 'blueBox') {
    grid.addEventListener('click',function() {
      event.target.setAttribute('id','blueBox');
    });
  }
}

var clearGrid = function() {
  if(event.target.id === 'clear') {
    for(var num = 0; num < tdList.length; num++) {
      tdList[num].setAttribute('id','');
    }
  }
}



// event listeners
header.addEventListener('click',selectColor);
btnClear.addEventListener('click',clearGrid);
createGrid();
var tdList = document.querySelectorAll('td');




