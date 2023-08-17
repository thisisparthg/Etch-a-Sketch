const container = document.querySelector('.container');
const resetButton = document.getElementById("resetButton");
let isMousePressed = false;

container.addEventListener("mousedown", () => {
    isMousePressed = true;
});

container.addEventListener("mouseup", () => {
    isMousePressed = false;
});

function createGrid(rows, cols) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const square = document.createElement('div');
            square.classList.add("square");
            square.addEventListener("mouseover", () => {
                if (isMousePressed) {
                    square.style.backgroundColor = "#01fafe";
                }
            });

            square.addEventListener("click", () => {
                square.style.backgroundColor = "#01fafe";
            });

            square.addEventListener("mouseover", () => {
                square.style.cursor = "pointer";
            });
            container.appendChild(square);
        }
    }
}

function promptForGridSize() {
    const gridSize = parseInt(prompt("Enter the numbr of squares per side (max 100):"));
    if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize, gridSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
}

resetButton.addEventListener("click", promptForGridSize);

createGrid(16, 16);

