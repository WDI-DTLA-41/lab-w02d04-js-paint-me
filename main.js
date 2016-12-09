var createGrid = function(){
  for(var count = 0; count < 3; count++){
    var tr = document.createElement('tr');
    grid.appendChild(tr);
    for(var count_1 = 0;count_1 < 4; count_1++){
      var td = document.createElement('td');
      tr.appendChild(td);
    }
  }

}

var colorSelect = function(){
  if (event.target.id === 'redBox'){
    grid.addEventListener('click',function(){
      event.target.setAttribute('id','redBox');
    });

  }
  if (event.target.id === 'blueBox'){
    grid.addEventListener('click',function(){
      event.target.setAttribute('id','blueBox');
    });
  }
  if (event.target.id === 'yellowBox'){
    grid.addEventListener('click',function(){
      event.target.setAttribute('id','yellowBox');
    });
  }
}

var clearHandler = function(){
  if (event.target.id === 'clear'){
    for(var num = 0; num < tdList.length; num++){
      tdList[num].setAttribute('id','');
    }
  }
}

var colorYellow = document.querySelector('#yellowBox');
var colorBlue = document.querySelector('#blueBox');
var colorRed = document.querySelector('#redBox');
var header = document.querySelector('header');
var grid = document.querySelector('#grid');
var lineUp = document.querySelector('#lineUp');
var clearButton = document.querySelector('#clear');

header.addEventListener('click', colorSelect);
clearButton.addEventListener('click', clearHandler);
createGrid();
var tdList = document.querySelectorAll('td');

