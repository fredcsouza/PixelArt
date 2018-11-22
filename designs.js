// Select color input
let colorPicker = $('#colorPicker');

// Select size input
let innerWidth = $('#inputWidth');
let innerHeight = $('#inputHeight');

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  let table = $('#pixelCanvas');
  table.find('tr').remove();
  for (let i = 1; i <= innerHeight.val(); i++) {
    let tr = $('<tr>');
    for (let i = 1; i <= innerWidth.val(); i++) {
      $(tr).append('<td width="20px" height="20px"></td>');
    }
    table.append(tr);
  }
};

$('#sizePicker').submit(function (e) {
  e.preventDefault();
  makeGrid();
});
