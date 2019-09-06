class Game {
    constructor() {
        this._gameBoard = new Board(10, 10, 14);
        this._currentPlayer;
        this._currentEnemy;
        this._endGame = false;
        this._fighting = false;
        this._player1;
        this._player2;
    }

    whoHasToPlay() {
        // turn-based running

        const getPlayer1 = document.getElementsByClassName("player1");
        const getPlayer2 = document.getElementsByClassName("player2");
        this._player1 = getPlayer1[0];
        this._player2 = getPlayer2[0];
        console.log(this._player1);
        console.log(this._player2);

        if (this._currentPlayer == this._player1) {
            this._currentPlayer = this._player1;
            this._currentEnemy = this._player2;
        } else if (this._currentPlayer == this._player2) {
            this._currentPlayer = this._player2;
            this._currentEnemy = this._player1;
        }
    }

    move() {
        // Listening the box id choice
        const boxes = document.querySelectorAll(".box");
        console.log(this._player1);
        for (let box of boxes) {
            if (box.classList.contains("highlight")) {
                box.addEventListener("click", function () {
                    this._player1.classList.remove("player1", "empty");
                    box.classList.replace("highlight", "player1");
                    console.log(box);
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