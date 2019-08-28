class Weapon {
    constructor(name, damage, image) {
        this.name = name;
        this.damage = damage;
        this.image = image;
        this.boxes;
    }
}

// Instantiation

const newWeapon = new Weapon();

const weapon0 = new Weapon("blaster", 10, '<img src="./media/weapons/bullet.png" alt="Blaster"></img>');
const weapon1 = new Weapon("light Saber Cold Fusion", 15, '<img src="./media/weapons/weapon4.png" alt="Light Saber Cold Fusion"></img>');
const weapon2 = new Weapon("neuralizer", 20, '<img src="./media/weapons/weapon2.png" alt="Neuralizer"></img>');
const weapon3 = new Weapon("tri Barrel Plasma Gun", 25, '<img src="./media/weapons/weapon1.png" alt="Tri Barrel Plasma Gun"></img>');
const weapon4 = new Weapon("noisy Cricket", 30, '<img src="./media/weapons/weapon3.png" alt="Noisuy Cricket"></img>');