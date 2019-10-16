class Board {
  constructor(row, box, unreachableBox) {
    this._row = row;
    this._box = box;
    this._unreachableBox = unreachableBox;
    this._x = 0;
    this._y = 0;
  }

  generateBoard() {
    for (this._y = 0; this._y < this._row; this._y++) {
      const newRow = document.createElement("div");
      newRow.className = "row";
      board.appendChild(newRow);
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
      this.setDomAdjacentBoxes(el);
    }
    eval(name)._div = el
  }

  getAdjacentBoxes(el) {
    let adjacentIds = [(parseInt(el.id) + 1), (parseInt(el.id) - 1), (parseInt(el.id) + this._x), (parseInt(el.id) - this._x)];
    adjacentIds = adjacentIds.filter(v => {
      if (v > 0 && v < 99) return v;
    });
    return adjacentIds;
  }

  setDomAdjacentBoxes(el) {
    const adjacentIds = this.getAdjacentBoxes(el);
    for (let adjacentId of adjacentIds) {
      let box = document.getElementById(adjacentId);
      box.classList.remove("empty");
      box.classList.add("adjacentBox");
    }
  }

  generateUnreachableBoxes() {
    const lastEmptyBoxes = document.querySelectorAll(".empty");
    for (let i = 0; i < this._unreachableBox; i++) {
      const asteroid = lastEmptyBoxes[Math.floor(Math.random() * lastEmptyBoxes.length)];
      asteroid.classList.remove("empty");
      asteroid.classList.add("unreachable");
    }
  }
}