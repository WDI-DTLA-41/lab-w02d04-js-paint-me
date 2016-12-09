console.log("hello.")

// Contains currently selected color
var currentColor;

// Get all divTableCells
$divTableCells = document.querySelectorAll('.divTableCell');

// Get all color selectors
$colSelectors = document.querySelector('.color-selectors');

// Get Clear Button
$clrBtn = document.querySelector('.clearGrid');


// function for choosing color
var selectColor = function (event){
  console.log(event.target);
  console.log(event);
  for (var i = 0; i < $colSelectors.children.length; i++){
    if ($colSelectors.children[i].classList.contains('active')){
      $colSelectors.children[i].classList.remove('active');
    };
  }
  event.target.classList.toggle('active');
  currentColor = event.target.style.backgroundColor;
};

// Add Event Listener to color selector div for the color palette
$colSelectors.addEventListener('click', selectColor);


// Function for changing color
var applyColor = function (event) {
  console.log('target',event.target); // element clicked on
  console.log('currentTarget',event.currentTarget);
  event.target.style.backgroundColor = currentColor;

};

// Add Event Listener on divTable for changing color
// $divTable = document.querySelector('.divTable');
// $divTable.addEventListener('click', applyColor);




for (var i = 0; i < $divTableCells.length; i++){
  $divTableCells[i].addEventListener('click', applyColor);
};


// Clear Grid
// Clear grid function
var clearGrid = function (){
  for (i = 0; i < $divTableCells.length; i++) {
    $divTableCells[i].style.backgroundColor = "white";
  };
};

// Add Event Listener to Clear Button
$clrBtn.addEventListener('click', clearGrid);




//  height = 2
//  width = 3

// $divTableBody = document.querySelector('.divTableBody');
//  $divTableRow = document.querySelectorAll('.divTableRow');

//  var len = $divTableBody.childNodes.length;
//    while ($divTableBody.hasChildNodes())
//      {
//        $divTableBody.removeChild($divTableBody.firstChild);
//      }

//  // function for creation a div

//   for (var i = 0; i < width; i++){
//     tableRow = document.createElement('div');
//          tableRow.classList.add('divTableRow');
//      $divTableBody.appendChild(tableRow);
//      console.log('working');
//    };


//    for (var i = 0; i < $divTableRow.length; i++){
//      for (var c = 0; c < height; i++) {
//        tableCell = document.createElement('div');
//        tableCell.classList.add('divTableCell');
//        $divTableRow[i].appendChild(tableCell);
//      }
//    }
