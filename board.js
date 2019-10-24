class Board {

  constructor(row, box, unreachableBox) {
    this._row = row;
    this._box = box;
    this._unreachableBox = unreachableBox;
  }

  generateBoard() {
    // generate 10 rows ans 10 boxes on each
    for (let y = 0; y < this._row; y++) {
      const newRow = document.createElement("div");
      newRow.className = "row";
      board.appendChild(newRow);
      for (let x = 0; x < this._box; x++) {
        const newBox = document.createElement("div");
        // display position x and y for each className box
        newBox.className = `box x-${x} y-${y} empty`;
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

  getAdjacentBoxes(clickedEl) {
    // filters into a new array "adjacentIds" that are less than 0 or greater than 99
    let adjacentIds = [(parseInt(clickedEl.id) + 1), (parseInt(clickedEl.id) - 1), (parseInt(clickedEl.id) + this._box), (parseInt(clickedEl.id) - this._box)];
    adjacentIds = adjacentIds.filter(v => {
      if (v > 0 && v < (this._row * this._box) -1) return v;
    });
    return adjacentIds;
  }

  setDomAdjacentBoxes(el) {
    // change className of adjacent boxes
    const adjacentIds = this.getAdjacentBoxes(el);
    for (let adjacentId of adjacentIds) {
      let box = document.getElementById(adjacentId);
      box.classList.remove("empty");
      box.classList.add("adjacentBox");
    }
  }

  emptyCells(name) {
    // provided an array of empty boxes
    const emptyBoxes = document.querySelectorAll(".empty");
    let el = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    el.classList.add(name);
    el.classList.remove("empty");

    if (el.getAttribute("class").includes("player")) {
      this.setDomAdjacentBoxes(el);
    }
    // transform string from the array "names" to objects
    eval(name)._div = el;
  }

  generatePlayersAndWeapons() {
    const names = ["player1", "player2", "weapon1", "weapon2", "weapon3", "weapon4"];
    names.forEach(name => {
      this.emptyCells(name);
    });
  }

  generateUnreachableBoxes() {
    // generates 14 asteroids or less if they overlap
    const lastEmptyBoxes = document.querySelectorAll(".empty");
    for (let i = 0; i < this._unreachableBox; i++) {
      const asteroid = lastEmptyBoxes[Math.floor(Math.random() * lastEmptyBoxes.length)];
      asteroid.classList.remove("empty");
      asteroid.classList.add("unreachable");
    }
  }
}