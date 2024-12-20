const container = document.querySelector("#board-container");
const resetButtonNode = document.querySelector("#reset-button");
const resizeButtonNode = document.querySelector("#resize-button");
const playButtonNode = document.querySelector("#play-button");

let width = 25;
let height = 25; 
let drawState = false;

const clearBox = () => {
    drawBox(width, height);
}

const drawBox = (width, height) => {
    container.innerHTML = "";

    const COLUMNS = width;
    const ROWS = height;
    
    for (let col = 0; col < COLUMNS; col++){
        const COLUMN_NODE = document.createElement("div");
        COLUMN_NODE.classList.add("column")
        for (let row = 0; row < ROWS; row++){
            const ROW_NODE = document.createElement("div");
            ROW_NODE.classList.add("row"); 
            ROW_NODE.addEventListener("mousedown", (e) => {e.target.classList.add("filled");});
            COLUMN_NODE.appendChild(ROW_NODE);
        }
        container.appendChild(COLUMN_NODE);
    }
} 

const resizeButtonClicked = () => {
    do{
        width = prompt("How many tiles wide? (Provide integer value 0 < x <= 100)");
    } while(parseInt(width) <= 0 || parseInt(width) > 100 || !parseInt(width));
    drawBox(width, height);
}

drawBox(width, height);