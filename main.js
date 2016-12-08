console.log('hah')

var selectors = document.querySelector('.colors');

var selectColor = function(event) {
  if (event.target.classList.contains('brush-color')){
  console.log(event.target.parentNode.children)
//event.target.sibling.classList.remove('clicked');

  event.target.classList.add('clicked');
}

}

selectors.addEventListener('click', selectColor)
