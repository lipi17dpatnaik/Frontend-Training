const statusDisplay = document.querySelector('.status');

let gameActive = true;
let currentPlayer = "X";

let boardSize;
let gameContainer;

let gameState;

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

const allBoxesEqual = arr => arr.every(val => val === arr[0]);

const backgroundMusic = new sound("gametheme.mp3");

let winningConditions = [],
    row=[],
    col=[],
    tmpArray=[],
    i,j;

function displayGameBoard(){
    handleRestartGame();
    boardSize = parseInt(document.getElementById("boxSize").value);
    gameContainer = document.getElementsByClassName('container')[0];
    gameContainer.innerHTML="";
    gameContainer.style["gridTemplateColumns"]=`repeat(${boardSize},auto)`;
    gameContainer.style["width"]=`${boardSize*102}px`;

    gameState = Array.from({length:boardSize*boardSize}).map(x => "");

    statusDisplay.innerHTML = currentPlayerTurn();

    winningConditions = [];
    row=[];
    col=[];
    tmpArray=[];

    // draw board
    for (i=0;i<boardSize*boardSize;i++){
        const tmpBox = document.createElement('div');
        tmpBox.setAttribute('data-cell-index',i);
        tmpBox.className="cell";
        gameContainer.appendChild(tmpBox);
    }

    // add rows winning condition
    for(i=0;i<boardSize;i++){
        row=boardSize*i;
        tmpArray=[];
        for(j=0;j<boardSize;j++){
            tmpArray.push(row+j);
        }
        winningConditions.push(tmpArray);
    }

    // add cols winning conditions
    for(j=0;j<boardSize;j++){
        col=j;
        tmpArray=[];
        for(i=0;i<boardSize;i++){
            tmpArray.push(col+boardSize*i);
        }
        winningConditions.push(tmpArray);
    }

    // add diagonals winning conditions
    tmpArray=[];
    for(i=0;i<boardSize;i++){
        tmpArray.push(boardSize*i+i);
    }
    winningConditions.push(tmpArray);

    tmpArray=[];
    for(i=0;i<boardSize;i++){
        tmpArray.push(boardSize*i+boardSize-i-1);
    }
    winningConditions.push(tmpArray);

    document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
    document.querySelector('.restart').addEventListener('click', handleRestartGame);
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
	const boxValues = winCondition.map(j => gameState[j]);
	
	if (boxValues.includes('')){
            continue;
        }

	if (allBoxesEqual(boxValues)){
	    roundWon=true;
	    break;
	}
    }

    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
	backgroundMusic.stop();
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
	backgroundMusic.stop();
        return;
    }

    handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleRestartGame() {
    backgroundMusic.stop();
    backgroundMusic.play();
    gameActive = true;
    currentPlayer = "X";
    gameState = Array.from({length:boardSize*boardSize}).map(x => "");
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

document.querySelector('.createBox').addEventListener('click', displayGameBoard);
