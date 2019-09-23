class Player {
  constructor(name, hp, weapon) {
    this.name = name;
    this.hp = hp;
    this.weapon = weapon;
  }

  swapWeapon() {
    // Swap the currentPlayer weapon against the one on his box
  }
}

// Instantiation

const newPlayer = new Player();

newPlayer.swapWeapon();

const player1 = new Player("player1", 100, weapon0);
const player2 = new Player("player2", 100, weapon0);