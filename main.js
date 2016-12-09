console.log('hello world')

var redBox = document.querySelector('.redBox');
var blueBox = document.querySelector('.blueBox');
var yellowBox = document.querySelector('.yellowBox');
var addNewColor = document.querySelectorAll('.divTableCell');

var selectAColor = null;

redBox.addEventListener('click', function(event) {
    selectAColor = event.target.style.backgroundColor;
    redBox.classList.add('active');
});


blueBox.addEventListener('click', function(event) {
    selectAColor = event.target.style.backgroundColor;
    blueBox.classList.add('active');
});


yellowBox.addEventListener('click', function(event) {
    selectAColor = event.target.style.backgroundColor;
    yellowBox.classList.add('active');
});

for (var i = 0; i < addNewColor.length; i++) {
    addNewColor[i].addEventListener('click', function(event) {
      event.target.style.backgroundColor = selectAColor;
  });
};

var clearButton = document.querySelector('#clearColors')
clearButton.addEventListener('click', function() {
    for (var i = 0; i < addNewColor.length; i++) {
    addNewColor[i].style.backgroundColor = 'white';
  };
});
