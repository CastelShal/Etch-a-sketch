const wrapper = document.querySelector('div.wrapper');
const clearButton = document.getElementById('clear-canvas');
const sizeButton = document.getElementById('get-size');
let gridSize = 16;
renderGrid(gridSize);

clearButton.onclick = () => renderGrid(gridSize);
sizeButton.onclick = getSize;

function changeColor(){
    this.style.backgroundColor = 'blue';
}

function renderGrid(){
    wrapper.replaceChildren();       //clears the wrapper grid
    for(i=0;i<gridSize;i++){
        let flexdiv = document.createElement('div');
        flexdiv.classList.add("flex-div");
        wrapper.appendChild(flexdiv);

        for(let j=0;j<gridSize;j++){
            let elem = document.createElement('div');
            elem.classList.add('cell');
            elem.onmouseover = changeColor;
            flexdiv.appendChild(elem);
        }
    }
}

function getSize(){
    gridSize = prompt("Enter size of required grid:");
    renderGrid();
}