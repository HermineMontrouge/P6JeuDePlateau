class Player {
  constructor(name, className, hp, weapon, div) {
    this._name = name;
    this._className = className;
    this._hp = this.hp = hp;
    this._weapon = this.weapon = weapon;
    this._div = div;
  }

  set hp(hp) {

    const name = this._className.charAt(0).toUpperCase() + this._className.slice(1)
    $('#hp' + name).html(hp);
    this._hp = hp;
  }

  set weapon(weapon) {

    const name = this._className.charAt(0).toUpperCase() + this._className.slice(1)
    $('#imgWeapon' + name).html(weapon._img);
    this._weapon = weapon;
  }
}


const player1 = new Player("Deep Space Nine", "player1", 100, weapon0, "<div></div>");
const player2 = new Player("Millenium Falcon", "player2", 100, weapon0, "<div></div>");