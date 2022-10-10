const wrapper = document.querySelector('div.wrapper');
let gridsize = prompt("Enter grid size")
gridsize = Math.min(gridsize,100)
renderGrid(gridsize)

console.log(wrapper.textContent);

function changeColor(ev){
    this.style.backgroundColor = 'blue';
}
function renderGrid(size=16){
    wrapper.replaceChildren()
    for(i=0;i<size;i++){
        let flexdiv = document.createElement('div');
        flexdiv.classList.add("flex-div")
        wrapper.appendChild(flexdiv);

        for(let j=0;j<size;j++){
            let elem = document.createElement('div')
            elem.classList.add('cell')
            elem.onmouseover = changeColor;
            flexdiv.appendChild(elem)
        }
    }
}