const container = document.querySelector('#container');
const btn = document.querySelector('button');

let square = 16;

document.addEventListener('DOMContentLoaded', createGrid);

function createGrid() {
    let squared = square * square;
    for (i = 0; i < squared; i++) {
        const grid = document.createElement('div');
        container.appendChild(grid);
        grid.style.outline = '1px solid black';
        grid.style.height = 'calc( 960px / ' + square + ')';
        grid.style.width = 'calc( 960px / ' + square + ')';
        grid.addEventListener('mouseenter', (e) => {
            let redValue = Math.floor(Math.random() * 255);
            let greenValue = Math.floor(Math.random() * 255);
            let blueValue = Math.floor(Math.random() * 255);
            e.target.style.backgroundColor = 'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue +')';
        })
    }
}

btn.addEventListener('click', () => {
    square = parseInt(window.prompt('How many squares do you want on each side? Max limit: 100.'));
    if (square <= 100 && square) {
        while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid();
    }
})