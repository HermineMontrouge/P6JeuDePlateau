class Game {

  constructor() {
    this._currentPlayer = player1;
    this._currentEnemy = player2;
    this._lastBox;

    $("#start").click(() => {
      $('#beginingScreen').fadeOut("slow");
    });
  }

  turnBased(clickedEl) {

    console.log("turnedBased()");
    if (this._currentPlayer._className === player1._className) {
      // Set box with new player
      player1._div = clickedEl;
      player1._div.classList.remove("empty");
      player1._div.classList.add(this._currentPlayer._className);
      // Switch Player
      this._currentPlayer = player2;
      this._currentEnemy = player1;
    } else {
      // Set box with new player
      player2._div = clickedEl;
      player2._div.classList.remove("empty");
      player2._div.classList.add(this._currentPlayer._className);
      // Switch Player
      this._currentPlayer = player1;
      this._currentEnemy = player2;
    }
  }

  trajectory() {

    console.log("trajectory()");
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
    console.log("resetTrajectory()")
    const trajectoryBoxes = document.getElementsByClassName("trajectory");
    Array.from(trajectoryBoxes).map(box => {
      box.classList.remove("trajectory");
    })
  }

  movePlayerOnClick() {

    console.log("movePlayerOnClick()")
    const that = this;
    const board = document.getElementById("board");
    board.addEventListener("click", function (el) {
      let clickedEl = el.path[0]

      // Stop the method if clicked box is not a trajectory
      if (!clickedEl.classList.contains("trajectory")) return;

      // Remove class player1or2 and add "empty" to the old box
      const currentPlayerName = that._currentPlayer._className;
      that._currentPlayer._div.classList.remove(currentPlayerName);
      that._currentPlayer._div.classList.add("empty");

      // Call switchWeapon() if clikedEl contains a weapon
      let clickedBoxClassName = clickedEl.classList.value;
      let regexWeapon = /weapon/;
      if (regexWeapon.test(clickedBoxClassName) === true) {
        that.switchWeapon(clickedEl);
      }

      const fightMode = newBoard.adjacentBoxes(clickedEl);
      if (fightMode) {
        that.startFight(clickedEl);
        return;
      }

      that.turnBased(clickedEl)
      that.resetTrajectory();
      that.trajectory();
    });
  }

  switchWeapon(clickedEl) {
    console.log("switchWeapon()")
    const weaponNames = [weapon0, weapon1, weapon2, weapon3, weapon4];
    const currentweapon = weaponNames.filter(value => clickedEl.getAttribute("class").includes(value._className))[0];
    clickedEl.classList.add(this._currentEnemy._weapon._className);
    clickedEl.classList.remove(currentweapon._className);
    this._currentEnemy.weapon = currentweapon;
  }

  startFight(clickedEl) {
    console.log("startFight()")
    this._currentPlayer._div = clickedEl;
    this._currentPlayer._div.classList.remove("empty");
    this._currentPlayer._div.classList.add(this._currentPlayer._className);
    this.resetTrajectory();

    console.log(this._currentPlayer);

    $("#startFight").fadeIn("slow");

    setTimeout(() => {
      $('#startFight').fadeOut("slow");
      this.askCurrentPlayer();
    }, 2000);
  }

  askCurrentPlayer() {

    // Add the name of the player concerned in the question
    $("#playerName").empty();
    if (this._currentPlayer._className === "player1") {
      $("#playerName").append("Deep Space Nine");
    } else {
      $("#playerName").append("Millenium Falcon");
    }
    // bring up the question
    $("#question").fadeIn();
    // if the player clicks on attack
    $("#attack").click(() => {
      $("#question").fadeOut();
      $('#attack').unbind("click");
      $('#defend').unbind("click");
      this.attackingOpponent();
      this.endGame();
    });
    // if the player clicks on defend
    $("#defend").click(() => {
      $("#question").fadeOut();
      $('#defend').unbind("click");
      $('#attack').unbind("click");
      this.defendAgainstOpponent();
      this.endGame();
    });
  }


  attackingOpponent() {
    this._currentEnemy.hp = this._currentEnemy._hp - this._currentPlayer._weapon._damage;
    console.log("damage of current player weapon", this._currentPlayer._weapon._damage, "current player:", this._currentPlayer, );
    console.log("hp of current enemy", this._currentEnemy._hp);
    console.log("hp of current player", this._currentPlayer._hp);
  }

  defendAgainstOpponent() {
    this._currentEnemy._weapon._damage = ((this._currentEnemy._weapon._damage) / 2);
    console.log("damage de l'arme de current ennemy", this._currentEnemy._weapon._damage);
  }

  endGame() {
    if (this._currentEnemy._hp > 0 && this._currentPlayer._hp > 0) {
      if (this._currentPlayer._className === player1._className) {
        this._currentPlayer = player2;
        this._currentEnemy = player1;
      } else {
        this._currentPlayer = player1;
        this._currentEnemy = player2;
      }
      this.askCurrentPlayer()
    } else if (this._currentEnemy._hp <= 0) {
      $("#looserName").text(this._currentEnemy._name);
      $("#winnerName").text(this._currentPlayer._name);
      $("#endGame").fadeIn("slow");
      console.log("winner is", this._currentPlayer._name);
      $("#startAgain").click(() => {
        document.location.reload(true);
      });
    }
  }
}

const newGame = new Game();

newGame.trajectory();
newGame.movePlayerOnClick()