class Board {
  constructor() {
    this.board;
    this.boxes;
    this.player1 = {
      namePlayer1: "Deep Space Nine",
      hpPlayer1: 100,
      weaponPlayer1: this.weapon0,
      imgPlayer1: '<img src="./media/players/player1.png" alt="Deep Space Nine" class="player1"></img>'
    };
    this.player2 = {
      namePlayer2: "Millenium Falcon",
      hpPlayer2: 100,
      weaponPlayer2: this.weapon0,
      imgPlayer2: '<img src="./media/players/player2.png" alt="Millenium Falcon" class="player2"></img>'
    };
    this.weapon0 = {
      nameWeapon0: "Blaster",
      damageWeapon0: 10,
      imgWeapon0: '<img src="./media/weapons/bullet.png" alt="Blaster"></img>'
    };
    this.weapon1 = {
      nameWeapon1: "light Saber Cold Fusion",
      damageWeapon1: 15,
      imgWeapon1: '<img src="./media/weapons/weapon1.png" alt="Light Saber Cold Fusion" class="weapon1"></img>'
    };
    this.weapon2 = {
      nameWeapon2: "neuralizer",
      damageWeapon2: 20,
      imgWeapon2: '<img src="./media/weapons/weapon2.png" alt="Neuralizer" class="weapon2"></img>'
    };
    this.weapon3 = {
      nameWeapon3: "tri Barrel Plasma Gun",
      damageWeapon3: 25,
      imgWeapon3: '<img src="./media/weapons/weapon3.png" alt="Tri Barrel Plasma Gun" class="weapon3"></img>'
    };
    this.weapon4 = {
      nameWeapon4: "noisy Cricket",
      damageWeapon4: 30,
      imgWeapon4: '<img src="./media/weapons/weapon4.png" alt="Noisuy Cricket" class="weapon4"></img>'
    };
  }

  generateBoard() {
    // Selection of id="board" on the dom
    this.board = document.querySelector("#board");

    for (let row = 0; row < 10; row++) {
      const newRow = document.createElement("div");
      newRow.className = "row";
      board.appendChild(newRow);

      for (let box = 0; box < 10; box++) {
        const newBox = document.createElement("div");
        newBox.className = `box y-${row} x-${box}`;
        newRow.appendChild(newBox);
      }
    }
  }

  generateUnreachableBoxes() {
    // Selection of class="box" on the dom
    this.boxes = document.querySelectorAll(".box");

    const numberOfUnreachableBoxes = 14;
    // console.log(boxes); renvoie NodeList(100) la liste des 100 div.box dans un tableau
    // console.log(numberOfUnreachableBoxes); renvoie "12"

    for (let i = 0; i < numberOfUnreachableBoxes; i++) {
      const unreachableBox = this.boxes[
        Math.floor(Math.random() * this.boxes.length)
      ];
      unreachableBox.className = " box unreachable";
      // console.log(unreachableBox);
      // renvoie <div class=" box unreachable"></div>
    }
    // console.log(this.boxes);
    // renvoie la liste des 100 div.box dans des tableaux
    // console.log(numberOfUnreachableBoxes);
    // renvoie "12"
  }

  genaratePlayers() {

    const playerBoard = [this.player1, this.player2];

    // generate one player of each in random boxes
    for (let i = 0; i < playerBoard.length; i++) {
      const newPlayer = this.boxes[Math.floor(Math.random() * this.boxes.length)];
      if (i === 0) {
        newPlayer.className = "box player1";
        newPlayer.innerHTML = this.player1.imgPlayer1;
        console.log(this.player1.imgPlayer1);
        console.log(playerBoard);
      } else if (i === 1) {
        newPlayer.className = "box player2";
        newPlayer.innerHTML = this.player2.imgPlayer2;
      }
    }
  }

  // noSideBySide() {
  //   while (playerBoard[2] == player1 || playerBoard[2] == (player1 + 1) || playerBoard[2] == (player1 - 1) ||
  //     playerBoard[2] == (player1 + 10) || playerBoard[2] == (player1 - 10) || playerBoard[2] == (player1 + 9) ||
  //     playerBoard[2] == (player1 - 9) || playerBoard[2] == (player1 + 11) || playerBoard[2] == (player1 - 11)) {
  //     playerBoard[2] = Math.floor(Math.random() * 100);
  //   } 
  // }

  genarateWeapons() {

    const weaponBoard = [this.weapon1, this.weapon2, this.weapon3, this.weapon4];

    // generate one weapon of each in random boxes
    for (let i = 0; i < weaponBoard.length; i++) {
      const newWeapon = this.boxes[Math.floor(Math.random() * this.boxes.length)];
      if (i === 0) {
        newWeapon.className = "box weapon1";
        newWeapon.innerHTML = this.weapon1.imgWeapon1;
      } else if (i === 1) {
        newWeapon.className = "box weapon2";
        newWeapon.innerHTML = this.weapon2.imgWeapon2;
      } else if (i === 2) {
        newWeapon.className = "box weapon3";
        newWeapon.innerHTML = this.weapon3.imgWeapon3;
      } else if (i === 3) {
        newWeapon.className = "box weapon4";
        newWeapon.innerHTML = this.weapon4.imgWeapon4;
      }
    }
  }
}

// Instantiation

const newBoard = new Board();

newBoard.generateBoard();
newBoard.generateUnreachableBoxes();
newBoard.genaratePlayers();
// newBoard.noSideBySide();``
newBoard.genarateWeapons();