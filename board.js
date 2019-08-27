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

    for (let i = 0; i < 10; i++) {
      const newRow = document.createElement("div");
      newRow.className = "row";
      board.appendChild(newRow);

      for (let y = 0; y < 10; y++) {
        const newBox = document.createElement("div");
        newBox.className = `box empty y-${i} x-${y}`;
        newRow.appendChild(newBox);
      }
    }
  }

  // generateIdForEachBox() {

  //   const boxes = document.querySelectorAll(".box");

  //   let index = 0;

  //   for (let eachBox of boxes) {
  //     eachBox.id = index++;
  //   }
  // }

  generateUnreachableBoxes() {

    const emptyBoxes = document.querySelectorAll(".empty");

    for (let i = 0; i < 14; i++) {
      this._unreachableBox = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
      this._unreachableBox.className = `box unreachable`;
    }
  }

  genaratePlayers() {

    const emptyBoxes = document.querySelectorAll(".empty");

    this._player1 = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    this._player1.className = `box player1`;
    console.log(this._player1);

    const LeftPlayer1.className = `box player1`;
    const withoutPlayer1AndProximityBoxes = document.querySelectorAll(".empty");

    this._player2 = withoutPlayer1Boxes[Math.floor(Math.random() * withoutPlayer1Boxes.length)];
    this._player2.className = `box player2`;
    console.log(this._player2);
  }

  generateWeapons() {

    const emptyBoxes = document.querySelectorAll(".empty");

    this._weapon1 = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    this._weapon1.className = `box weapon1`;
    console.log(this._weapon1);

    const withoutWeapon1Boxes = document.querySelectorAll(".empty");

    this._weapon2 = withoutWeapon1Boxes[Math.floor(Math.random() * withoutWeapon1Boxes.length)];
    this._weapon2.className = `box weapon2`;
    console.log(this._weapon2);

    const withoutWeapon2Boxes = document.querySelectorAll(".empty");

    this._weapon3 = withoutWeapon2Boxes[Math.floor(Math.random() * withoutWeapon2Boxes.length)];
    this._weapon3.className = `box weapon3`;
    console.log(this._weapon3);

    const withoutWeapon3Boxes = document.querySelectorAll(".empty");

    this._weapon4 = withoutWeapon3Boxes[Math.floor(Math.random() * withoutWeapon3Boxes.length)];
    this._weapon4.className = `box weapon4`;
    console.log(this._weapon4);

  }
}

// Instantiation

const newBoard = new Board(10, 10, 14);

newBoard.generateBoard();
// newBoard.generateIdForEachBox();
newBoard.generateUnreachableBoxes();
newBoard.genaratePlayers();
newBoard.generateWeapons();
newBoard.noSuperposition();