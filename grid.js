const board = document.querySelector("#board");

for (let row = 0; row < 10; row++) {
  const newRow = document.createElement("div");
  newRow.className = "row";
  board.appendChild(newRow);

  for (let box = 0; box < 10; box++) {
    const newBox = document.createElement("div");
    newBox.className = "box";
    newRow.appendChild(newBox);

    const boxes = document.querySelectorAll(".box");
    const unreachableBox = 12;

    for (let i = 0; i < unreachableBox; i++) {
      const unreachableBox = boxes[Math.floor(Math.random() * boxes.length)];
      unreachableBox.className = " box unreachable";
      console.log(unreachableBox);
      // console.log(boxes.length);
    }
  }
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