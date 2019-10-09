class Player {

  constructor(name, className, hp, weapon, div) {
    this._name = name;
    this._className = className;
    this._hp = this.hp = hp;
    this._weapon = this.weapon = weapon;
    this._div = div;
  }

  set hp(hp) {

    $('#hp' + this._className).html(hp);
    this._hp = hp;
  }

  set weapon(weapon) {

    $('#imgWeapon' + this._className).html(weapon._img);
    this._weapon = weapon;
  }
}


const player1 = new Player("Deep Space Nine", "player1", 100, weapon0, "<div></div>");
const player2 = new Player("Millenium Falcon", "player2", 100, weapon0, "<div></div>");