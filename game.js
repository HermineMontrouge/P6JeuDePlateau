class Game {

  constructor() {
    this._currentPlayer = player1;
    this._currentEnemy = player2;
  }

  setScreenStart() {
    $("#start").click(() => {
      $('#beginingScreen').fadeOut("slow");
    });
  }

  turnBased() {
    if (this._currentPlayer._className === player1._className) {
      this._currentPlayer = player2;
      this._currentEnemy = player1;
    } else {
      this._currentPlayer = player1;
      this._currentEnemy = player2;
    }
  }

  movePlayer(clickedEl) {
    if (this._currentPlayer._className === player1._className) {
      player1._div = clickedEl;
      player1._div.classList.remove("empty");
      player1._div.classList.add(this._currentPlayer._className);
    } else if (this._currentPlayer._className === player2._className) {
      player2._div = clickedEl;
      player2._div.classList.remove("empty");
      player2._div.classList.add(this._currentPlayer._className);
    }
  }

  setTrajectory() {
    const playerId = this._currentPlayer._div.id;
    const playerPosY = this._currentPlayer._div.classList.item(2);

    this._currentPlayer._div.classList.add("trajectory");

    for (let i = 1; i <= 3; i++) {
      const rigthBox = document.getElementById(parseInt(playerId) + i);
      if (rigthBox == null) {
        break; // in case player is on id 97 98 or 99
      } else if (
        !rigthBox.classList.contains("unreachable") &&
        rigthBox.classList.contains(playerPosY)
      ) {
        rigthBox.classList.add("trajectory");
      } else {
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
    })
  }

  setOnClick() {
    const that = this;
    const board = document.getElementById("board");
    board.addEventListener("click", function (el) {
      let clickedEl = el.path[0];

      if (!clickedEl.classList.contains("trajectory")) return;

      const currentPlayerName = that._currentPlayer._className;
      that._currentPlayer._div.classList.remove(currentPlayerName);
      that._currentPlayer._div.classList.add("empty");

      let clickedBoxClassName = clickedEl.classList.value;
      let regexWeapon = /weapon/;
      if (regexWeapon.test(clickedBoxClassName) === true) {
        that.switchWeapon(clickedEl);
      }

      console.log(that.isPlayerAdjacent(clickedEl));
      const fightMode = that.isPlayerAdjacent(clickedEl);
      if (fightMode) {
        //regex pour recupérer x-""
        // classlist de la div, tranformer en tableau avec split("")

        // console.log(that._currentPlayer);
        // console.log(that._currentEnemy);
        // console.log(that._currentPlayer._div.id);
        // console.log(that._currentEnemy._div.id);
        // on vérifie si un des joueur est en bout de ligne et l'autre au début de la ligne suivante pour que le combat ne se lance pas, car ils ne sont pas cote à cote mais juste id+1 ok
        // let regexNine = /9/;
        // let regexZero = /0/;
        // if (!(((regexNine.test(that._currentPlayer._div.id)) && (regexNine.test(that._currentEnemy._div.id))) ||
        //   ((regexZero.test(that._currentPlayer._div.id)) && (regexZero.test(that._currentEnemy._div.id))))) {
        //   that.startFight(clickedEl);
        //   return;
        // }
        that.startFight(clickedEl);
        return;
      }
      that.movePlayer(clickedEl);
      that.turnBased();
      that.resetTrajectory();
      that.setTrajectory();
    });
  }

  switchWeapon(clickedEl) {
    const weaponNames = [weapon0, weapon1, weapon2, weapon3, weapon4];
    const currentweapon = weaponNames.filter(value => clickedEl.getAttribute("class").includes(value._className))[0];
    clickedEl.classList.add(this._currentPlayer._weapon._className);
    clickedEl.classList.remove(currentweapon._className);
    this._currentPlayer.weapon = currentweapon;
    this.displayDamage();
  }

  isPlayerAdjacent(clickedEl) {

    const adjacentIds = newBoard.getAdjacentBoxes(clickedEl);
    let isAdjacentPlayer = false;

    for (let adjacentId of adjacentIds) {
      let box = document.getElementById(adjacentId);
      let regexPlayer = /player/;
      let boxValue = box.classList.value;
      if (regexPlayer.test(boxValue) === true) {
        isAdjacentPlayer = true;
      }
    }
    return isAdjacentPlayer;
  }

  startFight(clickedEl) {
    this._currentPlayer._div = clickedEl;
    this._currentPlayer._div.classList.remove("empty");
    this._currentPlayer._div.classList.add(this._currentPlayer._className);
    this.resetTrajectory();

    $("#startFight").fadeIn("slow");

    setTimeout(() => {
      $('#startFight').fadeOut("slow");
      this.askCurrentPlayer();
    }, 2000);
  }

  askCurrentPlayer() {
    $("#playerName").empty();
    if (this._currentPlayer._className === "player1") {
      $("#playerName").append("Deep Space Nine");
    } else {
      $("#playerName").append("Millenium Falcon");
    }

    $("#question").fadeIn();

    $("#attack").click(() => {
      $("#question").fadeOut();
      $('#attack').unbind("click");
      $('#defend').unbind("click");
      this.attackingOpponent();
      this.endGame();
    });

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
  }

  defendAgainstOpponent() {
    switch (this._currentEnemy._weapon._name) {
      case "blaster":
        this._currentEnemy._weapon._damage = 5;
        break;
      case "light Saber Cold Fusion":
        this._currentEnemy._weapon._damage = 8;
        break;
      case "neuralizer":
        this._currentEnemy._weapon._damage = 10;
        break;
      case "tri Barrel Plasma Gun":
        this._currentEnemy._weapon._damage = 12;
        break;
      case "noisy Cricket":
        this._currentEnemy._weapon._damage = 15;
        break;
    }
    this.displayDamage();
  }

  displayDamage() {
    console.log("je passe dans displayDamages");
    const displayDamageP1 = document.getElementById("damageWeaponplayer1");
    const displayDamageP2 = document.getElementById("damageWeaponplayer2");
    if (this._currentPlayer._className === "player1") {
      displayDamageP2.innerHTML = this._currentPlayer._weapon._damage;
      console.log("===");
    } else if (this._currentPlayer._className === "player2") {
      displayDamageP1.innerHTML = this._currentPlayer._weapon._damage;
      console.log("+++");
    }
  }

  endGame() {
    if (this._currentEnemy._hp > 0) {
      this.turnBased();
      this.askCurrentPlayer();
    } else if (this._currentEnemy._hp <= 0) {
      $("#looserName").text(this._currentEnemy._name);
      $("#winnerName").text(this._currentPlayer._name);
      $("#endGame").fadeIn("slow");
      $("#startAgain").click(() => {
        document.location.reload(true);
      });
    }
  }
}