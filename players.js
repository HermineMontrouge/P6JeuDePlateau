// class Player {
//   constructor(name, hp, weapon, image) {
//     this.name = name;
//     this.hp = hp;
//     this.weapon = weapon;
//     this.image = image;
//     this.boxes;
//     this.x = x;
//     this.y = y;
//   }
// }



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