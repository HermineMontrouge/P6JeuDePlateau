class Player {

  constructor(name, className, hp, weapon, div, damage) {
    this._name = name;
    this._className = className;
    this._hp = this.hp = hp;
    // Object.assign({},weapon allows to re-assign a weapon in the player class, otherwise weapon0 exists in duplicate and can not be modified slmt for the enemy in case the player defends himself
    this._weapon = this.weapon = Object.assign({}, weapon);
    this._div = div;
    this._defenseMode = false;
  }

  set hp(hp) {

    $('#hp' + this._className).html(hp);
    this._hp = hp;
  }

  set weapon(weapon) {

    $('#imgWeapon' + this._className).html(weapon._img);
    this._weapon = weapon;
  }

  isAttacked(currentEnemyDamage) {
    if (this._defenseMode) {
      currentEnemyDamage = currentEnemyDamage/2;
    }
    this.hp = this._hp - currentEnemyDamage;
    this._defenseMode = false;
  }
}