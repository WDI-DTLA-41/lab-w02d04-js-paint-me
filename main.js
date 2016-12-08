var colorBox = document.querySelector('.box');

var handleSelect = function(evt) {
  console.log('clicked');
  evt.target.setAttribute('id', 'selected');
}

colorBox.addEventListener('click', handleSelect);

// var colors = document.querySelector(".colors");
// for (var i = 0; i <= colors.length; i++) {
//   colorBox.addEventListener('click', handleSelect);
// }

