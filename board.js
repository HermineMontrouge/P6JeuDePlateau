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
    // Trouver un moyen d'attribuer les objets player1 etc en plus des className

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

    // eval permet de transformer une string en objet
    eval(name)._div = el
    console.log(eval(name));
  }

  adjacentBoxes(el) {

    const boxes = document.querySelectorAll(".box");
    for (const box of boxes) {
      if (
        parseInt(box.id) - 1 == el.id ||
        parseInt(box.id) + 1 == el.id ||
        parseInt(box.id) - this._x == el.id ||
        parseInt(box.id) + this._x == el.id
      ) {
        box.classList.remove("empty");
        box.classList.add("adjacentBox");
      }
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