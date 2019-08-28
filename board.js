class Board {
  constructor(row, box, unreachableBox) {
    this._row = row;
    this._box = box;
    this._unreachableBox = unreachableBox;
    this._player1;
    this._player2;
    this._weapon1;
    this._weapon2;
    this._weapon3;
    this._weapon4;
  }

  generateBoard() {
    // Génération de 10 lignes
    for (let i = 0; i < 10; i++) {
      const newRow = document.createElement("div");
      newRow.className = "row";
      board.appendChild(newRow);

      // Génération de 10 boites sur chaque ligne
      for (let y = 0; y < 10; y++) {
        const newBox = document.createElement("div");
        newBox.className = `box empty y-${i} x-${y}`;
        newRow.appendChild(newBox);
      }
    }
  }

  generateIdForEachBox() {
    const boxes = document.querySelectorAll(".box");

    let index = 0;

    for (let eachBox of boxes) {
      eachBox.id = index++;
    }
  }

  generateUnreachableBoxes() {
    // Récupération du tableau contenant les 100 boîtes
    const boxes = document.querySelectorAll(".box");

    // Génération aléatoire d'environ 14 asteroids (parfois moins si elles se superposent)
    for (let i = 0; i < 14; i++) {
      this._unreachableBox = boxes[Math.floor(Math.random() * boxes.length)];
      // On ajoute aux div la classe "unreachable" et on supprime la classe "empty"
      this._unreachableBox.classList.add("unreachable");
      this._unreachableBox.classList.remove("empty");
    }
    console.log(this._unreachableBox); // Affihe la dernière unreachable créée <div class="box y-3 x-4 unreachable"></div>
  }

  genaratePlayers() {
    // Récupération du tableau contenant les boîtes qui ne sont pas des asteroids
    const emptyBoxes = document.querySelectorAll(".empty");

    this._player1 = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    // On ajoute à la div la classe "player1" et on lui supprime la classe "empty"
    this._player1.classList.add("player1");
    this._player1.classList.remove("empty");
    console.log(this._player1); // Afiche <div class="box y-1 x-1 player1"></div>

    // Récupération du tableau contenant les boîtes qui ne sont pas des asteroids ni player1
    const withoutPlayer1Boxes = document.querySelectorAll(".empty");

    this._player2 =
      withoutPlayer1Boxes[
        Math.floor(Math.random() * withoutPlayer1Boxes.length)
      ];
    // On ajoute à la div la classe "player2" et on lui supprime la classe "empty"
    this._player2.classList.add("player2");
    this._player2.classList.remove("empty");
    console.log(this._player2);
  }

  generateWeapons() {
    // Récupération du tableau contenant les boîtes qui ne sont pas des asteroids
    const emptyBoxes = document.querySelectorAll(".empty");

    this._weapon1 = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    // On ajoute à la div la classe "weapon1" et on lui supprime la classe "empty"
    this._weapon1.classList.add("weapon1");
    this._weapon1.classList.remove("empty");
    console.log(this._weapon1);

    // Récupération du tableau contenant les boîtes qui ne sont pas des asteroids ni weapon1
    const withoutWeapon1Boxes = document.querySelectorAll(".empty");

    this._weapon2 =
      withoutWeapon1Boxes[
        Math.floor(Math.random() * withoutWeapon1Boxes.length)
      ];
    // On ajoute à la div la classe "weapon2" et on lui supprime la classe "empty"
    this._weapon2.classList.add("weapon2");
    this._weapon2.classList.remove("empty");
    console.log(this._weapon2);

    // Récupération du tableau contenant les boîtes qui ne sont pas des asteroids ni weapon1 ni weapon2
    const withoutWeapon2Boxes = document.querySelectorAll(".empty");

    this._weapon3 =
      withoutWeapon2Boxes[
        Math.floor(Math.random() * withoutWeapon2Boxes.length)
      ];
    // On ajoute à la div la classe "weapon3" et on lui supprime la classe "empty"
    this._weapon3.classList.add("weapon3");
    this._weapon3.classList.remove("empty");
    console.log(this._weapon3);

    // Récupération du tableau contenant les boîtes qui ne sont pas des asteroids ni weapon1 ni weapon2 ni weapon3
    const withoutWeapon3Boxes = document.querySelectorAll(".empty");

    this._weapon4 =
      withoutWeapon3Boxes[
        Math.floor(Math.random() * withoutWeapon3Boxes.length)
      ];
    // On ajoute à la div la classe "weapon4" et on lui supprime la classe "empty"
    this._weapon4.classList.add("weapon4");
    this._weapon4.classList.remove("empty");
    console.log(this._weapon4);
  }
}

// Instantiation

const newBoard = new Board(10, 10, 14);

newBoard.generateBoard();
newBoard.generateIdForEachBox();
newBoard.generateUnreachableBoxes();
newBoard.genaratePlayers();
newBoard.generateWeapons();

///////////////////////////////////////////////////////////////

// getEmptyBoxes() {

//   const boxes = document.querySelectorAll(".box");

//   //plutot supprimer nos 20 éléments du tableau .box

//   this._fullBox = [this._player1, this._player2, this._weapon1, this._weapon2, this._weapon3, this._weapon4, this._unreachableBox];

//   for (let eachBox of boxes) {
//     // if (eachBox != this._fullBox) {
//     //   this._emptyBoxes.push(eachBox);
//     // }
//     if (eachBox != this._player1 || eachBox != this._player2 ||
//       eachBox != this._weapon1 || eachBox != this._weapon2 ||
//       eachBox != this._weapon3 || eachBox != this._weapon4 ||
//       eachBox != this._unreachableBox) {

//       eachBox = this._emptyBox;
//     }

//     // console.log(boxes);
//     // console.log(this._player1);
//   }
//   console.log(this._emptyBox);
//   console.log(this._fullBox);
// }

///////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////

//   // this._weapons = boxes[Math.floor(Math.random() * boxes.length)];
// } else if (this._weapon2 == this._player1 || this._weapon2 == this._player2 ||
//   this._weapon2 == this._weapon1 || this._weapon2 == this._weapon3 ||
//   this._weapon2 == this._weapon4) {
//   console.log("noSuperpositionWeapon2");
//   // this._weapons = boxes[Math.floor(Math.random() * boxes.length)];
// } else if (this._weapon3 == this._player1 || this._weapon3 == this._player2 ||
//   this._weapon3 == this._weapon1 || this._weapon3 == this._weapon2 ||
//   this._weapon3 == this._weapon4) {
//   console.log("noSuperpositionWeapon3");
//   // this._weapons = boxes[Math.floor(Math.random() * boxes.length)];
// } else if (this._weapon3 == this._weapon4) {
//   console.log("noSuperpositionWeapon4");
//   // this._weapons = boxes[Math.floor(Math.random() * boxes.length)];
// }
// console.log(boxes);

///////////////////////////////////////////////////////////////
//   while (route[5] == player1 || route[5] == (player1 + 1) || route[5] == (player1 - 1) ||
//     route[5] == (player1 + 10) || route[5] == (player1 - 10) || route[5] == (player1 + 9) ||
//     route[5] == (player1 - 9) || route[5] == (player1 + 11) || route[5] == (player1 - 11) ||
//     route[5] == weapon1 || route[5] == weapon2 || route[5] == weapon3 || route[5] == weapon4) {
//     route[5] = Math.floor(Math.random() * 100);
// }
///////////////////////////////////////////////////////////////

//   noSideBySide() {

//     const boxes = document.querySelectorAll(".box");

//     while (this._player1 == this._player2 || this._player1 == (this._player2 + 1) ||
//       this._player1 == (this._player2 - 1) || this._player1 == (this._player2 + 10) ||
//       this._player1 == (this._player2 - 10) || this._player1 == (this._player2 + 9) ||
//       this._player1 == (this._player2 - 9) || this._player1 == (this._player2 + 11) ||
//       this._player1 == (this._player2 - 11)) {
//       this._player1 = boxes[Math.floor(Math.random() * boxes.length)];
//     }
//     console.log(this._player1);
//     console.log(this._player2);
//   }

///////////////////////////////////////////////////////////////

// noSuperposition() {
//   const boxes = document.querySelectorAll(".box");

//   if (
//     this._weapon4 == this._weapon3 ||
//     this._weapon4 == this._weapon2 ||
//     this._weapon3 == this._weapon2 ||
//     this._weapon4 == this._weapon1 ||
//     this._weapon3 == this._weapon1 ||
//     this._weapon2 == this._weapon1 ||
//     this._weapon4 == this._player2 ||
//     this._weapon3 == this._player2 ||
//     this._weapon2 == this._player2 ||
//     this._weapon1 == this._player2 ||
//     this._weapon4 == this._player1 ||
//     this._weapon3 == this._player1 ||
//     this._weapon2 == this._player1 ||
//     this._weapon1 == this._player1 ||
//     this._player2 == this._player1
//   ) {
//     console.log("noSuperposition");
//     this._players = boxes[Math.floor(Math.random() * boxes.length)];
//     this._weapons = boxes[Math.floor(Math.random() * boxes.length)];
//   }
//   console.log(boxes);
// }

///////////////////////////////////////////////////////////////

// generateIdForEachBox() {

//   const boxes = document.querySelectorAll(".box");

//   let index = 0;

//   for (let eachBox of boxes) {
//     eachBox.id = index++;
//   }
// }
