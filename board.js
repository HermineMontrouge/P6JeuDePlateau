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
    this._y = 0;
  }

  generateBoard() {
    // Generate 10 lines
    for (this._x = 0; this._x < 10; this._x++) {
      const newRow = document.createElement("div");
      newRow.className = "row";
      board.appendChild(newRow);
      // Generate 1O boxes in each lines
      for (this._y = 0; this._y < 10; this._y++) {
        const newBox = document.createElement("div");
        newBox.className = `box x-${this._x} y-${this._y} empty`;
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
    // recovery of the table containing the 100 boxes
    const boxes = document.querySelectorAll(".box");

    // Random generation of 14 asteroids (sometimes less if they overlap)
    for (let i = 0; i < 14; i++) {
      this._unreachableBox = boxes[Math.floor(Math.random() * boxes.length)];
      // We add the class "unreachable" and we delete the class "empty" of each <div asteroid>
      this._unreachableBox.classList.replace("empty", "unreachable");
    }
    console.log(boxes);
  }

  genaratePlayers() {
    // Recovery of the table containing the boxes that are not asteroids
    const emptyBoxes = document.querySelectorAll(".empty");

    this._player1 = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    // We add to the div the class "player1" and we delete the class "empty"
    this._player1.classList.replace("empty", "player1");
    console.log(this._player1);

    // We wish that player 2 does not appear side by side of player1
    // For each box whose index of the array is -1 +1 -10 +10 of the index of player1 remove the class empty
    const boxes = document.querySelectorAll(".box");

    for (const box of boxes) {
      if ((parseInt(box.id) - 1) == this._player1.id ||
        (parseInt(box.id) + 1) == this._player1.id ||
        (parseInt(box.id) - this._x) == this._player1.id ||
        (parseInt(box.id) + this._x) == this._player1.id) {
        box.classList.replace("empty", "adjacentBox");
      }
    }

    // Recovery of the table containing the boxes that are not asteroids neither player1 nor adjacent player1
    const withoutPlayer1Boxes = document.querySelectorAll(".empty");

    this._player2 =
      withoutPlayer1Boxes[
        Math.floor(Math.random() * withoutPlayer1Boxes.length)
      ];
    // We add to the div the class "player2" and we delete the class "empty"
    this._player2.classList.replace("empty", "player2");
    console.log(this._player2);
  }

  generateWeapons() {
    // Recovery of the table containing the boxes that are not asteroids
    const emptyBoxes = document.querySelectorAll(".empty");

    this._weapon1 = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    // We add to the div the class "weapon1" and we delete the class "empty"
    this._weapon1.classList.replace("empty", "weapon1");
    console.log(this._weapon1);

    // Recovery of the array containing the boxes that are not asteroids nor weapon1
    const withoutWeapon1Boxes = document.querySelectorAll(".empty");

    this._weapon2 =
      withoutWeapon1Boxes[
        Math.floor(Math.random() * withoutWeapon1Boxes.length)
      ];
    // We add to the div the class "weapon2" and we delete the class "empty"
    this._weapon2.classList.replace("empty", "weapon2");
    console.log(this._weapon2);

    // Recovery of the array containing the boxes that are not asteroids neither weapon1 nor weapon2
    const withoutWeapon2Boxes = document.querySelectorAll(".empty");

    this._weapon3 =
      withoutWeapon2Boxes[
        Math.floor(Math.random() * withoutWeapon2Boxes.length)
      ];
    // We add to the div the class "weapon3" and we delete the class "empty"
    this._weapon3.classList.replace("empty", "weapon3");
    console.log(this._weapon3);

    // Recovery of the array containing the boxes that are not asteroids neither weapon1 nor weapon2 nor weapon3
    const withoutWeapon3Boxes = document.querySelectorAll(".empty");

    this._weapon4 =
      withoutWeapon3Boxes[
        Math.floor(Math.random() * withoutWeapon3Boxes.length)
      ];
    // We add to the div the class "weapon4" and we delete the class "empty"
    this._weapon4.classList.replace("empty", "weapon4");
    console.log(this._weapon4);
  }

  highLight() {

    const player1Id = this._player1.id;
    // class of the position x of player 1 
    const playerPosX = this._player1.classList.item(1);
    // console.log(playerPosX); Can display for example "x-3"

    this._player1.classList.add("highlight");

    // Loop on 3 trajectories (3 boxes in a row)
    for (let i = 1; i <= 3; i++) {
      const rigthBox = document.getElementById(parseInt(player1Id) + i);
      // If the element with the id (number of ID of player1 + the value of i) does not have a class "unreachable" 
      // AND that same element contains the same class x
      if (!rigthBox.classList.contains("unreachable") && rigthBox.classList.contains(playerPosX)) {
        // Add "highlight" class to this element
        rigthBox.classList.add("highlight");
      } else {
        // If the element with the id (number of the id of the player 1 + the value of i) has a class unreachable 
        // or is not on the same x then we stop the loop to not continue the trajectory of highlight
        break;
      }
    }

    for (let i = 1; i <= 3; i++) {
      const leftBox = document.getElementById(parseInt(player1Id) - i);
      if (!leftBox.classList.contains("unreachable") && leftBox.classList.contains(playerPosX)) {
        leftBox.classList.add("highlight");
      } else {
        break;
      }
    }

    for (let i = 1; i <= 3; i++) {
      const bottomBox = document.getElementById(parseInt(player1Id) + (i * 10));
      if (bottomBox && !bottomBox.classList.contains("unreachable")) {
        bottomBox.classList.add("highlight");
      } else {
        break;
      }
    }

    for (let i = 1; i <= 3; i++) {
      const topBox = document.getElementById(parseInt(player1Id) - (i * 10));
      if (topBox && !topBox.classList.contains("unreachable")) {
        topBox.classList.add("highlight");
      } else {
        break;
      }
    }
  }
}

// Instantiation

const newBoard = new Board(10, 10, 14);

newBoard.generateBoard();
newBoard.generateIdForEachBox();
newBoard.generateUnreachableBoxes();
newBoard.genaratePlayers();
newBoard.highLight();
newBoard.generateWeapons();


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



// for (const box of boxes) {
//   if ((parseInt(box.id) - 1) == this._player1.id ||
//     (parseInt(box.id) - 2) == this._player1.id ||
//     (parseInt(box.id) - 3) == this._player1.id ||
//     (parseInt(box.id) + 1) == this._player1.id ||
//     (parseInt(box.id) + 2) == this._player1.id ||
//     (parseInt(box.id) + 3) == this._player1.id ||
//     (parseInt(box.id) - this._x) == this._player1.id ||
//     (parseInt(box.id) - ((this._x) * 2)) == this._player1.id ||
//     (parseInt(box.id) - ((this._x) * 3)) == this._player1.id ||
//     (parseInt(box.id) + this._x) == this._player1.id ||
//     (parseInt(box.id) + ((this._x) * 2)) == this._player1.id ||
//     (parseInt(box.id) + ((this._x) * 3)) == this._player1.id) {
//     if (!box.classList.contains("unreachable")) {
//       box.classList.add("highlight");
//     }
//   }
// }