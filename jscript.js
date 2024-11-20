const container = document.querySelector(".container");

let gridSize = 16; //adjust this
let cellSize = (100 / gridSize) + '%'; // cellsize is percentage from 100 / gridsize so that divs are equally sized

function randomColor() {
    //generate random values for red, green, and blue components between 0 and 255
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    //construct the RGB color string
    let bgColor = "rgb(" + r + "," + g + "," + b + ")";
    return bgColor;
}

function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) { //creates divs that equal to gridsize^2
        let gridCell = document.createElement('div');
        gridCell.style.width = cellSize;
        gridCell.style.height = cellSize;

        container.appendChild(gridCell);

        gridCell.addEventListener('mouseover', () => { //dom event when hovering, change cell to random color
            gridCell.style.backgroundColor = randomColor();
        });
    }
}

createGrid();

