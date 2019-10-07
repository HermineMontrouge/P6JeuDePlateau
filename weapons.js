class Weapon {
    constructor(name, damage, className, div, img) {
        this._name = name;
        this._damage = damage;
        this._className = className;
        this._div = div;
        this._img = img;
    }
}

const weapon0 = new Weapon("blaster", 10, "weapon0", "<div></div>", '<img src="./media/weapons/blaster.png" width="100" height="60" alt="Blaster"></img>');
const weapon1 = new Weapon("light Saber Cold Fusion", 15, "weapon1", "<div></div>", '<img src="./media/weapons/lightsaberColdFusion.png" width="100" height="100" alt="Lightsaber Cold Fusion"></img>');
const weapon2 = new Weapon("neuralizer", 20, "weapon2", "<div></div>", '<img src="./media/weapons/neuralizer.png" width="100" height="100" alt="Neuralizer"></img>');
const weapon3 = new Weapon("tri Barrel Plasma Gun", 25, "weapon3", "<div></div>", '<img src="./media/weapons/triBarrelPlasmaGun.png" width="100" height="100" alt="Tri Barrel PlasmaGun"></img>');
const weapon4 = new Weapon("noisy Cricket", 30, "weapon4", "<div></div>", '<img src="./media/weapons/noisyCricket.png" width="100" height="100" alt="Noisy Cricket"></img>');