const container = document.querySelector(".container");
const btn = document.querySelector("button");

function randomColor() {
    //generate random values for red, green, and blue components between 0 and 255
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    //construct the RGB color string
    let bgColor = "rgb(" + r + "," + g + "," + b + ")";
    return bgColor;
}

function createGrid(gridSize = 16) {
    let cellSize =  (100 / gridSize) + '%'; // cellsize is percentage from 100 / gridsize so that divs are equally sized

    for (let i = 0; i < gridSize * gridSize; i++) { //creates divs that equal to gridsize^2
        let gridCell = document.createElement('div');
        gridCell.style.width = cellSize;
        gridCell.style.height = cellSize;

        container.appendChild(gridCell);

        gridCell.addEventListener('mouseover', () => { //dom event when hovering, change cell to random color by calling getting rgb value from randomcolor()
            gridCell.style.backgroundColor = randomColor();
            let currentOpacity = parseFloat(gridCell.style.opacity) || 0 //default to 0
            if (currentOpacity < 1) {
                gridCell.style.opacity = currentOpacity + 0.1; //increment opacity
            }
        });
    }
}

btn.addEventListener("click", () => changeGridSize());

function changeGridSize() {
    container.innerHTML = "";
    let newSize = prompt("Change grid size:");
    
    if (!newSize){
        createGrid();
    }
    else if (newSize > 100){
        alert("Input should be a maximum of 100");
        changeGridSize();
    }
    else {
        createGrid(newSize);
    }
}

createGrid();

