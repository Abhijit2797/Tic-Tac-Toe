console.log("welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X";

let isgameover = false;

//Function to change Turn

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}
//Function To check for a win

const checkWin = () => {
    //bring all boxtext

    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.getElementsByClassName("info").innerText = boxtext[e[0]].innerText + "Won"
            isgameover = true
            //to display gif
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })

}


//Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play()
            checkWin()
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }

        }
    })
})
//Add eventlistener to Reset button

reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText= ""
    });
        turn = "X";
        isgameover =  false
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})

// let music = new Audio("music.mp3")
// let audioTurn = new Audio("ting.mp3")
// let gameover - new Audio("gameover.mp3")

// // initial value be X
// let turn = "x"

// // function to change turn
// const  changeTurn = ()=>{
//     //using turnerary operator
//     return turn ==="X"?"0":"X"
// }
// //Function To check for a win
// const checkWin = () => {

// }
// //Game logic
// // ADD click event to all boxes
// let boxes = document.getElementsByClassName("box");
// //make it array in order to use foreach and use arrow function
// Array.from(boxes).forEach(element=>{
//     let boxtext = element.querySelector('.boxtext');
//     // add addEventListener to all boxes
//     element.addEventListener('click',()=>{
//         if(boxtext.innerText=== ''){
//             //if boxtext blank than turn boxtext
//             boxtext.innerText = turn;
//             //than changeTurn
//             turn = changeTurn()
//             //than audio will play
//             audioTurn.play()
//             checkWin()
//             //now to change turn for X or Y
//             document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
//         }
//     })
// })