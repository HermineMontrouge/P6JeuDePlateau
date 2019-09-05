class Game {
    constructor() {
        this.gameBoard = new Board(10, 10, 14);
        this.currentPlayer;
        this.currentEnemy;
        this.endGame = false;
        this.fighting = false;
    }

    whoHasToPlay() {
        // turn-based running

        const getPlayer1 = document.getElementsByClassName("player1");
        const getPlayer2 = document.getElementsByClassName("player2");
        const player1 = getPlayer1[0];
        const player2 = getPlayer2[0];
        console.log(player1);
        console.log(player2);

        if (this.currentPlayer == player1) {
            this.currentPlayer = player1;
            this.currentEnemy = player2;
        } else if (this.currentPlayer == player2) {
            this.currentPlayer = player2;
            this.currentEnemy = player1;
        }
    }

    move() {
        // Listening the box id choice
        const boxes = document.querySelectorAll(".box");
        for (let box of boxes) {
            if (box.classList.contains("highlight")) {
                box.addEventListener("click", function (id) {
                    let boxPosition = id.target.innerHTML;
                    console.log(boxPosition);
                });
            }
        }
    }

    swapWeapon() {
        // Swap the currentPlayer weapon against the one on his box

    }

}

const newGame = new Game;

newGame.whoHasToPlay();
newGame.move();
newGame.swapWeapon();