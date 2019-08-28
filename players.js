class Player {
  constructor(name, hp, weapon) {
    this.name = name;
    this.hp = hp;
    this.weapon = weapon;
    this.image = image;
    this.boxes;
    this.x = x;
    this.y = y;
  }
}

// Instantiation

const newPlayer = new Player();

const player1 = new Player("Deep Space Nine", 100, weapon0, '<img src="./media/players/player1.png" alt="Deep Space Nine"></img>');
const player2 = new Player("Millenium Falcon", 100, weapon0, '<img src="./media/players/player2.png" alt="Millenium Falcon"></img>');

deplacement.player();