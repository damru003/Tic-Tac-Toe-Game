let boxes = document.querySelectorAll("#box");
let resetbtn = document.querySelector(".resetGame");
let msg = document.querySelector("p");
let turnO = true;


// Winning Pattern's

const Winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// Game Logic

boxes.forEach((i) => {
    i.addEventListener("click", () => {
        if (turnO == true) {
            i.innerText = "O";
            turnO = false;
        } else {
            i.innerText = "X";
            turnO = true;
        }
        i.disabled = true;
        checkWinner();
    });
});


// Chekc Winner Function

const checkWinner = () => {
    for (let i of Winpattern) {
        let pos1val = boxes[i[0]].innerText;
        let pos2val = boxes[i[1]].innerText;
        let pos3val = boxes[i[2]].innerText;

        if( pos1val != "" && pos2val != "" && pos3val != "" ) {
            if (pos1val == pos2val && pos2val == pos3val) {
                msg.innerText = `Congratulations !! Winner is ${pos1val}`;
                disablebtn();
            }
        }
    }
};

// Disable Buttons

const disablebtn = () => {
    for (let i of boxes) {
        i.disabled = true;
    }
};

// Enable Buttons

const enablebtn = () => {
    for (let i of boxes) {
        i.disabled = false;
        i.innerText = "";
    }
};


// Reset The game

const resetGame = () => {
    turnO = true;
    enablebtn();
    msg.innerText = "";
};

resetbtn.addEventListener("click", () => {
    console.log("Reset Game");
    resetGame();
});
