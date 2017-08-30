// Select color input
var colorPicker = document.getElementById('colorPicker');
// Select size input

var height = document.getElementById('input_height');
var width = document.getElementById('input_width');
var tbl = document.getElementById('pixel_canvas');
var submit = document.getElementById('submit');
var tblBody = document.createElement("tbody");


// When size is submitted by the user, call makeGrid()
submit.addEventListener('click', makeGrid);

function makeGrid() {
  // preventing the browser to refresh after clicking
  event.preventDefault();
  for (var i = 0; i < width.value; i++) {
    // creates a table row
    var row = document.createElement("tr");

    row.addEventListener('click', function(e) {
      e.target.style.backgroundColor = colorPicker.value;
    });

    for (var j = 0; j < height.value; j++) {
      // Create a <td> element and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      row.appendChild(cell);
    }
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);

}
