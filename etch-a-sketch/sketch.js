const GRID_SIZE = 600;
let numSquares = 16;

const sketchArea = document.querySelector("#sketch-area");
const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

sliderValue.textContent = `${slider.value} x ${slider.value}`;
sketchArea.style.width = sketchArea.style.height = `${GRID_SIZE}px`;

function createGrid(squaresPerSide){
    const width = `${(GRID_SIZE/numSquares) - 2}px`;
    for(let i = 0 ; i < (numSquares * numSquares) ; i++){
        const gridCell = document.createElement("div");
        
        gridCell.style.width = width
        gridCell.style.height = width
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", () => {gridCell.style.backgroundColor = "black"});
    }
}

createGrid(16);

function removeCells(){
    while(sketchArea.firstChild){
        sketchArea.removeChild(sketchArea.firstChild);
    }
}