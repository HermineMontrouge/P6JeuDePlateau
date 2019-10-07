class Game {

  constructor() {
    this._currentPlayer = player1;
    this._currentEnemy = player2;
    this._lastBox;
  }

  turnBased(clickedEl) {

    if (this._currentPlayer._name === player1._name) {
      // Set box with new player
      player1._div = clickedEl;
      player1._div.classList.remove("empty");
      player1._div.classList.add(this._currentPlayer._name);
      // Switch Player
      this._currentPlayer = player2;
      this._currentEnemy = player1;
    } else {
      // Set box with new player
      player2._div = clickedEl;
      player2._div.classList.remove("empty");
      player2._div.classList.add(this._currentPlayer._name);
      // Switch Player
      this._currentPlayer = player1;
      this._currentEnemy = player2;
    }
  }

  trajectory() {

    const playerId = this._currentPlayer._div.id;
    const playerPosY = this._currentPlayer._div.classList.item(2);

    this._currentPlayer._div.classList.add("trajectory");

    // Loop on 3 trajectories (3 boxes in a row)
    for (let i = 1; i <= 3; i++) {
      const rigthBox = document.getElementById(parseInt(playerId) + i);
      // If the element with the id (number of ID of player1 + the value of i) does not have a class "unreachable"
      // AND that same element contains the same class x
      if (rigthBox == null) {
        break; // in case player is on id 97 98 or 99
      } else if (
        !rigthBox.classList.contains("unreachable") &&
        rigthBox.classList.contains(playerPosY)
      ) {
        // Add "trajectory" class to this element
        rigthBox.classList.add("trajectory");
      } else {
        // If the element with the id (number of the id of the player 1 + the value of i) has a class unreachable
        // or is not on the same x then we stop the loop to not continue the trajectory of trajectory
        break;
      }
    }

    for (let i = 1; i <= 3; i++) {
      const leftBox = document.getElementById(parseInt(playerId) - i);
      if (leftBox == null) {
        break; // in case player id is 99
      } else if (
        !leftBox.classList.contains("unreachable") &&
        leftBox.classList.contains(playerPosY)
      ) {
        leftBox.classList.add("trajectory");
      } else {
        break;
      }
    }

    for (let i = 1; i <= 3; i++) {
      const bottomBox = document.getElementById(parseInt(playerId) + i * 10);
      if (bottomBox && !bottomBox.classList.contains("unreachable")) {
        bottomBox.classList.add("trajectory");
      } else {
        break;
      }
    }

    for (let i = 1; i <= 3; i++) {
      const topBox = document.getElementById(parseInt(playerId) - i * 10);
      if (topBox && !topBox.classList.contains("unreachable")) {
        topBox.classList.add("trajectory");
      } else {
        break;
      }
    }
  }

  resetTrajectory() {
    const trajectoryBoxes = document.getElementsByClassName("trajectory");
    Array.from(trajectoryBoxes).map(box => {
      box.classList.remove("trajectory");
      if (!box.getAttribute("class").includes("player"))
        box.classList.remove("adjacentBox");
    })
  }

  movePlayerOnClick() {

    const that = this;
    const board = document.getElementById("board");

    board.addEventListener("click", function (el) {

      let clickedEl = el.path[0]

      // Stop the method if clicked box is not a trajectory
      if (!clickedEl.classList.contains("trajectory")) return;

      // Remove class player1or2 and add "empty" to the old box
      const currentPlayerName = that._currentPlayer._name;
      that._currentPlayer._div.classList.remove(currentPlayerName);
      that._currentPlayer._div.classList.add("empty");

      that.turnBased(clickedEl)
      that.resetTrajectory();
      that.trajectory();
      newBoard.adjacentBoxes(clickedEl);

      // Call switchWeapon() if clikedEl contains a weapon
      let clickedBoxClassName = clickedEl.classList.value;
      let regexWeapon = /weapon/;
      if (regexWeapon.test(clickedBoxClassName) === true) {
        that.switchWeapon(clickedEl);
      }
    });
  }

  switchWeapon(clickedEl) {

    const weaponNames = [weapon0, weapon1, weapon2, weapon3, weapon4];
    const currentweapon = weaponNames.filter(value => clickedEl.getAttribute("class").includes(value._className))[0];
    clickedEl.classList.add(this._currentEnemy._weapon._className);
    clickedEl.classList.remove(currentweapon._className);
    this._currentEnemy.weapon = currentweapon;
  }

  startFight(clickedEl) {
    console.log("War is begining!");
  }
}

const newGame = new Game();

newGame.trajectory();
newGame.movePlayerOnClick()