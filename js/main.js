"use script";

const boardContainer = document.querySelector(".board");

for(let i=1; i<=100; i++){
    const boardCell = document.createElement("div");
    boardCell.innerHTML = i;
    boardCell.classList.add("board__number");
    //aggiungo evento click
    boardCell.addEventListener("click", function() {
        this.classList.add("blue__cell");
    });
    boardContainer.append(boardCell);
}