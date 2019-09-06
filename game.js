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

    highLight() {

        this._currentPlayer = this._player2;
        const player1Id = this._currentPlayer.id;
        // class of the position y of player 1
        const playerPosY = this._currentPlayer.classList.item(2);
        // console.log(playerPosY); Can display for example "x-3"

        this._currentPlayer.classList.add("highlight");

        // Loop on 3 trajectories (3 boxes in a row)
        for (let i = 1; i <= 3; i++) {
            const rigthBox = document.getElementById(parseInt(player1Id) + i);
            // If the element with the id (number of ID of player1 + the value of i) does not have a class "unreachable"
            // AND that same element contains the same class x
            if (rigthBox == null) {
                break; // in case player is on id 97 98 or 99
            } else if (
                !rigthBox.classList.contains("unreachable") &&
                rigthBox.classList.contains(playerPosY)
            ) {
                // Add "highlight" class to this element
                rigthBox.classList.add("highlight");
            } else {
                // If the element with the id (number of the id of the player 1 + the value of i) has a class unreachable
                // or is not on the same x then we stop the loop to not continue the trajectory of highlight
                break;
            }
        }

        for (let i = 1; i <= 3; i++) {
            const leftBox = document.getElementById(parseInt(player1Id) - i);
            if (leftBox == null) {
                break; // in case player id is 99
            } else if (
                !leftBox.classList.contains("unreachable") &&
                leftBox.classList.contains(playerPosY)
            ) {
                leftBox.classList.add("highlight");
            } else {
                break;
            }
        }

        for (let i = 1; i <= 3; i++) {
            const bottomBox = document.getElementById(parseInt(player1Id) + i * 10);
            if (bottomBox && !bottomBox.classList.contains("unreachable")) {
                bottomBox.classList.add("highlight");
            } else {
                break;
            }
        }

        for (let i = 1; i <= 3; i++) {
            const topBox = document.getElementById(parseInt(player1Id) - i * 10);
            if (topBox && !topBox.classList.contains("unreachable")) {
                topBox.classList.add("highlight");
            } else {
                break;
            }
        }
    }

    move() {
        // Listening the box id choice
        const boxes = document.querySelectorAll(".box");

        for (let box of boxes) {
            if (box.classList.contains("highlight")) {
                box.addEventListener("click", function () {
                    console.log(this._currentPlayer);

                    if (this._currentPlayer == this._player1) {
                        // this._currentPlayer.classList.remove("player1");
                        box.classList.replace("highlight", "player1");
                        this._currentPlayer = this._player2;
                    } else if (this._currentPlayer == this._player2) {
                        // this._currentPlayer.classList.remove("player2");
                        box.classList.replace("highlight", "player2");
                        this._currentPlayer = this._player1;
                    }

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
newGame.highLight();
newGame.move();
newGame.swapWeapon();