//All initializations and global values
const wrapper = document.querySelector('div.wrapper');
const clearButton = document.getElementById('clear-canvas');
const sizeButton = document.getElementById('get-size');
const normal = document.getElementById('nm-mode');
const rbow = document.getElementById('rb-mode');
const display = document.querySelector('.display');

let gridSize = 16, rgb = false;
display.textContent = `${gridSize} x ${gridSize}`;
normal.style.backgroundColor = 'green';

//event listener bindings + actual execution
clearButton.onclick = () => renderGrid(gridSize);
sizeButton.onclick = getSize;
normal.onclick = ev => {
    rgb = false;
    normal.style.backgroundColor = 'green';
    rbow.style.removeProperty('background-color');
}

rbow.onclick = ev => {
    rgb = true;
    rbow.style.backgroundColor = 'green';
    normal.style.removeProperty('background-color');
}

renderGrid();

//renders + clears the grid
function renderGrid() {
    wrapper.replaceChildren();       //clears the wrapper grid
    display.textContent = `${gridSize} x ${gridSize}`;
    for (i = 0; i < gridSize; i++) {
        let flexdiv = document.createElement('div');
        flexdiv.classList.add("flex-div");
        wrapper.appendChild(flexdiv);

        for (let j = 0; j < gridSize; j++) {
            let elem = document.createElement('div');
            elem.classList.add('cell');
            elem.setAttribute('data-id', 0);
            elem.onmouseover = changeColor;
            flexdiv.appendChild(elem);
        }
    }
}

function changeColor() {
    if (rgb) {
        const randoColors = [];
        for (i = 0; i < 3; i++) {
            randoColors[i] = Math.floor(Math.random() * 220) + 35;
        }
        this.style.backgroundColor = `rgb(${randoColors[0]},${randoColors[1]},${randoColors[2]}`;
    }
    else {
        this.style.backgroundColor = 'blue';
    }

}

function getSize() {
    gridSize = prompt("Enter size of required grid:");
    if (isNaN(gridSize)) {
        return;
    }
    gridSize = (gridSize > 100) ? 100 : gridSize;
    renderGrid();
}