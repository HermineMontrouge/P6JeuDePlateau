class Player {
  constructor(name, hp, weapon, image) {
    this.name = name;
    this.hp = hp;
    this.weapon = weapon;
    this.image = image;
    this.boxes;
  }

  genaratePlayers() {

    this.boxes = document.querySelectorAll(".box");
    const playerBoard = [player1, player2];

    // generate one player of each in random boxes
    for (let i = 0; i < playerBoard.length; i++) {
      const newPlayer = this.boxes[Math.floor(Math.random() * this.boxes.length)];
      if (i === 0) {
        newPlayer.className = "box player1";
      } else if (i === 1) {
        newPlayer.className = "box player2";
      }
    }
  }
}

// Instantiation

const player1 = new Player("Deep Space Nine", 100, "Blaster", '<img src="./media/players/player1.png" alt="Deep Space Nine"></img>');
const player2 = new Player("Millenium Falcon", 100, "Blaster", '<img src="./media/players/player2.png" alt="Millenium Falcon"></img>');

const players = new Player();
players.genaratePlayers();

////////////////////////////////////////////////////////////////////////////////////////////////////

// placePlayers() {
//   /**
//    * Placement des joueurs sur le plateau
//    */
//       let accessibleCells = this.getEmptyCells();
//       let player1Position = Math.floor(Math.random() * (accessibleCells.length));
//       let player1Pos = accessibleCells[player1Position];
//       this.board[player1Pos.X][player1Pos.Y].player = player1;
//       player1.position = this.board[player1Pos.X][player1Pos.Y];

//       let player2Position = Math.floor(Math.random() * (accessibleCells.length));
//       let player2Pos = accessibleCells[player2Position];
//       this.board[player2Pos.X][player2Pos.Y].player = player2;
//       player2.position = this.board[player2Pos.X][player2Pos.Y];
//       if (this.board[player1Pos.X] === this.board[player2Pos.X] || this.board[player1Pos.Y] === this.board[player2Pos.Y]) {
//           player1.position.player = null;
//           player2.position.player = null;
//           this.placePlayers();
//           console.log("reroll");
//       }
//   }

//   playerProximity() {
//     /**
//      * Détection de la proximité des joueurs
//      */
//         var sideBySide = false;
//         for (let x = 0; x < this.gameMap.board.length; x++) {
//             for (let y = 0; y < this.gameMap.board.length; y++) {
//                 if (this.gameMap.board[x][y].player == this.currentPlayer) { 
//                     if (x < 9 && this.gameMap.board[x + 1][y].player == this.currentEnemy){
//                         sideBySide = true;
//                     }
//                     else if (x > 0 && currentGame.gameMap.board[x - 1][y].player == currentGame.currentEnemy){
//                         sideBySide = true;
//                     }
//                     else if (y < 9 && currentGame.gameMap.board[x][y + 1].player == currentGame.currentEnemy){
//                         sideBySide = true;
//                     }
//                     else if (y > 0 && currentGame.gameMap.board[x][y - 1].player == currentGame.currentEnemy){
//                         sideBySide = true;
//                     }
//                 }
//             }
//         }
//         return sideBySide;
//     }