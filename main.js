console.log('hello');
// Three Color Boxes
var boxRed = document.getElementById('option-red');
var boxBlue = document.getElementById('option-blue');
var boxYellow = document.getElementById('option-yellow');
// Each Box After Toggle
var selectRed;
var selectBlue;
var selectYellow;

// Change Color of Grid Box
var optionRed = function() {
  target.setAttribute('class', 'option-red');
}
// Change Color of Grid Box
var optionBlue = function() {
  target.setAttribute('class', 'option-blue');
}
// Change Color of Grid Box
var optionYellow = function() {
  target.setAttribute('class', 'option-yellow');
}

// Clicking The Color Selection Box
boxRed.addEventListener('toggle', optionRed);
boxBlue.addEventListener('toggle', optionBlue);
boxYellow.addEventListener('toggle', optionYellow);




// // Color a box
// event.addEventListener('toggle', dyeRed);
// event.addEventListener('toggle', dyeBlue);
// event.addEventListener('toggle', dyeYellow);
// Change Color of Grid Box
// var dyeRed = function() {
//   target.setAttribute('class', 'sometimes-red');
// }
// // Change Color of Grid Box
// var dyeBlue = function() {
//   target.setAttribute('class', 'sometimes-blue');
// }
// // Change Color of Grid Box
// var dyeYellow = function() {
//   target.setAttribute('class', 'sometimes-yellow');
// }

// var availableColors = [];
// for (var i = 1; i < 3; i++) {
//   availableColors.push("rgb(" + i * 100 + ", 50, 100)");
//   availableColors.push("rgb(100," + i * 100 + ", 50)")
//   availableColors.push("rgb(100, 50," + i * 100 + ")")
// }

// document.querySelector('div').innerHTML = availableColors;

// function setColor() {
//   var oldColor = this.style.color;
//   var newColor = availableColors.splice(0, 1);
//   this.style.color = newColor;
//   availableColors.push(oldColor);
//   document.querySelector('div').innerHTML = availableColors;
// }

// var items = document.querySelectorAll('td');

// for (var i = 0; i < 3; i++) {
//   items[i].addEventListener("click", setColor);
// }



