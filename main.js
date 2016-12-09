
var tbody = document.querySelector('tbody');
var thead = document.createElement('thead');
var row = document.createElement('row');
var cell = document.createElement('td');


row.appendChild(thead);
cell.appendChild(row);


var renderRow = function() {
  var tr = document.createElement('tr');
  var td = document.createElement('td');
    tr.appendChild(td);
    td = document.createElement('td');
      tr.appendChild(td);
      td = document.createElement('td');
      tr.appendChild(td);
      td = document.createElement('td');
      tr.appendChild(td);
      return tr;

  forEach(row,renderRow);
}

var row = renderRow();
tbody.appendChild(row);
var row = renderRow();
tbody.appendChild(row);
var row = renderRow();
tbody.appendChild(row);




