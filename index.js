const wrapper = document.querySelector('div.wrapper');
const clearButton = document.getElementById('clear-canvas');
const sizeButton = document.getElementById('get-size');
const normal = document.getElementById('nm-mode');
const rbow = document.getElementById('rb-mode');
const display = document.querySelector('.display');
let gridSize = 16;
display.textContent = `${gridSize} x ${gridSize}`;
rbg = false;
normal.style.backgroundColor = 'green';

clearButton.onclick = () => renderGrid(gridSize);
sizeButton.onclick = getSize;
normal.onclick = ev=>{
    rbg = false;
    normal.style.backgroundColor = 'green';
    rbow.style.removeProperty('background-color');
}
rbow.onclick = ev =>{
    rbg = true;
    rbow.style.backgroundColor = 'green';
    normal.style.removeProperty('background-color');
}

renderGrid();

function changeColor(){
    if(rbg){
        const randoColors = [];
        for(i=0;i<3;i++){
            randoColors[i] = Math.floor(Math.random() * 256);
        }
        this.style.backgroundColor = `rgb(${randoColors[0]},${randoColors[1]},${randoColors[2]}`;
    }
    else{
        this.style.backgroundColor = 'blue';
    }

}

function renderGrid(){
    wrapper.replaceChildren();       //clears the wrapper grid
    display.textContent = `${gridSize} x ${gridSize}`;
    for(i=0;i<gridSize;i++){
        let flexdiv = document.createElement('div');
        flexdiv.classList.add("flex-div");
        wrapper.appendChild(flexdiv);

        for(let j=0;j<gridSize;j++){
            let elem = document.createElement('div');
            elem.classList.add('cell');
            elem.setAttribute('data-id',0);
            elem.onmouseover = changeColor;
            flexdiv.appendChild(elem);
        }
    }
}

function getSize(){
    gridSize = prompt("Enter size of required grid:");
    renderGrid();
}