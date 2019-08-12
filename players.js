class Joueur {
  constructor() {
    this.hp = 100;
    this.damage = 10;
    this.actionPoint = 3;
  }
  hpDown(pointdown) {
    this.hp -= pointdown;
  }

  move() {

    moveView();
    $('.block').off("click");
    $('.freeBlockMove').on("click", function () {
      moveClick();
      if (playerPlaying == "player2") {
        player2Obj.move();
        playerPlaying = "player1";
        $('#infoGame').prepend("<p>The Force change of side.    LightSide you need to play.</p>");
      } else if (playerPlaying == "player1") {
        player1Obj.move();
        playerPlaying = "player2";
        $('#infoGame').prepend("<p>The Force change of side.    DarkSide you need to play.</p>");
      }
    });
  }
}

var player1Obj = new Joueur();
var player2Obj = new Joueur();