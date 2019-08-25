class Board {
  constructor(row, box, unreachableBox, players, weapons) {
    this._row = row;
    this._box = box;
    this._unreachableBox = unreachableBox;
    this._players = players;
    this._player1;
    this._player2;
    this._weapons = weapons;
    this._weapon1;
    this._weapon2;
    this._weapon3;
    this._weapon4;
    this._fullBox = [];
    this._emptyBoxes = [];

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

  generateIdForEachBox() {

    const boxes = document.querySelectorAll(".box");

    let index = 0;

    for (let eachBox of boxes) {
      eachBox.id = index++;
    }
  }

  generateUnreachableBoxes() {

    const boxes = document.querySelectorAll(".box");

    for (let i = 0; i < 14; i++) {
      this._unreachableBox = boxes[Math.floor(Math.random() * boxes.length)];
      this._unreachableBox.className = `box unreachable`;
      console.log(this._unreachableBox);
    }
  }

  genaratePlayers() {

    const boxes = document.querySelectorAll(".box");

    for (let i = 0; i < 2; i++) {
      this._players = boxes[Math.floor(Math.random() * boxes.length)];
      if (i === 0) {
        this._players.className = `box player1`;
        this._player1 = this._players;
        console.log(this._player1);
      } else {
        this._players.className = `box player2`;
        this._player2 = this._players;
        console.log(this._player2);
      }
    }
  }

  generateWeapons() {

    const boxes = document.querySelectorAll(".box");

    for (let i = 0; i < 4; i++) {
      this._weapons = boxes[Math.floor(Math.random() * boxes.length)];
      if (i === 0) {
        this._weapons.className = `box weapon1`;
        this._weapon1 = this._weapons;
        console.log(this._weapon1);
      } else if (i === 1) {
        this._weapons.className = `box weapon2`;
        this._weapon2 = this._weapons;
        console.log(this._weapon2);
      } else if (i === 2) {
        this._weapons.className = `box weapon3`;
        this._weapon3 = this._weapons;
        console.log(this._weapon3);
      } else if (i === 3) {
        this._weapons.className = `box weapon4`;
        this._weapon4 = this._weapons;
        console.log(this._weapon4);
      }
      // console.log(this._weapons);
      // const weaponsClasses = this._weapons.classList;
      // console.log(weaponsClasses[1]);
    }
    // let nodeList = boxes.item;
  }

  getEmptyBoxes() {

    const boxes = document.querySelectorAll(".box");

    this._fullBox = [this._player1, this._player2, this._weapon1, this._weapon2, this._weapon3, this._weapon4, this._unreachableBox];

    for (const eachBox of boxes) {
      if (eachBox !== this._fullBox) {
        this._emptyBox.push(eachBox);
      }
      // if (eachBox !== this._player1 || eachBox !== this._player2 ||
      //   eachBox !== this._weapon1 || eachBox !== this._weapon2 ||
      //   eachBox !== this._weapon3 || eachBox !== this._weapon4 ||
      //   eachBox !== this._unreachableBox) {


      // this._emptyBox = (boxes !== this._fullBox);
      // console.log(this._emptyBox);
      // console.log(this._fullBox);

    }
    console.log(this._emptyBox);
    console.log(this._fullBox);
    console.log(boxes);
    console.log(this._player1);
  }


  noSuperposition() {

    const boxes = document.querySelectorAll(".box");

    while (this._player2 == this._player1 || this._weapon1 == this._player1 ||
      this._weapon2 == this._player1 || this._weapon3 == this._player1 ||
      this._weapon4 == this._player1 || this._weapon1 == this._player2 ||
      this._weapon2 == this._player2 || this._weapon3 == this._player2 ||
      this._weapon4 == this._player2 || this._weapon2 == this._weapon1 ||
      this._weapon3 == this._weapon1 || this._weapon4 == this._weapon1 ||
      this._weapon3 == this._weapon2 || this._weapon4 == this._weapon2 ||
      this._weapon4 == this._weapon3) {
      console.log("noSuperposition");
      this._player1 = boxes[Math.floor(Math.random() * boxes.length)];
      this._player2 = boxes[Math.floor(Math.random() * boxes.length)];
      this._weapon1 = boxes[Math.floor(Math.random() * boxes.length)];
      this._weapon2 = boxes[Math.floor(Math.random() * boxes.length)];
      this._weapon3 = boxes[Math.floor(Math.random() * boxes.length)];
      this._weapon4 = boxes[Math.floor(Math.random() * boxes.length)];
    }
  }

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
}

// Instantiation

const newBoard = new Board(10, 10, 14, 2, 4);

newBoard.generateBoard();
newBoard.generateIdForEachBox();
newBoard.generateUnreachableBoxes();
newBoard.genaratePlayers();
newBoard.generateWeapons();
newBoard.getEmptyBoxes();
newBoard.noSuperposition();
// newBoard.noSideBySide();

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