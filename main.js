console.log("bloop");
// ==============================================
// VARIABLES
// ==============================================

// color box
var colorBox = document.querySelector(".color-box");

var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var yellow = document.querySelector(".yellow");

// table cells
var td = document.querySelectorAll("td");

// button
var button = document.querySelector(".clear");

// event trigger will be the 1st and 2nd clicks

// ==============================================
// FUNCTION - SELECT THE COLOR
// ==============================================

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


// var this = event.target;


// change the color of the grid box
var changeColor = function(event) {
  var getColor = function(event) {
    colorBox.classList.add("clicked");
    if (colorBox.classList.contains("red")){
      this.changeRed;
    } else if (colorBox.classList.contains("blue")) {
      this.changeBlue;
    } else if (colorBox.classList.contains("yellow")) {
      this.changeYellow;
      } else {
      return false;
    }
  colorBox.addEventListener("click", getColor)
}
};
td.addEventListener("click", changeColor);


// to the color of the color box

var changeRed = function() {
  event.target.classList.toggle("red");
}

var changeBlue = function() {
  event.target.classList.toggle("blue");
}

var changeYellow = function() {
  event.target.classList.toggle("yellow");
}

// event listener on gridBox click to trigger changeColor




// ==============================================
// FUNCTION - CLEAR THE GRID
// ==============================================

// all grids will change bg color == white
var handleClearAll = function(event) {
  console.log("button clicked");
  // if (td.classList.contains("red")){
  //     td.classList.remove("red");
  //   } else if (colorBox.classList.contains("blue")) {
  //     td.classList.remove("blue");
  //   } else if (colorBox.classList.contains("yellow")) {
  //     td.classList.remove("yellow");
  //     } else {
  //     return false;
  //   }
  // td.classList.add("white");
};
// when clear button is clicked
button.addEventListener("click", handleClearAll);







