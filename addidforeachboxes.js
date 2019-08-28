// cette version n'a pas l'option no superposition

class Board {
    constructor(row, box, unreachableBox, players, weapons) {
        this._row = row;
        this._box = box;
        this._unreachableBox = unreachableBox;
        this._players = players;
        this._weapons = weapons;
    }

    generateBoard() {

        for (let i = 0; i < 10; i++) {
            const newRow = document.createElement("div");
            newRow.className = "row";
            board.appendChild(newRow);

            for (let y = 0; y < 10; y++) {
                const newBox = document.createElement("div");
                newBox.className = `box y-${i} x-${y}`;
                newRow.appendChild(newBox);
            }
        }
    }

    generateIdForEachBox() {

        const boxes = document.querySelectorAll(".box");
        let index = 0;
        for (let eachBox of boxes) {
            eachBox.id = index++;
        }
    }

    generateUnreachableBoxes() {

        // Récupération du tableau contenant les 100 boîtes
        const boxes = document.querySelectorAll(".box");

        // Génération aléatoire d'environ 14 asteroids (parfois moins si elles se superposent)
        for (let i = 0; i < 14; i++) {
            this._unreachableBox = boxes[Math.floor(Math.random() * boxes.length)];
            // On ajoute aux div la classe "unreachable" et on supprime la classe "empty"
            this._unreachableBox.classList.add("unreachable");
            this._unreachableBox.classList.remove("empty");
        }
        console.log(this._unreachableBox); // Affihe la dernière unreachable créée <div class="box y-3 x-4 unreachable"></div>
    }

    genaratePlayers() {

        const boxes = document.querySelectorAll(".box");

        for (let i = 0; i < 2; i++) {
            this._players = boxes[Math.floor(Math.random() * boxes.length)];
            if (i === 0) {
                // On ajoute à la div la classe "player1" et on supprime la classe "empty"
                this._players.classList.add("player1");
                this._players.classList.remove("empty");
                console.log(this._players);
            } else {
                // On ajoute à la div la classe "player2" et on supprime la classe "empty"
                this._players.classList.add("player2");
                this._players.classList.remove("empty");
                console.log(this._players);
            }
        }
    }

    generateWeapons() {

        const boxes = document.querySelectorAll(".box");

        for (let i = 0; i < 4; i++) {
            this._weapons = boxes[Math.floor(Math.random() * boxes.length)];
            if (i === 0) {
                // On ajoute à la div la classe "weapon1" et on lui supprime la classe "empty"
                this._weapons.classList.add("weapon1");
                this._weapons.classList.remove("empty");
                console.log(this._weapons);
            } else if (i === 1) {
                // On ajoute à la div la classe "weapon2" et on lui supprime la classe "empty"
                this._weapons.classList.add("weapon2");
                this._weapons.classList.remove("empty");
                console.log(this._weapons);
            } else if (i === 2) {
                // On ajoute à la div la classe "weapon3" et on lui supprime la classe "empty"
                this._weapons.classList.add("weapon3");
                this._weapons.classList.remove("empty");
                console.log(this._weapons);
            } else if (i === 3) {
                // On ajoute à la div la classe "weapon4" et on lui supprime la classe "empty"
                this._weapons.classList.add("weapon4");
                this._weapons.classList.remove("empty");
                console.log(this._weapons);
            }
        }
    }

    //     noSuperposition() {

    //         const boxes = document.querySelectorAll(".box");

    //         while (this._player2 == this._player1 || this._weapon1 == this._player1 ||
    //             this._weapon2 == this._player1 || this._weapon3 == this._player1 ||
    //             this._weapon4 == this._player1 || this._weapon1 == this._player2 ||
    //             this._weapon2 == this._player2 || this._weapon3 == this._player2 ||
    //             this._weapon4 == this._player2 || this._weapon2 == this._weapon1 ||
    //             this._weapon3 == this._weapon1 || this._weapon4 == this._weapon1 ||
    //             this._weapon3 == this._weapon2 || this._weapon4 == this._weapon2 ||
    //             this._weapon4 == this._weapon3) {
    //             console.log("noSuperposition");
    //         }
    //     }
}

// Instantiation

const newBoard = new Board(10, 10, 14, 2, 4);

newBoard.generateBoard();
newBoard.generateIdForEachBox();
newBoard.generateUnreachableBoxes();
newBoard.genaratePlayers();
newBoard.generateWeapons();
// newBoard.noSuperposition();