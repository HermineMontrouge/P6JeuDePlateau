class Game {
  constructor() {
    this._gameBoard = new Board(10, 10, 14);
    this._currentPlayer = "player1";
    this._currentEnemy;
    this._endGame = false;
    this._fighting = false;
    this._player1 = document.getElementsByClassName("player1")[0];
    this._player2 = document.getElementsByClassName("player2")[0];
  }

  whoHasToPlay() {
    // turn-based running

    console.log("je passe dans howhasto play");

    if (this._currentPlayer === "player1") {
      this._currentPlayer = "player2";
    } else {
      this._currentPlayer = "player1";
    }

    if (this._currentPlayer = "player1") {
      this._currentEnemy = "player2";
    } else {
      this._currentEnemy = "player1";
    }
  }

  highLight() {

    console.log("je passe dans highlight");

    this._currentPlayer = document.getElementsByClassName(this._currentPlayer)[0];

    const playerId = this._currentPlayer.id;
    // class of the position y of player 1
    const playerPosY = this._currentPlayer.classList.item(2);
    // console.log(playerPosY); Can display for example "y-3"

    this._currentPlayer.classList.add("highlight");

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
        // Add "highlight" class to this element
        rigthBox.classList.add("highlight");
      } else {
        // If the element with the id (number of the id of the player 1 + the value of i) has a class unreachable
        // or is not on the same x then we stop the loop to not continue the trajectory of highlight
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
        leftBox.classList.add("highlight");
      } else {
        break;
      }
    }

    for (let i = 1; i <= 3; i++) {
      const bottomBox = document.getElementById(parseInt(playerId) + i * 10);
      if (bottomBox && !bottomBox.classList.contains("unreachable")) {
        bottomBox.classList.add("highlight");
      } else {
        break;
      }
    }

    for (let i = 1; i <= 3; i++) {
      const topBox = document.getElementById(parseInt(playerId) - i * 10);
      if (topBox && !topBox.classList.contains("unreachable")) {
        topBox.classList.add("highlight");
      } else {
        break;
      }
    }
  }

  move() {
    console.log("je passe dans move");

    this._currentPlayer.classList.remove(this._currentPlayer.classList.item(3));
    this.whoHasToPlay();
    // this.highLight();

    console.log(this);
    console.log(this._currentPlayer);
  }

  bindEvent() {
    console.log("je passe dans bindEvent");
    console.log(this._currentPlayer);
    const that = this;

    const boxes = document.querySelectorAll(".box");
    for (let box of boxes) {
      box.addEventListener("click", function() {
        console.log("je passe dans bindEvent");
        console.log(this._currentPlayer);
        that.move();
        this.classList.add("player1");
        this.classList.remove("empty");
      });
    }
  }

  swapWeapon() {
    // Swap the currentPlayer weapon against the one on his box
  }
}

const newGame = new Game();

newGame.highLight();
newGame.bindEvent();
newGame.swapWeapon();
