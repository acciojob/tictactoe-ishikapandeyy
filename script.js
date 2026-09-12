//your JS code here. If required.
let p1=document.getElementById("player-1");
let p2=document.getElementById("player-2");
let btn=document.getElementById("gamebtn");
let msg=document.getElementsByClassName("message")[0];
let cells=document.getElementsByClassName("cell");
let container = document.getElementById("container"); 
let gameBoard = document.getElementById("gameBoard");

btn.addEventListener("click", function() {
  let name1 = p1.value;
  let name2 = p2.value;

  if(name1 === "" || name2 === "") {
    alert("Please enter names for both players.");
    return;
  }

  console.log(name1, name2);
   container.style.display = "none";
  msg.textContent = `${name1}, you're up!`;
 
})

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

let turn = "X";

for(let i = 0; i < cells.length; i++) { 
  cells[i].addEventListener("click", function() { 
    if(cells[i].textContent !== "") {
      return;
    }
    cells[i].textContent = turn;
    
    if(checkWinner()) {
     if(turn === "X") {
        msg.textContent = `${turn} wins!`;
      } else {
        msg.textContent = `${turn} wins!`;
      }
      return;
    }
    if(turn === "X") {
      turn = "O";
      msg.textContent = `${turn}, you're up!`;
    } else {
      turn = "X";
      msg.textContent = `${turn}, you're up!`;
    }
  }); 
}