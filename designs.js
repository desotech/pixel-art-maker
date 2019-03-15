// Select size input
var sizePicker = document.getElementById('sizePicker');
sizePicker.addEventListener('submit', function (event) {
    event.preventDefault();
    makeGrid();
});

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	const inputHeight = document.getElementById('inputHeight').value;//get the height value given by the user
	const inputWidth = document.getElementById('inputWidth').value;//get the width value given by the user
	const pixelCanvas = document.getElementById('pixelCanvas');// create a variable for the table
    pixelCanvas.innerHTML = "";//create a table. also reset the table after a new submit
    for (let x = 0; x < inputHeight; x++) {
        var row = document.createElement('tr');
        pixelCanvas.appendChild(row);//insert new element row in the table 
        for (let y = 0; y < inputWidth; y++) {
            var column = document.createElement('td');
            row.appendChild(column);  // insert new element column in the table
			column.addEventListener('mousedown', function(e) { //implement clickListener on the td element
    			let color = document.getElementById('colorPicker').value;// get the color that the user has selected. i use let so that the color changes everytime the user choose a new one.
        		e.target.style.backgroundColor = color; // paint the td with the color
			})
        }
    }
}