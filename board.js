class Board {
  constructor(row, box, unreachableBox, players, weapons) {
    this._row = row;
    this._box = box;
    this._unreachableBox = unreachableBox;
    this._players = players;
    this._weapons = weapons;
  }

  generateBoard() {

    for (let i = 0; i < 10; i++) {
      const newRow = document.createElement("div");
      newRow.className = "row";
      board.appendChild(newRow);

      for (let y = 0; y < 10; y++) {
        const newBox = document.createElement("div");
        newBox.className = `box y-${i} x-${y}`;
        newRow.appendChild(newBox);
      }
    }
  }

  generateId() {

    const boxes = document.querySelectorAll(".box");

    let index = 0;

    for (let eachBox of boxes) {
      eachBox.id = index++;
    }
  }

  generateUnreachableBoxes() {

    const boxes = document.querySelectorAll(".box");

    for (let i = 0; i < 14; i++) {
      this.unreachableBox = boxes[Math.floor(Math.random() * boxes.length)];
      this.unreachableBox.className = `box unreachable`;
    }
  }

  genaratePlayers() {

    const boxes = document.querySelectorAll(".box");

    // generate one player of each in random boxes
    for (let i = 0; i < 2; i++) {
      this._players = boxes[Math.floor(Math.random() * boxes.length)];
      if (i === 0) {
        this._players.className = `box player1`;
      } else {
        this._players.className = `box player2`;
      }
      console.log(this._players);
    }
  }

  generateWeapons() {

    const boxes = document.querySelectorAll(".box");

    for (let i = 0; i < 4; i++) {
      this._weapons = boxes[Math.floor(Math.random() * boxes.length)];
      if (i === 0) {
        this._weapons.className = `box weapon1`;
      } else if (i === 1) {
        this._weapons.className = `box weapon2`;
      } else if (i === 2) {
        this._weapons.className = `box weapon3`;
      } else if (i === 3) {
        this._weapons.className = `box weapon4`;
      }
      console.log(this._weapons);
    }
  }
}

// Instantiation

const newBoard = new Board(4, 4, 2, 2, 4);

newBoard.generateBoard();
newBoard.generateId();
newBoard.generateUnreachableBoxes();
newBoard.genaratePlayers();
newBoard.generateWeapons();

// newBoard.noSideBySide();

// noSideBySide() {
//   while (this.players[1] == this.players || this.players[1] == (this.players + 1) ||
//     this.players[1] == (this.players - 1) || this.players[1] == (this.players + 10) ||
//     this.players[1] == (this.players - 10) || this.players[1] == (this.players + 9) ||
//     this.players[1] == (this.players - 9) || this.players[1] == (this.players + 11) ||
//     this.players[1] == (this.players - 11)) {
//     this.players[1] = Math.floor(Math.random() * this.boxes.length);
//   }
//   console.log(this.players[1]);
// }

// playerProximity() {
//   /**
//    * Détection de la proximité des joueurs
//    */
//       var sideBySide = false;
//       for (let x = 0; x < this.gameMap.board.length; x++) {
//           for (let y = 0; y < this.gameMap.board.length; y++) {
//               if (this.gameMap.board[x][y].player == this.currentPlayer) {
//                   if (x < 9 && this.gameMap.board[x + 1][y].player == this.currentEnemy){
//                       sideBySide = true;
//                   }
//                   else if (x > 0 && currentGame.gameMap.board[x - 1][y].player == currentGame.currentEnemy){
//                       sideBySide = true;
//                   }
//                   else if (y < 9 && currentGame.gameMap.board[x][y + 1].player == currentGame.currentEnemy){
//                       sideBySide = true;
//                   }
//                   else if (y > 0 && currentGame.gameMap.board[x][y - 1].player == currentGame.currentEnemy){
//                       sideBySide = true;
//                   }
//               }
//           }
//       }
//       return sideBySide;
//   }

// recupererUneCaseBlanche: function() // Choisis au hasard une case blanche, pour mettre en paramètre de la fonction compterCasesAccessibles
// {
// 	let caseBlanche = "";
// 	while(caseBlanche === "")
// 	{
// 		let ligneAleatoire = Math.floor(Math.random()*Plateau.nbLignes); // On pioche aléatoirement une ligne et une colonne pour créer les coordonnées d'une case
// 		let colonneAleatoire = Math.floor(Math.random()*Plateau.nbColonnes);
// 		if (Plateau.grille[ligneAleatoire][colonneAleatoire].estVide())
// 		{
// 			caseBlanche = Plateau.grille[ligneAleatoire][colonneAleatoire];
// 		}
// 		else
// 		{ // On recommence
// 		}
// 	}
// 	return caseBlanche;
// }

// getEmptyCells() {
//   /**
//    * Récupération des cases vides
//    */
//       let emptyCells = new Array();
//       for (let x = 0; x < this.mapSize; x++) {
//           for (let y = 0; y < this.mapSize; y++) {
//               if (this.board[x][y].barrel == false) {emptyCells.push({ X: x, Y: y });}
//           }
//       }
//       return emptyCells;
//   }

// lightAccessibleCells() {
//   /**
//    * Surlignage des cases acccessibles au joueur
//    */
//       let myBoard = currentGame.gameMap.board;
//       for (let x = 0; x < currentGame.gameMap.board.length; x++) {
//           for (let y = 0; y < currentGame.gameMap.board.length; y++) {
//               if (myBoard[x][y].highlight == true && myBoard[x][y].barrel == false && myBoard[x][y].player == null) {
//                   $('#' + x + y).addClass("light");
//               }
//               else {
//                   this.board[x][y].highlight = false;
//               }
//           }
//       }
//   }