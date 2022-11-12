//create a grid
const grid = document.querySelector('.container');
function createGrid(n) {
    for (let i = 0; i < n; i++) {
       let row = document.createElement('div');
            row.classList.add('row');
            grid.appendChild(row);
        for(let j = 0; j < n; j++) {
            const item = document.createElement('div')
            item.classList.add('item')
            row.appendChild(item)
        }
        grid.appendChild(row)
    }
}
createGrid(16)
// remove the grid
function removeGrid() {
    const gridItems= grid.querySelectorAll('div')
    gridItems.forEach( e => e.remove())
}

const body= document.body
//ask for new grid 
const btn = document.querySelector('button')
function newGrid() {
    let e = Number(prompt('Enter a number between 1 and 100'))
    if(e > 100){
        alert('Enter a number between 1 and 100')
        return;
    }else{
        removeGrid();
        createGrid(e)
        const cell = document.querySelectorAll('.item')
    cell.forEach( e => e.addEventListener('mouseenter',changeColor ))
    }
}

btn.addEventListener('click', newGrid)
//create a mouse hover effect
const cell = document.querySelectorAll('.item')
cell.forEach( e => e.addEventListener('mouseenter',changeColor ))

function changeColor(e) {
    e.target.style.backgroundColor = "green"
}