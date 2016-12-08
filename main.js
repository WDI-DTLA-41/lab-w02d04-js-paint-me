console.log("Finger painting with the insane");

// set querySelectors
var tbody = document.querySelector('tbody');


// create a function to create Grid Table
var createTable = function() {
  var tr = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tbody.appendChild(tr);
}

createTable();




