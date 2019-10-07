class Weapon {
    constructor(name, damage, className, div) {
        this._name = name;
        this._damage = damage;
        this._className = className;
        this._div = div;
    }
}

const weapon0 = new Weapon("blaster", 10, "weapon0", "<div></div>");
const weapon1 = new Weapon("light Saber Cold Fusion", 15, "weapon1", "<div></div>");
const weapon2 = new Weapon("neuralizer", 20, "weapon2", "<div></div>");
const weapon3 = new Weapon("tri Barrel Plasma Gun", 25, "weapon3", "<div></div>");
const weapon4 = new Weapon("noisy Cricket", 30, "weapon4", "<div></div>");