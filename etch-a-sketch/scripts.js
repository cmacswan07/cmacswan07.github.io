const container = document.querySelector('#container');
const row = document.createElement('div');
const cell = document.createElement('div');
let gridSize = 20;

let documentBody = document.getElementById('document-body');
documentBody.addEventListener('touchstart', function() {}, true );

createGrid();

let resizeButton = document.querySelector('#resize');

resizeButton.onclick = () => { 
	container.innerHTML = "";
	gridSize = prompt("Select a new size for grid. (Size X Size)");
	createGrid();

}



function createGrid() {
	for (a=0; a<gridSize; a++) {
		const row = document.createElement('div');
		row.setAttribute('style', 'height :' + 300/gridSize + 'px; width : 300px;');
		row.classList.add('row');
		container.appendChild(row);

			for (i=0; i<gridSize; i++) {
				const cell = document.createElement('div');
				cell.setAttribute("style", 
				'display : table-cell; height :' + 300/gridSize + 'px; width :' + 300/gridSize + 'px; opacity : 0; background-color : #000');
				cell.addEventListener("mouseover", darkenCell);
				cell.classList.add('cell');	
				row.appendChild(cell); }
	}
}

/* Increases opacity of cells. */
function darkenCell () {

	let cellOpacity = +this.style.opacity;

	if (cellOpacity < 1) {
		cellOpacity += 0.1;
	}

	this.style.opacity = cellOpacity;

}


