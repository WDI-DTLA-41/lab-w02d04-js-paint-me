console.log('hello');

// 1. create palette of 3 boxes with colored backgrounds (red, blue, yellow)
var redBox = document.querySelector('td[name="red"]');
// var blueBox = document.querySelector('#blue');
// var yellowBox = document.querySelector('#yellow');
redBox.style.backgroundColor = "red";
// blueBox.style.backgroundColor = "blue";
// yellowBox.style.backgroundColor = "yellow";

// 2. create a canvas of 12 boxes with white background
var whiteBox = document.querySelector('#white');
whiteBox.style.backgroundColor = "white";


var colors = ["red", "blue", "yellow"]; // delcare an array to contain four colors for each playable box
var boxesInPlay = []; // declares an empty array that gets populated as boxes are picked

// 3. when a user clicks on 1 of 3 colored boxes,
//   the next box he clicks on will then be assigned
//   that same color.
//     -- when a box in the grid is paired with
//     a colored box, its color property is then
//     assigned to its match
// var handleClick = function (evt) {
//   var paintBrush ();
// }

var getColors = function (){
  return {                    // returns output as objects
    name: redBox.value,
    backgroundColor: "red"
  }
}




// boxes

whiteBox.addEventListener('click', changeColor); // when a blankBox is clicked, isTwoCards will run

// changes box color
var changeColor = function () {
  document.querySelector('.box').style.background = color;
// runs through color array and reassigns new color to blank
// boxes depending on whether condition is met
    for (var i = 0; i < colors.length; i ++) {
      if (i % 2 === true && i % 1 === true) {
        whiteBox.style.backgroundColor = "yellow";
      } else if (i % 1 === true) {
        whiteBox.style.backgroundColor = "blue";
      } else
        whiteBox.style.backgroundColor = "red";
    }
};

// save later for assigning color to white boxes
whiteBox.style.backgroundColor = "red";
whiteBox.style.backgroundColor = "blue";
whiteBox.style.backgroundColor = "yellow";


// // 4. create a clear button
// var btn = document.querySelector('button');
// // 5. when clicked, the clear button resets or 'clears'
// //   the color property of all grid boxes

// Checks to see if two boxes are in play or 'clicked'
// var isTwoBoxes = function() {
//   boxesInPlay.push(this.style.backgroundColor(box));
//     if (this.style.backgroundColor(white) != )
// }
