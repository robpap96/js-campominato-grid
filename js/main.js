// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
"use strict";

const boardContainer = document.querySelector(".board");
const playButton = document.getElementById("btn-play");

let clicked = false;

playButton.addEventListener("click", function(){
    let levelSelected = document.getElementById("level-selected").value;
    if(clicked === false && levelSelected === "facile") {

        boardContainer.classList.remove("display__none");
        for(let i=1; i<=100; i++){
            //creo elemento
            const boardCell = document.createElement("div");
            boardCell.innerHTML = i;
            boardCell.classList.add("board__number");
            //aggiungo evento click
            boardCell.addEventListener("click", function() {
                console.log(this.innerHTML);
                this.classList.add("blue__cell");
            });  
            //concateno l'elemento
            boardContainer.append(boardCell);
        }
        clicked = true; 
    } else if(clicked === false && levelSelected === "medio") {
        boardContainer.classList.remove("display__none");
        for(let i=1; i<=81; i++){
            //creo elemento
            const boardCell = document.createElement("div");
            boardCell.innerHTML = i;
            boardCell.classList.add("board__number");
            //aggiungo evento click
            boardCell.addEventListener("click", function() {
                console.log(this.innerHTML);
                this.classList.add("blue__cell");
            });  
            //concateno l'elemento
            boardContainer.append(boardCell);
        }
        clicked = true;
    } else if (clicked === false && levelSelected === "difficile") {
        boardContainer.classList.remove("display__none");
        for(let i=1; i<=49; i++){
            //creo elemento
            const boardCell = document.createElement("div");
            boardCell.innerHTML = i;
            boardCell.classList.add("board__number");
            //aggiungo evento click
            boardCell.addEventListener("click", function() {
                console.log(this.innerHTML);
                this.classList.add("blue__cell");
            });  
            //concateno l'elemento
            boardContainer.append(boardCell);
        }
        clicked = true;
    } else {
        alert("Hai gia creato la board!!");
    }   
});

