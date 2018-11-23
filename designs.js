// Select color input
let colorPicker = document.getElementById('colorPicker');

// Select size input
let innerWidth = document.getElementById('inputWidth');
let innerHeight = document.getElementById('inputHeight');

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  let table = document.getElementById('pixelCanvas');
  table.innerHTML = "";
  for (let i = 1; i <= innerHeight.value; i++) {
    let tr = document.createElement('tr');
    for (let i = 1; i <= innerWidth.value; i++) {
      let td = document.createElement('td');
      td.style.cssText = 'width: 20px; height: 20px;';
      td.addEventListener('click', setColor);
      tr.appendChild(td);
    };
    table.appendChild(tr);
  };
};

// adiciona cor
function setColor(evt) {
  evt.target.setAttribute('bgcolor', colorPicker.value);
};

// evento criar grid
let botao = document.getElementById('sizePicker');
botao.addEventListener('submit', function (e) {
  e.preventDefault();
  makeGrid();
});


