let p1 = document.getElementById("player-1");
let p2 = document.getElementById("player-2");
let btn = document.getElementById("submit");
let msg = document.getElementsByClassName("message")[0];
let cells = document.getElementsByClassName("cell");
let container = document.getElementById("container");
let gameBoard = document.getElementById("gameBoard");

let player1Name = "";
let player2Name = "";
let currentPlayer = "X";
let gameStarted = false;

btn.addEventListener("click", function () {
    player1Name = p1.value.trim();
    player2Name = p2.value.trim();

    if (player1Name === "" || player2Name === "") {
        alert("Please enter names for both players.");
        return;
    }

    container.style.display = "none";
    gameBoard.style.display = "block";

    gameStarted = true;
    currentPlayer = "X";

    msg.textContent = player1Name + ", you're up!";
});

function checkWinner() {
    let board = [];

    for (let i = 0; i < 9; i++) {
        board[i] = cells[i].textContent;
    }

    // Rows
    if (board[0] !== "" && board[0] === board[1] && board[1] === board[2]) {
        return true;
    }

    if (board[3] !== "" && board[3] === board[4] && board[4] === board[5]) {
        return true;
    }

    if (board[6] !== "" && board[6] === board[7] && board[7] === board[8]) {
        return true;
    }

    // Columns
    if (board[0] !== "" && board[0] === board[3] && board[3] === board[6]) {
        return true;
    }

    if (board[1] !== "" && board[1] === board[4] && board[4] === board[7]) {
        return true;
    }

    if (board[2] !== "" && board[2] === board[5] && board[5] === board[8]) {
        return true;
    }

    // Diagonals
    if (board[0] !== "" && board[0] === board[4] && board[4] === board[8]) {
        return true;
    }

    if (board[2] !== "" && board[2] === board[4] && board[4] === board[6]) {
        return true;
    }

    return false;
}

function getCurrentPlayerName() {
    if (currentPlayer === "X") {
        return player1Name;
    } else {
        return player2Name;
    }
}

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function () {
        if (!gameStarted) {
            return;
        }

        if (cells[i].textContent !== "") {
            return;
        }

        cells[i].textContent = currentPlayer;

        // Check winner immediately after the move
        if (checkWinner()) {
            msg.textContent = getCurrentPlayerName() + " congratulations you won!";
            gameStarted = false;
            return;
        }

        // Check draw
        let draw = true;

        for (let j = 0; j < cells.length; j++) {
            if (cells[j].textContent === "") {
                draw = false;
                break;
            }
        }

        if (draw) {
            msg.textContent = "It's a draw!";
            gameStarted = false;
            return;
        }

        // Change player
        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }

        msg.textContent = getCurrentPlayerName() + ", you're up!";
    });
}
