

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
  // color is equal to lightblue on html
  pickedColor = evt.target.getAttribute('color');
  console.log(pickedColor);
}

//lightBlueBox.addEventListener('click',selectColor);
function addEventListener() {
    //grab all boxes first
    var boxes = document.querySelectorAll('.box');
    for(var i=0; i < boxes.length; i++) {
        // this [i] allows you to accesss what's in array
        // addColor is the name of the function
        boxes[i].addEventListener('click',addColor);
        console.log(boxes[i]);


    }
}
var addColor = function(evt) {

  evt.target.// here=pickedColor;
console.log('did i get here?');
}








// document.querySelector('div').

// var chgColorToBlue function(evt) {
//     clickedOn.style.backgroundColor = "blue";

// }chgColorToBlue.addEventListener('click',changeColor,);




