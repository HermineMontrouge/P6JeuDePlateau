// cette version n'a pas l'option no superposition
// cette version n'a pas l'option noProximityOfPlayers

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
                newBox.className = `box y-${i} x-${y} empty`;
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
    }

    genaratePlayers() {

        const emptyBoxes = document.querySelectorAll(".empty");

        for (let i = 0; i < 2; i++) {
            this._players = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
            this._players.classList.remove("empty");
            if (i === 0) {
                // On ajoute à la div la classe "player1" et on supprime la classe "empty"
                this._players.classList.add("player1");
                console.log(this._players);
                ////////////////////////////////////////////////////////////////////////
                // Création des 4 variables qui pointent vers case de gauche, droite, haut et bas de player1 
                // Suppression de la classe "empty" sur ces cases + ajoute d'une classe spécifique
                // Player2 ne peut être généré que dans une case "empty" les deux joueurs ne pourront pas être côte à côte
                // let leftBoxOfPlayer1 = players x - 1;
                // leftBoxOfPlayer1.classList.remove("empty")
                // leftBoxOfPlayer1.classList.add("left");
                // let rigthBoxOfPlayer1 = players x + 1;
                // rigthBoxOfPlayer1.classList.remove("empty")
                // rigthBoxOfPlayer1.classList.add("rigth");
                // let topBoxOfPlayer1 = players y - 1;
                // topBoxOfPlayer1.classList.remove("empty")
                // topBoxOfPlayer1.classList.add("top");
                // let bottomBoxOfPlayer1 = players y + 1;
                // bottomBoxOfPlayer1.classList.remove("empty")
                // bottomBoxOfPlayer1.classList.add("bottom");
                // console.log(leftBoxOfPlayer1);
                // console.log(rigthBoxOfPlayer1);
                // console.log(topBoxOfPlayer1);
                // console.log(bottomBoxOfPlayer1);
                ////////////////////////////////////////////////////////////////////////
            } else {
                // On ajoute à la div la classe "player2" et on supprime la classe "empty"
                this._players.classList.add("player2");
                console.log(this._players);
            }
        }
    }

    generateWeapons() {

        const emptyBoxes = document.querySelectorAll(".empty");

        for (let i = 0; i < 4; i++) {
            this._weapons = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
            this._weapons.classList.remove("empty");
            if (i === 0) {
                // On ajoute à la div la classe "weapon1" et on lui supprime la classe "empty"
                this._weapons.classList.add("weapon1");
                console.log(this._weapons);
            } else if (i === 1) {
                // On ajoute à la div la classe "weapon2" et on lui supprime la classe "empty"
                this._weapons.classList.add("weapon2");
                console.log(this._weapons);
            } else if (i === 2) {
                // On ajoute à la div la classe "weapon3" et on lui supprime la classe "empty"
                this._weapons.classList.add("weapon3");
                console.log(this._weapons);
            } else if (i === 3) {
                // On ajoute à la div la classe "weapon4" et on lui supprime la classe "empty"
                this._weapons.classList.add("weapon4");
                console.log(this._weapons);
            }
        }
    }

    // noProximityForPlayers() {

    //     // Récupèration de la case player1
    //     let player1 = document.querySelector(".player1");
    //     console.log(player1);

    //     // Création des 4 variables qui pointent vers case de gauche, droite, haut et bas de player1 
    //     // Suppression de la classe "empty" sur ces cases + ajoute d'une classe spécifique
    //     // Player2 ne peut être généré que dans une case "empty" les deux joueurs ne pourront pas être côte à côte
    //     let leftBoxOfPlayer1 = player1 x - 1;
    //     leftBoxOfPlayer1.classList.remove("empty")
    //     leftBoxOfPlayer1.classList.add("left");
    //     let rigthBoxOfPlayer1 = player1 x + 1;
    //     rigthBoxOfPlayer1.classList.remove("empty")
    //     rigthBoxOfPlayer1.classList.add("rigth");
    //     let topBoxOfPlayer1 = player1 y - 1;
    //     topBoxOfPlayer1.classList.remove("empty")
    //     topBoxOfPlayer1.classList.add("top");
    //     let bottomBoxOfPlayer1 = player1 y + 1;
    //     bottomBoxOfPlayer1.classList.remove("empty")
    //     bottomBoxOfPlayer1.classList.add("bottom");
    //     console.log(leftBoxOfPlayer1);
    //     console.log(rigthBoxOfPlayer1);
    //     console.log(topBoxOfPlayer1);
    //     console.log(bottomBoxOfPlayer1);

    //     // Players correspond au dernier joueur généré, donc player2
    //     // Tant que player2 == cases adjacentes à player1 random player2
    //     while (players == leftBoxOfPlayer1 || 
    //         players == rigthBoxOfPlayer1 ||
    //         players == topBoxOfPlayer1 ||
    //         players == bottomBoxOfPlayer1) {
    //             players = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    //         }
    // }

    // noSuperposition() {
    //     const emptyBoxes = document.querySelectorAll(".empty");

    //     if (
    //         this._weapon4 == this._weapon3 ||
    //         this._weapon4 == this._weapon2 ||
    //         this._weapon3 == this._weapon2 ||
    //         this._weapon4 == this._weapon1 ||
    //         this._weapon3 == this._weapon1 ||
    //         this._weapon2 == this._weapon1 ||
    //         this._weapon4 == this._player2 ||
    //         this._weapon3 == this._player2 ||
    //         this._weapon2 == this._player2 ||
    //         this._weapon1 == this._player2 ||
    //         this._weapon4 == this._player1 ||
    //         this._weapon3 == this._player1 ||
    //         this._weapon2 == this._player1 ||
    //         this._weapon1 == this._player1 ||
    //         this._player2 == this._player1
    //     ) {
    //         console.log("noSuperposition");
    //         this._players = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    //         this._weapons = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    //     }
    //     // console.log(boxes);
    // }
}

// Instantiation

const newBoard = new Board(10, 10, 14, 2, 4);

newBoard.generateBoard();
newBoard.generateIdForEachBox();
newBoard.generateUnreachableBoxes();
newBoard.genaratePlayers();
newBoard.generateWeapons();
// newBoard.noSuperposition();
// newBoard.noProximityForPlayers();