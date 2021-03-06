// Select color input
const colorPicker = document.getElementById('colorPicker');
// Select size input

let height = document.getElementById('input_height');
let width = document.getElementById('input_width');
let tbl = document.getElementById('pixel_canvas');
let submit = document.querySelector('input[type="submit"]');


// When size is submitted by the user, call makeGrid()
submit.addEventListener('click', makeGrid);


function makeGrid() {
  // preventing the browser to refresh after clicking
  event.preventDefault();
  //Before constructing a new grid, clear the existing table.
  while (tbl.firstChild) {
    tbl.removeChild(tbl.firstChild);
}
  for (let i = 0; i < height.value; i++) {
    // creates a table row
    let row = document.createElement("tr");
    //function for coloring the squares by clicking
    function onClickHandler(e) {
      e.target.style.backgroundColor = colorPicker.value;
    }


    for (let j = 0; j < width.value; j++) {
      // Create a <td> element and put the <td> at
      // the end of the table row
      let cell = document.createElement("td");
      cell.addEventListener('click', onClickHandler);
      row.appendChild(cell);
    }
    // add the row to the end of the table body
    tbl.appendChild(row);
  }
}
