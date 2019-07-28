// Tic Tac Toe 
/*----- constants -----*/ 
const PLAYERS = {
    '1': 'X',
    '-1': 'O'
}
/*----- app's state (variables) -----*/ 
let board, turn, winner

/*----- cached element references -----*/ 
const sqElems = document.querySelector('section');
const button = document.querySelector('button');
/*----- event listeners -----*/ 
sqElems.addEventListener('click', handleSqClick);
button.addEventListener('click', function() {
    init();
})
/*----- event handlers -----*/ 
function handleSqClick(event) {
    console.log(event);
    if(event.target.className === "squares") {
        event.target.textContent = PLAYERS[turn] // 
        turn *= -1;
    }
}

/*----- functions -----*/
init();
function init() {
    board = [ 
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    turn = Math.random() > 0.5 ? 1 : -1 // <--randomly picks who goes first
    console.log(`${turn}'s turn`); 
    winner = null; 
    render();
}

function render() {
    // board.forEach(function(rowArr, rowIndex1) {
        
    // })
    getWinner();
}

function getWinner() {

}



/* 
- 1. make board grid 
- 2. use Math.random to pick which player starts 
- 3. X's and O's --> <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
- 4. switch turn in event handler function 
 5. make sure 
    - once square is full players should not be able to click. !!!!!!
    - render shadow box on hover and if square is empty 
 6. create button that initialises new game. 
    - button must reset board and clear content of the rendered board
 7. 




 === extras === 
  1. display who's turn it is 
        -decide where to update
  2. provide game win logic.
  3. provide cat's game logic === tie
  4. 
  5. add styling 

*/






/* commit message 
    "added random player start, button for game reset, and on clicking square X or O is rendered to board"
*/