class Board {
    constructor() {
        this.board;
        this.boxes;
    }

    // x abscisses horizontal
    // y ordonnées vertical

    generateBoard() {

        // Selection of id board on the dom
        this.board = document.querySelector("#board");

        for (let row = 0; row < 10; row++) {
            const newRow = document.createElement("div");
            newRow.className = "row";
            board.appendChild(newRow);

            for (let box = 0; box < 10; box++) {
                const newBox = document.createElement("div");
                newBox.className = "box";
                newRow.appendChild(newBox);
            }
        }
    }

    generateUnreachableBoxes() {

        // Selection of class boxes on the dom
        this.boxes = document.querySelectorAll(".box");

        const numberOfUnreachableBoxes = 12;
        // console.log(boxes); renvoie NodeList(100) la liste des 100 div.box dans un tableau
        // console.log(numberOfUnreachableBoxes); renvoie "12"

        for (let i = 0; i < numberOfUnreachableBoxes; i++) {
            const unreachableBox = this.boxes[Math.floor(Math.random() * this.boxes.length)];
            unreachableBox.className = " box unreachable";
            // console.log(boxes); renvoie 12 fois la liste des 100 div.box dans des tableaux
            // console.log(unreachableBox); renvoie 12fois <div class=" box unreachable"></div>
            // console.log(numberOfUnreachableBoxes); renvoie 12 fois "12"
        }
    }


    genaratePlayers() {

        this.boxes = document.querySelectorAll(".box");

        // generate players on random boxes
        const player1 = this.boxes[Math.floor(Math.random() * this.boxes.length)];
        player1.className = "player1Box";
        console.log(player1);

        const player2 = this.boxes[Math.floor(Math.random() * this.boxes.length)];
        player2.className = "player2Box";
        console.log(player2);
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

const newBoard = new Board();
newBoard.generateBoard();
newBoard.generateUnreachableBoxes();


// Instantiation

const player1 = new Player("Deep Space Nine", 100, weapon0, '<img src="./media/players/player1.png" alt="Deep Space Nine"></img>');
const player2 = new Player("Millenium Falcon", 100, weapon0, '<img src="./media/players/player2.png" alt="Millenium Falcon"></img>');

const player = new Player();
player.genaratePlayers();

// Instantiation

const weapon0 = new Weapon("Blaster", 10, '<img src="./media/weapons/bullet.png" alt="Blaster"></img>');
const weapon1 = new Weapon("tri Barrel Plasma Gun", 25, '<img src="./media/weapons/weapon1.png" alt="Tri Barrel Plasma Gun"></img>');
const weapon2 = new Weapon("neuralizer", 15, '<img src="./media/weapons/weapon2.png" alt="Neuralizer"></img>');
const weapon3 = new Weapon("noisy Cricket", 30, '<img src="./media/weapons/weapon3.png" alt="Noisuy Cricket"></img>');
const weapon4 = new Weapon("light Saber Cold Fusion", 20, '<img src="./media/weapons/weapon4.png" alt="Light Saber Cold Fusion"></img>');

const weapon = new Weapon();
weapon.genarateWeapons();