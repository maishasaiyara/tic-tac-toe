/********************STATE********************/
let state = {};

const resetState = () => {
    state.board = Array(9);
    state.currentPlayerIdx = -1;
    state.players = ['', ''];
    state.lastTurnedIdx = -1;
    state.pieces = [-1, -2, -3, -4, -5, -6, -7, -8, -9];
    state.winner = -1;
};

/****************DOM SELECTORS****************/
const body = document.querySelector('body')
let startButton;

// Title element below
function setTitle(theTitle) {
    const titleH1 = document.createElement('h1');
    titleH1.id = 'titleH1';
    titleH1.innerText = theTitle;
    body.appendChild(titleH1);
}

function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*******************RENDER FUNCTIONS************/
const renderBoard = () => {
    const board = document.createElement('main');
    removeChildNodes(board);
    board.id = 'board';

    for (let i = 0; i < state.board.length; i++) {
        const squareElem = document.createElement('div');
        squareElem.className = 'square';
        squareElem.dataset.index = i;

        board.appendChild(squareElem);
    }

    body.appendChild(board);
};

const renderPlayer = () => {
    const playerElem = document.createElement('p');

    playerElem.id = 'playerNameElem';
    
    let playerElemHTML = '<input type="text" name="player1" placeholder="Enter Player 1 Name" /> <input type="text" name="player2" placeholder="Enter Player 2 Name" /> <button id="start"> Start Game </button>';

    playerElem.innerHTML = playerElemHTML;

    body.appendChild(playerElem);
    startButton = document.querySelector("#start");
};

const renderScoreElem = () => {
    let scoreElem = document.createElement('p');
    scoreElem.innerHTML = `<div>${state.players[0]} : ${state.score[0]}</div><div>${state.players[1]} : ${state.score[1]}</div>`
    document.querySelector("#titleH1").appendChild(scoreElem);
}

/****************EVENT LISTENERS****************/

function addEvents() {
    board.addEventListener('click', (event) => {
        if (!event.target.classList.contains('square')) return;
        console.log(state.players);
        let squareIdx = event.target.dataset.index;
        takeTurn(squareIdx)
    });

    startButton.addEventListener('click', (event) => {
        setPlayerNames();

        if(state.players[0] === '' || state.players[1] === '') return;

        setFirstPlayer();
        renderTurnElem();
        document.querySelector("#playerNameElem").remove();
    });
}

/********************HELPERS********************/
function setPlayerNames() {
    state.players[0] = document.querySelector('input[name="player1"]').value;
    state.players[1] = document.querySelector('input[name="player2"]').value;
}

function handleEnd(){
    let turnElem = document.querySelector("#titleH1 p");
    turnElem.innerHTML = `${state.players[state.currentPlayerIdx]} wins!!`;

    let restartButton = document.createElement("button");
    restartButton.innerHTML = `<button id="reset"> New Game </button>`

    document.querySelector("#titleH1").append(restartButton);

    restartButton.addEventListener('click', (event) => {
        console.log("restarted")
    });
}

function setFirstPlayer(){
    state.currentPlayerIdx = getRandomInt(0,1);
}

const renderTurnElem = () => {
    let turnElem = document.createElement('p');
    turnElem.innerHTML = `It's currently ${state.players[state.currentPlayerIdx]}'s turn.`;
    document.querySelector("#titleH1").appendChild(turnElem);
}

function updateTurnElem() {
    let turnElem = document.querySelector("#titleH1 p");
    turnElem.innerHTML = `It's currently ${state.players[state.currentPlayerIdx]}'s turn.`;
}

function checkForWin() {

    // Loop over rows
    for (let i = 0; i < 3; i++) {
        if (state.pieces[3 * i] === state.pieces[(3 * i) + 1] && state.pieces[3 * i] === state.pieces[(3 * i) + 2]) {
            state.winner = state.currentPlayerIdx;
            return true;
        }
    }

    // Loop over columns
    for (let i = 0; i < 3; i++) {
        if (state.pieces[i] === state.pieces[i + 3] && state.pieces[i] === state.pieces[i + 6]) {
            state.winner = state.currentPlayerIdx;
            return true;
        }
    }

    // Check downward diagonal
    if (state.pieces[0] === state.pieces[4] && state.pieces[0] === state.pieces[8]) {
        state.winner = state.currentPlayerIdx;
        return true;
    }

    // Check upward diagonal
    if (state.pieces[2] === state.pieces[4] && state.pieces[2] === state.pieces[6]) {
        state.winner = state.currentPlayerIdx;
        return true;
    }

    return false;
}

function takeTurn(squareNum) {
    if(state.players[0] === '' || state.players[1] === '') return;
    
    if (state.winner != -1) return;

    let eachSquare = document.querySelector('#board').children;

    if (eachSquare[squareNum].firstChild != null) return;

    let playerTurn = document.createElement('p');

    let playerPiece;

    if (state.currentPlayerIdx === 0) {
        playerPiece = "⭕";
        state.pieces[squareNum] = 0;
        if (checkForWin()) { handleEnd(); }
        state.currentPlayerIdx = 1;
    } else {
        playerPiece = "❌";
        state.pieces[squareNum] = 1;
        if (checkForWin()) { handleEnd(); }
        state.currentPlayerIdx = 0;
    }

    playerTurn.innerText = playerPiece;

    eachSquare[squareNum].appendChild(playerTurn);

    updateTurnElem();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function main() {
    setTitle('Tic Tac Toe!');

    resetState();
    renderBoard();
    renderPlayer();

    addEvents();
}

main();

