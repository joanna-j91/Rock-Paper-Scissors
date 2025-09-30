const GRID_SIZE = 600;
let numSquares = 16;

const sketchArea = document.querySelector("#sketch-area");
const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

sliderValue.textContent = `${slider.value} x ${slider.value}`;
sketchArea.style.width = sketchArea.style.height = `${GRID_SIZE}px`;

function randomizeColour(){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, '0')}`;
}


function createGrid(squaresPerSide){
    numSquares = squaresPerSide;
    const width = `${(GRID_SIZE/numSquares) - 2}px`;

    for(let i = 0 ; i < (numSquares * numSquares) ; i++){
        const gridCell = document.createElement("div");
        
        gridCell.style.width = width
        gridCell.style.height = width
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", () => {gridCell.style.backgroundColor = randomizeColour()});
    }
}



function removeCells(){
    while(sketchArea.firstChild){
        sketchArea.removeChild(sketchArea.firstChild);
    }
}

slider.oninput = function () {
    let txt= `${this.value} x ${this.value}`;
    sliderValue.innerHTML = txt;
    removeCells();
    createGrid(this.value);
}

createGrid(16);