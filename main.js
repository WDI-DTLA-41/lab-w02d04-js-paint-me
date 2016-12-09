console.log("bloop");
// ==============================================
// VARIABLES
// ==============================================

// color box
var colorBox = document.querySelector(".color-box");

// grid box
var gridBox = document.querySelector("td");

// button
var btn = document.querySelector("button");

var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var yellow = document.querySelector(".yellow");

// event trigger will be the 1st and 2nd clicks

// ==============================================
// FUNCTION - SELECT THE COLOR
// ==============================================





var changeRed = function() {
  event.target.classList.toggle("red");
}

var changeBlue = function() {
  event.target.classList.toggle("blue");
}

var changeYellow = function() {
  event.target.classList.toggle("yellow");
}


// var handleColorPick = function(event) {
//   if (event.target.classList.contains("red")) {
//     var background = style.backgroundColor("red");
//     console.log("red clicked")
//   }
//   // if (event.target.classList.contains("blue")) {
//   //   var blueBg = gridBox.classList.toggle("blue");
//   //   console.log("blue clicked");
//   // }
//   // if (event.target.classList.contains("yellow")) {
//   //   var yellowBg = gridBox.classList.toggle("yellow");
//   //   console.log("yellow clicked");
//   // }
// };
// colorBox.addEventListener("click", handleColorPick);




// when color box is clicked


// take that background color



// ==============================================
// FUNCTION - CHANGE THE COLOR
// ==============================================


// when grid box is clicked


// change the color of the grid box


// to the color of the color box


// ==============================================
// FUNCTION - CLEAR THE GRID
// ==============================================

// when clear button is clicked


// all grids will change bg color == white










