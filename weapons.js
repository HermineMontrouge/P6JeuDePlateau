class Weapon {
    constructor(name, damage, className) {
        this.name = name;
        this.damage = damage;
        this.className = className;
    }
}

// Instantiation

const newWeapon = new Weapon();

const weapon0 = new Weapon("blaster", 10, "weapon0");
const weapon1 = new Weapon("light Saber Cold Fusion", 15, "weapon1");
const weapon2 = new Weapon("neuralizer", 20, "weapon2");
const weapon3 = new Weapon("tri Barrel Plasma Gun", 25, "weapon3");
const weapon4 = new Weapon("noisy Cricket", 30, "weapon4");