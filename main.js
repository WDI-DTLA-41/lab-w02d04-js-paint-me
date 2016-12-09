console.log("Finger painting with the insane");


// set querySelectors
var tbody = document.querySelector('tbody');
var palleteContainer = document.querySelector('#pallete-container');
var gridContainer = document.querySelector('#grid-container');
var palleteGreen = document.querySelector('.pallete-green');
var palleteRed = document.querySelector('.pallete-red');
var palleteBlue = document.querySelector('.pallete-blue');
var palleteClear = document.querySelectorAll('.clear');
var buttonClass = null;
var buttonContainer = document.querySelector('#button-container');
var inputWidthClass = document.querySelector('.Width');
var inputHeightClass = document.querySelector('.Height');
var newGridClass = document.querySelector('.new-grid');
var tr = null;

// create a function to create Grid Table
var createTable = function() {
  for(var i = 0; i < 3; i++) {
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tbody.appendChild(tr);
  }
}

// create the default grid
createTable();

// create TD with input value
var handleInputWidth = function() {
  for(var i = 0; i < inputWidth.value; i++) {
    var inputTd = document.createElement('td');
    tr.appendChild(inputTd);
  }
}

// create TR with input value
var handleInputHeight = function() {
  for(var i = 0; i < inputHeight.value; i++) {
    var inputTr = document.createElement('tr');
    tbody.appendChild(inputTr);
  }
};


// take value of the input fields
  var inputWidth = document.createElement('input');
  var inputHeight = document.createElement('input');
  inputWidth.type = 'number';
  inputHeight.type = 'number';
  inputWidth.setAttribute('placeholder','Width');
  inputHeight.setAttribute('placeholder', 'Height');
  inputWidth.setAttribute('class', 'Width');
  inputHeight.setAttribute('class', 'Height');
  buttonContainer.appendChild(inputWidth);
  buttonContainer.appendChild(inputHeight);




// create handle to color the grid
var handleColorGrid = function(event) {
  if (buttonClass === palleteGreen.classList) {
    event.target.classList = '';
    event.target.classList.toggle('green');
  } else if (buttonClass === palleteRed.classList) {
    event.target.classList = '';
    event.target.classList.toggle('red');
  } else if (buttonClass === palleteBlue.classList) {
    event.target.classList = '';
    event.target.classList.toggle('blue');
  } else {
    event.target.classList = '';
  }
};



var handleColorTag = function(event) {
  buttonClass = event.target.classList;
  gridContainer.addEventListener('click', handleColorGrid);
}



var handleClearGrid = function(event) {
  event.stopPropagation();
  var tdAll = document.querySelectorAll('td');
   for(var i = 0; i < tdAll.length; i++) {
      tdAll[i].classList = '';
  }
}


var handleNewGrid = function() {
 tbody.innerHTML = '';
  handleInputHeight();
  handleInputWidth();

}







// event listener for clicks
palleteContainer.addEventListener('click',handleColorTag);
buttonContainer.addEventListener('click',handleClearGrid);
newGridClass.addEventListener('click',handleNewGrid);
