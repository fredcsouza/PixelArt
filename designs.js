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

// Criando grid personalizada
$('#sizePicker').submit(function (e) {
  makeGrid();
  $('td').click(setColor);
  e.preventDefault();
});

// Aplica cor ao elemento
function setColor() {
  $(this).attr('bgcolor', colorPicker.val())
};
