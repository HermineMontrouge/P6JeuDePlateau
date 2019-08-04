const board = document.querySelector("#board");

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

const boxes = document.querySelectorAll(".box");
const numberOfUnreachableBoxes = 12;
// console.log(boxes); renvoie NodeList(100) la liste des 100 div.box dans un tableau
// console.log(numberOfUnreachableBoxes); renvoie "12"

for (let i = 0; i < numberOfUnreachableBoxes; i++) {
  const unreachableBox = boxes[Math.floor(Math.random() * boxes.length)];
  unreachableBox.className = " box unreachable";

  // console.log(boxes); renvoie 12 fois la liste des 100 div.box dans des tableaux
  // console.log(unreachableBox); renvoie 12fois <div class=" box unreachable"></div>
  // console.log(numberOfUnreachableBoxes); renvoie 12 fois "12"
}

// generate() {
//     /**
//      * Génération du plateau de jeu en 10x10 avec à peu près 1/10ème de tonneaux
//      */
//     for (let x = 0; x < this.mapSize; x++) {
//         this.board[x] = [];
//         for (let y = 0; y < this.mapSize; y++) {
//             if (Math.floor((Math.random() * this.statBarrels)) == 0) {
//                 this.board[x][y] = new Cell("" + x + y, null, true, null, x, y);
//             } else {
//                 this.board[x][y] = new Cell("" + x + y, null, false, null, x, y);
//             }
//         }
//     }
//     return this.board;
// }

// getEmptyCells() {
//     /**
//      * Récupération des cases vides
//      */
//     let emptyCells = new Array();
//     for (let x = 0; x < this.mapSize; x++) {
//         for (let y = 0; y < this.mapSize; y++) {
//             if (this.board[x][y].barrel == false) {
//                 emptyCells.push({
//                     X: x,
//                     Y: y
//                 });
//             }
//         }
//     }
//     return emptyCells;
// }