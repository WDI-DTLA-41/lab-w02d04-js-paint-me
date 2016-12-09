// console.log("^^^^^^^^");

// query selector
var button = document.querySelector('.clear');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var color3 = document.querySelector('.color3');
var cell1 = document.querySelectorAll('.cell1');

// function clickColor(){
//   if (color1.clicked == true) {
//   cell1.addClassList('.color1');
//   }
// };

// color1.addEventListener('click', clickColor);






// // console.log(td);

// function somethingClicked(event){
//   console.log(event.target);
//   console.log('clicked');
// }

// td.addEventListener('click', somethingClicked);

td.forEach(function(element){
  console.log(element);
  element.addEventListener('click', clickCheck);
});

// function handleClick(){
//   var color2 = getValues();
//   var storeColor = color2;
//   this.classList.toggle(".color2")
// }

// button.addEventListener('click', handleClick);

function clickCheck(){
  console.log(this);
  // add class of .color1
  // this.classList('.color1');
  this.setAttribute('class', 'color1');
}

color1.addEventListener('click', clickCheck);



