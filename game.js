class Game {

  _gameBoard = new Board(10, 10, 14);
  _currentPlayerDiv = document.getElementsByClassName("player1")[0];
  _currentPlayer = "player1";
  _currentEnemy;
  _endGame = false;
  _fighting = false;

  constructor() {
    // this._player1 = document.getElementsByClassName("player1")[0];
    // this._player2 = document.getElementsByClassName("player2")[0];
  }

  whoHasToPlay() {
    // turn-based running

    console.log("je passe dans howhasto play");

    if (this._currentPlayer === "player1") {
      this._currentPlayer = "player2";
      this._currentEnemy = "player1";
    } else {
      this._currentPlayer = "player1";
      this._currentEnemy = "player2";
    }
  }

  highlight() {

    console.log("je passe dans highlight");

    //this._currentPlayerDiv = document.getElementsByClassName("player1")[0];
    console.log("this._currentPlayer", this._currentPlayerDiv);

    const playerId = this._currentPlayerDiv.id;
    // class of the position y of player 1
    const playerPosY = this._currentPlayerDiv.classList.item(2);
    // console.log(playerPosY); Can display for example "y-3"

    this._currentPlayerDiv.classList.add("highlight");

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

    // if (this._currentPlayer === "player1") {
    //   this._currentPlayerDiv = document.getElementsByClassName("player1")[0];
    //   this._currentPlayerDiv.classList.remove(this._currentPlayerDiv.classList.item(3));
    //   console.log("on veut savoir : ", document.getElementsByClassName("player1"));
    // } else {
    //   console.log("c'est le tour de player2")
    //   this._currentPlayerDiv.classList.remove(this._currentPlayerDiv.classList.item(3));
    // }
    this.highlight();
    //this.bindEvent()
    // this.whoHasToPlay();


    // console.log(this);
    // console.log(this._currentPlayer);
  }

  bindEvent() {

    const that = this;
    const board = document.getElementById("board");

    board.addEventListener("click", function (el) {

      if (!el.path[0].classList.contains("highlight")) return;

      // Retrieve tag player and add empty class to the old one
      that._currentPlayerDiv.classList.remove("player1")
      that._currentPlayerDiv.classList.add("empty")

      // Add tag player and remove empty class to the new one
      el.path[0].classList.add("player1");
      el.path[0].classList.remove("empty");

      that._currentPlayerDiv = el.path[0]
      that.resetHighlight();
      that.highlight()

      // this._currentPlayer = document.getElementsByClassName("player1")[0];
      // console.log(this._currentPlayer);
    });

  }

  resetHighlight() {
    const highlightBoxes = document.getElementsByClassName("highlight");
    console.log('resetHighlight', highlightBoxes)

    Array.from(highlightBoxes).map(box => {
      box.classList.remove("highlight");
    })

  }

  swapWeapon() {
    // Swap the currentPlayer weapon against the one on his box
  }
}

const newGame = new Game();

newGame.highlight();
newGame.bindEvent();
newGame.swapWeapon();