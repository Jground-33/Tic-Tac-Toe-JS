// Tic Tac Toe 
/*----- constants -----*/ 
const COLORS = {
    '0': '#eeeeff',
    x: '#00ff00',
    o: '#ff00ff'
}

/*----- app's state (variables) -----*/ 
let board, turn, winner

/*----- cached element references -----*/ 
/*----- event listeners -----*/ 
const sqElems = document.querySelector('section')
sqElems.addEventListener('click', handleSqClick)

/*----- event handlers -----*/ 
function handleSqClick(event) {
    console.log(event)
    event.target.backGroundColor = COLORS.x
    
}

/*----- functions -----*/
function init() {
    board = [ 
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    turn = 1;
    winner = null; // 1, -1, null (game still on), T (tie)
    render();
}

function render() {

}



/* 
1. make board grid 
2. if Math.random to pick which player starts
3. X's and O's --> <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
*/