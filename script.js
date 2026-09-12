//your JS code here. If required.
let p1=document.getElementById("player-1");
let p2=document.getElementById("player-2");
let btn=document.getElementById("submit");
let msg=document.getElementsByClassName("message")[0];
let cells=document.getElementsByClassName("cell");
let container = document.getElementById("container"); 
let gameBoard = document.getElementById("gameBoard");

let player1Name = "";
let player2Name = "";

let gameStarted = false;  // To track if game started
let turn = "X";

btn.addEventListener("click", function() {
  player1Name = p1.value.trim();
  player2Name = p2.value.trim();

  if(player1Name === "" || player2Name === "") {
    alert("Please enter names for both players.");
    return;
  }

  container.style.display = "none";
  gameBoard.style.display = "block";
  msg.textContent = `${player1Name}, you're up!`;

  gameStarted = true;
});

function checkWinner() {
   if(cells[0].textContent !== "" && 
    cells[0].textContent === cells[1].textContent && 
    cells[1].textContent === cells[2].textContent) {
    return true;
  }

  if(cells[3].textContent !== "" && 
    cells[3].textContent === cells[4].textContent && 
    cells[4].textContent === cells[5].textContent) {
    return true;
  } 

  if(cells[6].textContent !== "" && 
    cells[6].textContent === cells[7].textContent && 
    cells[7].textContent === cells[8].textContent) {
    return true;
  } 

  if(cells[0].textContent !== "" && 
    cells[0].textContent === cells[3].textContent && 
    cells[3].textContent === cells[6].textContent) {
    return true;
  }

  if(cells[1].textContent !== "" && 
    cells[1].textContent === cells[4].textContent && 
    cells[4].textContent === cells[7].textContent) {
    return true;
  }

  if(cells[2].textContent !== "" && 
    cells[2].textContent === cells[5].textContent && 
    cells[5].textContent === cells[8].textContent) {
    return true;
  }

  if(cells[0].textContent !== "" && 
    cells[0].textContent === cells[4].textContent && 
    cells[4].textContent === cells[8].textContent) {
    return true;
  }

  if(cells[2].textContent !== "" && 
    cells[2].textContent === cells[4].textContent && 
    cells[4].textContent === cells[6].textContent) {
    return true;
  } 
  
  
 return false;
}

function currentPlayerName() {
  return turn === "X" ? player1Name : player2Name;
}

for(let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    if(!gameStarted) return; // Ignore clicks if game hasn't started
    if(cells[i].textContent !== "") return; // Ignore if cell already filled

    cells[i].textContent = turn;

    if(checkWinner()) {
      msg.textContent = `${currentPlayerName()} congratulations you won!`;
      gameStarted = false; // Stop the game
      return;
    }

    // Switch turns
    turn = turn === "X" ? "O" : "X";
    msg.textContent = `${currentPlayerName()}, you're up!`;
  });
}