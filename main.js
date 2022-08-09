let gridSize = 16
const DEFAULT_COLOR = '#000000'

const button = document.querySelectorAll('.size');
const black = document.querySelector('#black');
const rgb = document.querySelector('#rgb');
const grid = document.querySelector('.grid');
const gridElement = grid.childNodes;
const reset = document.querySelector('#reset');

function createGrid(size) {
    for(let i = 0; i < size*size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-element');
        grid.appendChild(div);
        grid.setAttribute('style',`grid-template-columns: repeat(${size}, 2fr);grid-template-rows: repeat(${size}, 2fr);`)
        div.addEventListener('mouseover', function() {
            div.setAttribute('style', `background-color: ${DEFAULT_COLOR}`)
        })
    }
}

button.forEach(select => {
    select.addEventListener('click', function() {
        removeChild(grid);
        gridSize = select.textContent;
        createGrid(gridSize);
    })    
})

const removeChild = parent => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

rgb.addEventListener('click', function () {
    for (let i = 0; i < gridElement.length; i++) {
        gridElement[i].addEventListener('mouseover', function () {
            const red = Math.floor(Math.random() * 255)
            const green = Math.floor(Math.random() * 255)
            const blue = Math.floor(Math.random() * 255)
            gridElement[i].setAttribute(
                'style',
                `background-color: rgb(${red}, ${green}, ${blue})`
            )
        })
    }
})

black.addEventListener('click', function() {
    for (let i = 0; i < gridElement.length; i++) {
        gridElement[i].addEventListener('mouseover', function () {
            gridElement[i].setAttribute('style', `background-color: ${DEFAULT_COLOR}`)
        })
    }
})

reset.addEventListener('click', function () {
    removeChild(grid)
    createGrid(gridSize)
});

createGrid(gridSize);