const container = document.querySelector('#container');

let square = 16;
let squared = square * square;

document.addEventListener('DOMContentLoaded', () => {
    for (i = 0; i < squared; i++) {
        const grid = document.createElement('div');
        container.appendChild(grid);
        grid.setAttribute('style', 'outline: 1px solid black; height: 20px; width: 20px;');
        grid.addEventListener('mouseenter', (e) => {
            e.target.style.background = 'blue';
        })
    }
})