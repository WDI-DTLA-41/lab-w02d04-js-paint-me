

console.log("see me?");

// var div = document.querySelector('div');
var clearBox;
var pickedColor;
//target the div
var lightBlueBox = document.querySelector('.lightBlueBox');
var greenBox = document.querySelector('.greenBox');
var blueBox = document.querySelector('.blueBox');

// this is for if i have a plain box and want to chg color
//lightBlueBox.style.backgroundColor="lightBlueBox";

// this creates the event listener to be able to click the box
lightBlueBox.addEventListener('click',selectColor);
greenBox.addEventListener('click',selectColor);
blueBox.addEventListener('click',selectColor);
console.log(pickedColor);
addEventListener();

// this is how you pick the color
function selectColor(evt) {
  // color is equal to element inside 3 top boxes colored on html
  // (lightblue, green, blue)
  pickedColor = evt.target.getAttribute('color');
  // create 'if' to know which box is color chosen
  console.log(pickedColor);

  // reset pickedColor
  var chgColor = document.querySelector('#startAgain')
  chgColor = function(evt) {
      console.log('change color');
    }
  }


//lightBlueBox.addEventListener('click',selectColor);
function addEventListener() {
    //grab all boxes first. class of .box is on grid boxes
    var boxes = document.querySelectorAll('.box');
    for(var i=0; i < boxes.length; i++) {
        // this [i] allows you to accesss what's in array
        // addColor is the name of the function to set up
        // to change a color in the grid
        boxes[i].addEventListener('click',addColor);
        console.log(boxes[i]);

    }
  }


// this is how to change color of square to new color
var addColor = function(evt) {
      // always true
      console.log(this === evt.currentTarget);
      // true when currentTarget and target are same object
      console.log(this === evt.target);
      // this.style.backgroundColor = 'blue';
        if (evt.currentTarget !== 'lightBlueBox') {
        console.log(this.style.backgroundColor = 'lightblue');

      } else if (evt.currentTarget !== 'blueBox') {
          this.style.backgroundColor = 'blue';
      } else console.log(evt.currentTarget);

}

  // now, get a list of every element in the document
var elements = document.getElementsByTagName('div');
  // now, add a click listener so when element is clicked
  // it turns blue
    for(var i=0; i<elements.length; i++) {
        elements[i].addEventListener('click',addColor, false);

    }










