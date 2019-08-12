class Players {
  constructor(name, hp, image) {
    this.name = name;
    this.hp = hp;
    this.image = image;
    this.boxes;
    this.player1;
    this.player2;
  }

  genaratePlayers() {

    this.boxes = document.querySelectorAll(".box");

    // generate players on random boxes
    this.player1 = this.boxes[Math.floor(Math.random() * this.boxes.length)];
    player1.className = "player1Box";
    console.log(player1);

    this.player2 = this.boxes[Math.floor(Math.random() * this.boxes.length)];
    player2.className = "player2Box";
    console.log(player2);
  }
}

// Instantiation

const player1 = new Players("Deep Space Nine", 100, '<img src="./media/players/player1.png" alt="Deep Space Nine"></img>');
const player2 = new Players("Millenium Falcon", 100, '<img src="./media/players/player2.png" alt="Millenium Falcon"></img>');

player1.genaratePlayers();
player2.genaratePlayers();