let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelectorAll("#resetbutton");
let newbutton = document.querySelectorAll("#newbutton");
let msgcontainer = document.querySelectorAll(".msgcontainer");
let msg = document.querySelectorAll("#msg");

let turnO = true;

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkwinner();
  });
});
const showwinner = (winner) => {
  msg.innerText = `congratulations, winner is ${winner}`;
  msgcontainer.classList.remove("hide");
};

const checkwinner = () => {
  for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        console.log("winner", pos1val);
        showwinner();
      }
    }
  }
};
