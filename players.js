class Player {
  constructor(name, hp, weapon, div) {
    this._name = name;
    this._hp = this.hp = hp;
    this._weapon = this.weapon = weapon;
    this._div = div;
  }

  set hp(hp) {

    const name = this._name.charAt(0).toUpperCase() + this._name.slice(1)
    $('#hp' + name).html(hp);
    this._hp = hp;
  }

  set weapon(weapon) {

    const name = this._name.charAt(0).toUpperCase() + this._name.slice(1)
    $('#imgWeapon' + name).html(weapon._img);
    this._weapon = weapon;
  }
}


const player1 = new Player("player1", 100, weapon0, "<div></div>");
const player2 = new Player("player2", 100, weapon0, "<div></div>");