class Board {
    constructor() {
        this.board;
        this.boxes;
    }

    // x abscisses horizontal
    // y ordonnées vertical

    generateBoard() {

        // Selection of id board on the dom
        this.board = document.querySelector("#board");

        for (let row = 0; row < 10; row++) {
            const newRow = document.createElement("div");
            newRow.className = "row";
            board.appendChild(newRow);

            for (let box = 0; box < 10; box++) {
                const newBox = document.createElement("div");
                newBox.className = "box";
                newRow.appendChild(newBox);
            }
        }
    }

    generateUnreachableBoxes() {

        // Selection of class boxes on the dom
        this.boxes = document.querySelectorAll(".box");

        const numberOfUnreachableBoxes = 12;
        // console.log(boxes); renvoie NodeList(100) la liste des 100 div.box dans un tableau
        // console.log(numberOfUnreachableBoxes); renvoie "12"

        for (let i = 0; i < numberOfUnreachableBoxes; i++) {
            const unreachableBox = this.boxes[Math.floor(Math.random() * this.boxes.length)];
            unreachableBox.className = " box unreachable";
            // console.log(boxes); renvoie 12 fois la liste des 100 div.box dans des tableaux
            // console.log(unreachableBox); renvoie 12fois <div class=" box unreachable"></div>
            // console.log(numberOfUnreachableBoxes); renvoie 12 fois "12"
        }
    }
}

// Instantiation

const newBoard = new Board();
newBoard.generateBoard();
newBoard.generateUnreachableBoxes();

