// Tic Tac Toe 
/*----- constants -----*/ 
const PLAYERS = {
	'0': '',
    '1': 'X',
    '-1': 'O'
};
/*----- app's state (variables) -----*/ 
let board, turn, winner
/*----- cached (row, rowIdx) references -----*/ 
const message = document.getElementById('msg');
const gameBoard = document.querySelector('section.board');
const button = document.querySelector('button');
/*----- event listeners -----*/ 
gameBoard.addEventListener('click', handleSqClick);
button.addEventListener('click', () => init()); 
/*----- event handlers -----*/ 
function handleSqClick(event) {
	let colIdx = event.target.id[3]; 
	let rowIdx = event.target.id[1];
	// Checks if element is a square & if board space is available then updats board and switches turn
	if (colIdx && board[rowIdx][colIdx] === 0){
	board[rowIdx][colIdx] = turn; 
	turn *= -1;
	}
	winner = getWinner(rowIdx, colIdx);
	render();
}
/*----- functions -----*/
init();
function init() {
    board = [ 
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    turn = Math.random() > 0.5 ? 1 : -1; // <--randomly picks who goes first
    winner = null; 
    render();
}

function render() {
	// render board according to board Array
	board.forEach(function(rowArr, rowIndex) { 
		rowArr.forEach(function(value, colIndex) {
			let div = document.getElementById(`r${rowIndex}c${colIndex}`);
			div.textContent = PLAYERS[board[rowIndex][colIndex]];
			div.className = value === 0 ? 'squares hoverable' : 'squares';
		});
	});
	if(winner) alert(`${PLAYERS[winner]} is the winner`); // alerts who has was.
	message.textContent = `${PLAYERS[turn]}'s turn`; // render's current players turn.
}

function getWinner(rowIdx, colIdx) {
	let result;
	// checks rows
	if(Math.abs(board[rowIdx].reduce((x,y) => x + y)) === 3) result = turn * -1;
	// checks cols and diags RF
	let colSum = 0;
	let topDiagSum = 0;
	let bottomDiagSum = 0;
	for(let i = 0, j = 2; i < 3; i++, j--) {
		colSum += board[i][colIdx];
		topDiagSum += board[i][i];
		bottomDiagSum += board[j][i];
	}
	if(Math.abs(colSum) === 3 || Math.abs(bottomDiagSum) === 3 || Math.abs(topDiagSum) === 3) result = turn * -1;
	return result;
}