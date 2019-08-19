// class Weapon {
//     constructor(name, damage, image) {
//         this.name = name;
//         this.damage = damage;
//         this.image = image;
//         this.boxes;
//     }

//     genarateWeapons() {

//         this.boxes = document.querySelectorAll(".box");
//         const weaponBoard = [weapon1, weapon2, weapon3, weapon4];

//         // generate one weapon of each in random boxes
//         for (let i = 0; i < weaponBoard.length; i++) {
//             const newWeapon = this.boxes[Math.floor(Math.random() * this.boxes.length)];
//             if (i === 0) {
//                 newWeapon.className = "box weapon1";
//             } else if (i === 1) {
//                 newWeapon.className = "box weapon2";
//             } else if (i === 2) {
//                 newWeapon.className = "box weapon3";
//             } else if (i === 3) {
//                 newWeapon.className = "box weapon4";
//             }
//         }
//     }
// }

// // Instantiation

// const weapon0 = new Weapon("Blaster", 10, '<img src="./media/weapons/bullet.png" alt="Blaster"></img>');
// const weapon1 = new Weapon("tri Barrel Plasma Gun", 25, '<img src="./media/weapons/weapon1.png" alt="Tri Barrel Plasma Gun"></img>');
// const weapon2 = new Weapon("neuralizer", 15, '<img src="./media/weapons/weapon2.png" alt="Neuralizer"></img>');
// const weapon3 = new Weapon("noisy Cricket", 30, '<img src="./media/weapons/weapon3.png" alt="Noisuy Cricket"></img>');
// const weapon4 = new Weapon("light Saber Cold Fusion", 20, '<img src="./media/weapons/weapon4.png" alt="Light Saber Cold Fusion"></img>');

// const weapons = new Weapon();
// weapons.genarateWeapons();