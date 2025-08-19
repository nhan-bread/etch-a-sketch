const container = document.querySelector('#container');
const btn = document.querySelector('button');

let square = 16;

document.addEventListener('DOMContentLoaded', createGrid);

function createGrid() {
    let squared = square * square;
    for (i = 0; i < squared; i++) {
        const grid = document.createElement('div');
        container.appendChild(grid);
        grid.setAttribute('style', 'outline: 1px solid black; height: 20px; width: 20px;');
        grid.addEventListener('mouseenter', (e) => {
            e.target.style.background = 'blue';
        })
    }
}

btn.addEventListener('click', () => {
    square = parseInt(window.prompt('How many squares do you want on each side?'));
    createGrid();
})