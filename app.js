/*****************STATE******************/

const state = {};

// state.board = ['this is the board']
// console.log(state)

const resetState = () => {

state.board = [
  { value: 'X','O', isTurned: false},
  { value: 'X','O', isTurned: false}, 
  { value: 'X','O', isTurned: false},
  { value: 'X','O', isTurned: false},
  { value: 'X','O', isTurned: false}, 
  { value: 'X','O', isTurned: false},  
  { value: 'X','O', isTurned: false},  
  { value: 'X','O', isTurned: false}, 
  { value: 'X','O', isTurned: false},  
];
state.players = ['',''];
state.score = [0,0];
state.lastTurnedIdx = -1;  //Undefined

};

// When I click on a square I want it to display a word. That wou


/*************DOM SELECTORS**************/
const body = document.querySelector('body')
const board = document.createElement('main');


// console.log('helloooo from app.js!');
// console.log('body');

//h1 is added by creating an element

// Title element is below
const titleH1 = document.createElement('h1');
titleH1.id = 'title';
titleH1.innterText = 'Tic Tac Toe!';

body.appendChild(titleH1)

function removeChildNodes (parent){
while parent.firstChild){
  parent.removeChild(parent.firstChild);
}
}

//Main element is below

const renderBoard = () => {
  board.id = 'board';
  // main.innertext = 'this is main';
    for (let i = 0; i < state.board.length; i++){
      cnst card = state.board[i];
      const squareElem = doment.createElement("div");
      squareElem.className = 'square';    //This adds className of square to each element
      squareElem.dataset.index = i;     //This adds an index to check against state later
      
      if(squareElem.isTurned) squareElem.innerText = card.value;
      board.appendChild(squareElem);
}

body.appendChild(board);
};

//Player element is below
const playerElem = document.createElement
('p');

const renderPlayer = () => {
playerElem.id = 'playerNames';

let playerElemHTML = '<input placeholder="Enter Player 1 
  Name"/><input placeholder="Enter Player 2 Name"/> 
  <button> Game Begins</button>';

playerElem.innterHTML = [playerElemHTML];

body.appendChild(playerElem);
};


function render () {
  renderBoard();
  renderPlayer ();
  console.log('state is: ', state);

}

const takeTurn = (index) => {
  const card = state.board[index];
  if(card.isTurned) return;
  card.isTurned = true;
  let lastTurnedCard = state.board[state.lastTurnedIdx] = || {};

  if(lastTurnedCard.value === card.value) {
   // console.log ('they are the same')
  } else {
    // lastTurnedCard.isTurned = false;
   // card.isTurned = false;
  }
  // console.log (card);
};

/*************EVENT LISTENERS**************/

board.addEventListener('click', (event) => {
  // console.log ('when you click the board');
  //console.log ('event');
  //console.log ('event.target');
  board[0].classList.pop();

  if (!event.target.classList.contains('square')) return;   //<-- for lines, or something small you don't want to click on
  // console.dir(event.target); 
  // console.dir(event.target.dataset); 
  // console.log(event.target.dataset); 
  let squareIdx = event.target.datatset.index
  takeTurn(squareIdx)
 
  // console.log (card);
  render ();
});

resetState();
render ();


















const gameState = {
    players: ['x', 'o'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }


  let userText = document.getElementById('userText')
  let restartButton = document.getElementById('restartButton')
  let squares = Array.from(document.getElementsByClassName('square'))

 // console.log(squares)

  const charO = "O"
  const charX = "X"
  let presentPlayer = charO
  let emptySquares = Array (9).fill(null)

  // console.log(emptySquares)


  const gameBegins = () => {
    squares.forEach(square => square.addEventListener('click', squareClicked'))
  } 

  function squareClicked(b) {
    // console.log(b.target)
    const id = b.target.id

    if (!emptySquare[id]){
      spaces[id] = presentPlayer
      b.target.innterText = presentPlayer

      if(playerWins()){
        userMessage = '${presentPlayer}wins!'
      }

      presentPlayer = presentPlayer == charO   // <-- how do I write changing players?
    }
  }

const correctCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [2,4,6],
  [0,4,8],
  [0,3,6],
  [1,4,7],
  [2,5,8]
]

function playerWins(){
  for (const condition of playerWins)
}

  restartButton.addEventListener('click', restart)

  function restart () {
    emptySquares.fill(null)

    squares.forEach(square => {
      square.innerText = ''
    })

    userMessage = 'Tic Tac Toe'

    presentPlayer = charO
  }


  resetState();  
