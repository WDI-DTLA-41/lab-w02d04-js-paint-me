console.log("hello.")

var currentColor;
// Select a color on the color picker
// when i select a color put a border around it
// document.querySelector('.color-selector').classList.add('selected-color')
var selectColor = function (event){
  console.log(event.target);
  console.log(event);
  //console.log(event);
  //event.target.classList.add('select-color');
  for (var i = 0; i < $colSelectors.children.length; i++){
    if ($colSelectors.children[i].classList.contains('active')){
      $colSelectors.children[i].classList.remove('active');
    };
  }
  event.target.classList.toggle('active');
  //event.target.style.border = "8px solid black";

  currentColor = event.target.style.backgroundColor;
//style.border = "8px solid black";
};

// Add Event Listener to color selector div for the color palette
$colSelectors = document.querySelector('.color-selectors')
$colSelectors.addEventListener('click', selectColor);


// Function for changing color
var applyColor = function (event) {
  console.log(event.target);
  console.log(event);
  event.target.style.backgroundColor = currentColor;

};

// Add Event Listener on divTable for changing color
$divTable = document.querySelector('.divTable');
$divTable.addEventListener('click', applyColor);



// Clear grid function
var clearGrid = function (){
  for (i = 0; i < $divTableCells.length; i++) {
    $divTableCells[i].style.backgroundColor = "white";
  };
};


// Clear Grid
$clrBtn = document.querySelector('.clearGrid');
// get all divTableCells
$divTableCells = document.querySelectorAll('.divTableCell');
//$test.style.backgroundColor = null;

// Add Event Listener to Button
$clrBtn.addEventListener('click', clearGrid);
