class Board {
  constructor(row, box, unreachableBox, players, weapons) {
    this._row = row;
    this._box = box;
    this._unreachableBox = unreachableBox;
    this._players = players;
    this._weapons = weapons;
  }

  generateBoard() {
    // Initialization of the index; exit condition; increment by + 1
    const board = document.querySelector("#board");

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

  generateUnreachableBoxes() {
    // Selection of class="box" on the dom
    const boxes = document.querySelectorAll(".box");
    console.log(boxes[1]);

    const numberOfUnreachableBoxes = 14;
    // console.log(boxes); renvoie NodeList(100) la liste des 100 div.box dans un tableau
    // console.log(numberOfUnreachableBoxes); renvoie "12"

    for (let i = 0; i < numberOfUnreachableBoxes; i++) {
      const unreachableBox = boxes[Math.floor(Math.random() * boxes.length)];
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
    const boxes = document.querySelectorAll(".box");
    // generate one player of each in random boxes
    for (let i = 0; i < 2; i++) {
      const newPlayer = boxes[Math.floor(Math.random() * boxes.length)];
      if (i === 0) {
        newPlayer.className = `box player1 y-${this._row} x-${this._box}`;
      } else {
        newPlayer.className = `box player2 y-${this._row} x-${this._box}`;
      }
      console.log(newPlayer);
      console.log(boxes[1]);
    }
    console.log(boxes[4]);
  }

  generateWeapons() {
    const boxes = document.querySelectorAll(".box");
    for (let i = 0; i < 4; i++) {
      const newWeapon = boxes[Math.floor(Math.random() * boxes.length)];
      if (i === 0) {
        newWeapon.className = `box weapon1`;
      } else if (i === 1) {
        newWeapon.className = `box weapon2`;
      } else if (i === 2) {
        newWeapon.className = `box weapon3`;
      } else if (i === 3) {
        newWeapon.className = `box weapon4`;
      }
      console.log(newWeapon);
    }
  }
}

// Instantiation

const newBoard = new Board(4, 4, 2, 2, 4);

newBoard.generateBoard();
newBoard.generateUnreachableBoxes();
newBoard.genaratePlayers();
newBoard.generateWeapons();
