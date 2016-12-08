var palette = document.querySelectorAll('.palette');
var selectedColor;
var handleSelectedColor = function(event){
  console.log(event.target.value);
  selectedColor = event.target.classList;
}

palette.addEventListener('click', handleSelectedColor);
