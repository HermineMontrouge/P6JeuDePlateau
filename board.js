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
    this._x = 0;
  }

  generateBoard() {
    // Génère 10 lignes
    for (this._x = 0; this._x < 10; this._x++) {
      const newRow = document.createElement("div");
      newRow.className = "row";
      board.appendChild(newRow);
      // génère 1O boîtes dans chaque ligne
      for (let y = 0; y < 10; y++) {
        const newBox = document.createElement("div");
        newBox.className = `box x ${this._x} y ${y} empty`;
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
  }

  genaratePlayers() {
    // Récupération du tableau contenant les boîtes qui ne sont pas des asteroids
    const emptyBoxes = document.querySelectorAll(".empty");

    this._player1 = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    // On ajoute à la div la classe "player1" et on lui supprime la classe "empty"
    this._player1.classList.add("player1");
    this._player1.classList.remove("empty");

    // On souhaite que player 2 ne s'affiche pas côte à côte de player1
    const boxes = document.querySelectorAll(".box");
    //Pour chaque box dont l'indice du tableau est -1 +1 -10 +10 de l'indice de player1 remove la class empty
    for (const box of boxes) {
      if ((parseInt(box.id) - 1) == this._player1.id ||
        (parseInt(box.id) + 1) == this._player1.id ||
        (parseInt(box.id) - this._x) == this._player1.id ||
        (parseInt(box.id) + this._x) == this._player1.id) {
        box.classList.add("adjacentBox");
        box.classList.remove("empty");
      }
    }

    // Récupération du tableau contenant les boîtes qui ne sont pas des asteroids ni player1 ni adjacentes player1
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
newBoard.noProximityForPlayers();

// genaratePlayers() {
//   // Récupération du tableau contenant les boîtes qui ne sont pas des asteroids
//   const emptyBoxes = document.querySelectorAll(".empty");

//   this._player1 = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
//   // On ajoute à la div la classe "player1" et on lui supprime la classe "empty"
//   this._player1.classList.add("player1");
//   this._player1.classList.remove("empty");
//   // this._player1.classList.item(i, y);

//   // Récupération de la chaine de caractère x (index colonne) de la class player1 positionné en 2eme position
//   let positionXPlayer1 = this._player1.classList.item(2);
//   // creation d'une variable qui correspond à x-1
//   let topXOfPlayer1 = positionXPlayer1 - 1;
//   // creation d'une variable qui correspond à x+1 en préciant parseInt() pour qu'il ne concatène pas mais additionne
//   let bottomXOfPlayer1 = parseInt(positionXPlayer1) + 1;

//   // Récupération de la chaine de caractère y (index ligne) de la class player1 positionné en 4eme position
//   let positionYPlayer1 = this._player1.classList.item(4);
//   // creation d'une variable qui correspond à y-1
//   let leftYOfPlayer1 = positionYPlayer1 - 1;
//   // creation d'une variable qui correspond à y+1 en préciant parseInt() pour qu'il ne concatène pas mais additionne
//   let rigthYOfPlayer1 = parseInt(positionYPlayer1) + 1;

//   // creation des variables left rigth top et bottom auquel on pourra remove la class empty et add leurs nouveaus status
//   let leftBoxOfPlayer1 = document.getElementsByClassName(toString(leftYOfPlayer1));
//   leftBoxOfPlayer1.classList.add("left");
//   leftBoxOfPlayer1.classList.remove("empty");
//   let rigthBoxOfPlayer1 = document.getElementsByClassName(toString(rigthYOfPlayer1));
//   rigthBoxOfPlayer1.classList.add("rigth");
//   rigthBoxOfPlayer1.classList.remove("empty");

//   let topBoxOfPlayer1 = document.getElementsByClassName(toString(topXOfPlayer1));
//   topBoxOfPlayer1.classList.add("top");
//   topBoxOfPlayer1.classList.remove("empty");
//   let bottomBoxOfPlayer1 = document.getElementsByClassName(toString(bottomXOfPlayer1));
//   bottomBoxOfPlayer1.classList.add("bottom");
//   bottomBoxOfPlayer1.classList.remove("empty");

//   // leftBoxOfPlayer1.classList.remove("empty")
//   // leftBoxOfPlayer1.classList.add("left");
//   console.log(positionXPlayer1);
//   console.log(positionYPlayer1);

//   console.log(topXOfPlayer1);
//   console.log(bottomXOfPlayer1);
//   console.log(leftYOfPlayer1);
//   console.log(rigthYOfPlayer1);

//   console.log(leftBoxOfPlayer1);
//   console.log(rigthBoxOfPlayer1);
//   console.log(topBoxOfPlayer1);
//   console.log(bottomBoxOfPlayer1);

// let rigthBoxOfPlayer1 = this._player1 `${y}`+1;
// rigthBoxOfPlayer1.classList.remove("empty")
// rigthBoxOfPlayer1.classList.add("rigth");

// let topBoxOfPlayer1 = this._player1 `${i}`-1;
// topBoxOfPlayer1.classList.remove("empty")
// topBoxOfPlayer1.classList.add("top");

// let bottomBoxOfPlayer1 = this._player1 `${i}`+1;
// bottomBoxOfPlayer1.classList.remove("empty")
// bottomBoxOfPlayer1.classList.add("bottom");