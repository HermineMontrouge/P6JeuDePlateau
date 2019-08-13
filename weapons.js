class Weapons {
    constructor(name, damage, image) {
        this.name = name;
        this.damage = damage;
        this.image = image;
        this.weaponBoard = [];
        this.boxes;

    }

    genarateWeapons() {

        this.boxes = document.querySelectorAll(".box");
        console.log(this.boxes);
        this.weaponBoard = [weapon1, weapon2, weapon3, weapon4];

        // generate one weapon of each in random boxes
        for (const eachWeapon of this.weaponBoard) {
            const newWeapon = this.boxes[Math.floor(Math.random() * this.boxes.length)];
            newWeapon.className = "weaponBox";
            console.log(eachWeapon);
        }
    }
}

// Instantiation

const weapon0 = new Weapons("Blaster", 10, '<img src="./media/weapons/bullet.png" alt="Blaster"></img>');
const weapon1 = new Weapons("tri Barrel Plasma Gun", 25, '<img src="./media/weapons/weapon1.png" alt="Tri Barrel Plasma Gun"></img>');
const weapon2 = new Weapons("neuralizer", 15, '<img src="./media/weapons/weapon2.png" alt="Neuralizer"></img>');
const weapon3 = new Weapons("noisy Cricket", 30, '<img src="./media/weapons/weapon3.png" alt="Noisuy Cricket"></img>');
const weapon4 = new Weapons("light Saber Cold Fusion", 20, '<img src="./media/weapons/weapon4.png" alt="Light Saber Cold Fusion"></img>');

const weapon = new Weapons();
weapon.genarateWeapons();