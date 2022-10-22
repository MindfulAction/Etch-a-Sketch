//NEXT STEPS: Need to DRY code and create helper functions for cleaner code


//Create function createGrid that will create a grid
let createGrid = (gridSize) => {
    let grid = document.querySelector(".container");
    //Create for loop that adds divs that will serve as columns to the grid
    for (let i = 1; i <= gridSize; i++) {
        //Add a column to the grid
        grid.appendChild(document.createElement("div"));
    }

    //Get Nodelist of all column divs
    let columns = document.querySelectorAll(".container div");
    //Add column class to each column div
    columns.forEach((column) => {
        column.classList.add("column");
    })
    //Add square divs to each column
    columns.forEach((column) => {
        for (let i =1; i <= gridSize; i++){
            column.appendChild(document.createElement("div"));
        }
    })

    //Create Nodelist of all square divs
    let squares = document.querySelectorAll(".column div");
    //Add square class to each square div
    squares.forEach((square) => {
        square.classList.add("square");
    })
    //Add mouseover event listeners to each square that changes its color to random rgb when triggered
    squares.forEach((square) => {
        square.addEventListener("mouseover", changeBackgroundColorToRandomRGB)
    })
    //Add mouseout event listenser to each square that will remove the mouseover event that chages its color to random rgb when triggered
    squares.forEach((square) => {
        square.addEventListener("mouseout", (event) => {
            event.target.removeEventListener("mouseover", changeBackgroundColorToRandomRGB)
        })
    })
}



let changeBackgroundColorToRandomRGB = (event) => {
    event.target.style.backgroundColor = `rgb(${Math.min(Math.random()) * 100}, ${Math.min(Math.random()) * 100}, 
                ${Math.min(Math.random()) * 100})`;
}

//Function that will remove the old grid 
let removeOldGrid = (oldGrid) => {
    while (oldGrid.firstChild) {
        oldGrid.removeChild(oldGrid.firstChild);
    }
}

//Function that will ask user for input for grid size
let promptUserForGridSize = () => {
    let newGridSize = prompt("Please enter a number for the size of the new grid. For example, enter '10' if you want the grid to be 10x10. (NOTE: max is 100)", 16);
    console.log(newGridSize)
    //Use while loop to limit max grid size to 100
    while (newGridSize > 100) {
        newGridSize = prompt("Please enter a grid size no greater than 100.", 16)
    }
    //Execute removeOldGrid and createGrid as long as the user did not "cancel" the prompt for a new grid size
     if (newGridSize != null) {
        removeOldGrid(grid);
        createGrid(newGridSize);
    
     } 
}

//Create var grid that will serve as our Etch a Sketch "canvas"
let grid = document.querySelector(".container");

//Create initial grid of size 16
createGrid(16);






//Create var for new button that will allow user to change the size of the grid
let newGridButton = document.createElement("button");
newGridButton.textContent = "Change Grid Size";
console.log(newGridButton)
//Insert newGridButton into the top of the page
document.body.insertBefore(newGridButton, grid);
//Add event listener to newGridButton
newGridButton.addEventListener("click", promptUserForGridSize);



