class Board {
  constructor(row, box, unreachableBox) {
    this._row = row;
    this._box = box;
    this._unreachableBox = unreachableBox;
    this._x = 0;
    this._y = 0;
  }

  generateBoard() {
    // Generate 10 lines
    for (this._y = 0; this._y < this._row; this._y++) {
      const newRow = document.createElement("div");
      newRow.className = "row";
      board.appendChild(newRow);
      // Generate 1O boxes in each lines
      for (this._x = 0; this._x < this._box; this._x++) {
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

  generatePlayersAndWeapons() {
    const names = ["player1", "player2", "weapon1", "weapon2", "weapon3", "weapon4"];
    names.forEach(name => {
      this.emptyCells(name);
    });
  }

  emptyCells(name) {
    const emptyBoxes = document.querySelectorAll(".empty");
    let el = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    el.classList.add(name);
    el.classList.remove("empty");

    if (el.getAttribute("class").includes("player")) {
      this.adjacentBoxes(el)
    }

    // eval makes it possible to transform a string into an object
    eval(name)._div = el
    // console.log(eval(name));
  }

  adjacentBoxes(el) {
    // player1 and player2 should not appear side by side or be blocked by asteroids at launch
    let adjacentsId = [(parseInt(el.id) + 1), (parseInt(el.id) - 1), (parseInt(el.id) + this._x), (parseInt(el.id) - this._x)];
    adjacentsId = adjacentsId.filter(v => {
      if (v > 0 && v < 99) return v;
    })
    for (let adjacentId of adjacentsId) {
      let box = document.getElementById(adjacentId);
      console.log(box)
      box.classList.remove("empty");
      box.classList.add("adjacentBox");
    }
  }

  generateUnreachableBoxes() {
    const lastEmptyBoxes = document.querySelectorAll(".empty");
    // Random generation of 14 asteroids (sometimes less if they overlap)
    for (let i = 0; i < this._unreachableBox; i++) {
      const asteroid = lastEmptyBoxes[Math.floor(Math.random() * lastEmptyBoxes.length)];
      asteroid.classList.remove("empty");
      asteroid.classList.add("unreachable");
    }
  }
}

// Instantiation

const newBoard = new Board(10, 10, 14);

newBoard.generateBoard();
newBoard.generateIdForEachBox();
newBoard.generatePlayersAndWeapons();
newBoard.generateUnreachableBoxes();