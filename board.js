class Board {
  constructor() {
    this.board;
    this.boxes;
    this.row;
    this.box;
    this.players;
    this.weapon0;
    this.weapon1;
    this.weapon2;
    this.weapon3;
    this.weapon4;
  }

  generateBoard() {
    // Selection of id="board" on the dom
    this.board = document.querySelector("#board");

    for (this.row = 0; this.row < 10; this.row++) {
      const newRow = document.createElement("div");
      newRow.className = "row";
      board.appendChild(newRow);

      for (this.box = 0; this.box < 10; this.box++) {
        const newBox = document.createElement("div");
        newBox.className = `box y-${this.row} x-${this.box}`;
        newRow.appendChild(newBox);
      }
    }
  }

  generateUnreachableBoxes() {
    // Selection of class="box" on the dom
    this.boxes = document.querySelectorAll(".box");

    const numberOfUnreachableBoxes = 14;
    // console.log(boxes); renvoie NodeList(100) la liste des 100 div.box dans un tableau
    // console.log(numberOfUnreachableBoxes); renvoie "12"

    for (let i = 0; i < numberOfUnreachableBoxes; i++) {
      const unreachableBox = this.boxes[
        Math.floor(Math.random() * this.boxes.length)
      ];
      unreachableBox.className = " box unreachable";
      // console.log(unreachableBox);
      // renvoie <div class=" box unreachable"></div>
    }
    // console.log(this.boxes);
    // renvoie la liste des 100 div.box dans des tableaux
    // console.log(numberOfUnreachableBoxes);
    // renvoie "12"
  }

  genaratePlayers() {
    this.players = ["player1", "player2"];

    // generate one player of each in random boxes
    for (let i = 0; i < this.players.length; i++) {
      const newPlayer = this.boxes[
        Math.floor(Math.random() * this.boxes.length)
      ];
      if (i === 0) {
        newPlayer.className = `box player1 y-${this.row} x-${this.box}`;
      } else {
        newPlayer.className = `box player2 y-${this.row} x-${this.box}`;
      }
    }
  }

  generateWeapons() {
    const weapons = [this.weapon1, this.weapon2, this.weapon3, this.weapon4];
    for (let i = 0; i < weapons.length; i++) {
      const newWeapon = this.boxes[
        Math.floor(Math.random() * this.boxes.length)
      ];
      if (i === 0) {
        newWeapon.className = `box weapon1`;
      } else if (i === 1) {
        newWeapon.className = `box weapon2`;
      } else if (i === 2) {
        newWeapon.className = `box weapon3`;
      } else if (i === 3) {
        newWeapon.className = `box weapon4`;
      }
    }
  }
}

// Instantiation

const newBoard = new Board();

newBoard.generateBoard();
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