import {
  Board
} from './board'

class Game {

  constructor() {
    this._currentPlayerDiv = document.getElementsByClassName("player1")[0];
    this._currentEnemyDiv = document.getElementsByClassName("player2")[0];
    this._currentPlayer = player1;

  }

  turnBased() {
    console.log("je passe dans turnBased");
    console.log(this._currentPlayer);

    if (this._currentPlayerDiv === document.getElementsByClassName("player1")[0]) {
      this._currentPlayerDiv = document.getElementsByClassName("player2")[0];
      this._currentPlayer = player2;
      this._currentEnemyDiv = document.getElementsByClassName("player1")[0];
    } else {
      this._currentPlayerDiv = document.getElementsByClassName("player1")[0];
      this._currentPlayer = player1;
      this._currentEnemyDiv = document.getElementsByClassName("player2")[0];
    }
  }

  trajectory() {

    console.log("je passe dans trajectory");

    const playerId = this._currentPlayerDiv.id;

    // class of the position y of player 1
    const playerPosY = this._currentPlayerDiv.classList.item(2);

    this._currentPlayerDiv.classList.add("trajectory");

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

    console.log("je passe dans resetTrajectory");
    const trajectoryBoxes = document.getElementsByClassName("trajectory");

    Array.from(trajectoryBoxes).map(box => {
      box.classList.remove("trajectory");
      box.classList.remove("adjacentBox");
    })
  }

  movePlayerOnClick() {

    console.log("je passe dans movePlayerOnClick");
    const that = this;
    const board = document.getElementById("board");

    board.addEventListener("click", function (el) {

      if (!el.path[0].classList.contains("trajectory")) return;

      // Remove class player1or2 and add "empty" to the old box
      const currentPlayerName = that._currentPlayer._name;
      that._currentPlayerDiv.classList.remove(currentPlayerName);
      that._currentPlayerDiv.classList.add("empty");

      // Add class player and remove empty class to the new box
      el.path[0].classList.remove("empty");
      el.path[0].classList.add(currentPlayerName);
      that._currentPlayerDiv = el.path[0];
      el.path[0] = this._currentEnemy;

      // call methods 
      that.resetTrajectory();
      that.turnBased();
      that.trajectory();
      console.log(el.path[0].classList);

      if (el.path[0].classList.contains("weapon0") ||
        el.path[0].classList.contains("weapon1") ||
        el.path[0].classList.contains("weapon2") ||
        el.path[0].classList.contains("weapon3") ||
        el.path[0].classList.contains("weapon4")) {
        that.switchWeapon();
        // récupérer la class de el.path[0] avec un get attribut et verifier dans le if si cette classe contient "weapon"
        // refacto regex
      }
    });
  }

  switchWeapon() {

    console.log("here is a new weapon!");
    console.log(this);

    this._currentEnemyDiv.classList.remove("weapon0");
    this._currentEnemyDiv.classList.remove("weapon1");
    this._currentEnemyDiv.classList.remove("weapon2");
    this._currentEnemyDiv.classList.remove("weapon3");
    this._currentEnemyDiv.classList.remove("weapon4");
    this._currentEnemyDiv.classList.add("weapon0");
    // use getter setter
  }
}

// Instantiation

const newBoard = new Board(10, 10, 14);

newBoard.generateBoard();
newBoard.generateIdForEachBox();
newBoard.genaratePlayers();
newBoard.generateWeapons();
newBoard.generateUnreachableBoxes();

const newGame = new Game();

newGame.trajectory();
newGame.movePlayerOnClick()