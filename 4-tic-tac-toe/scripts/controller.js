window.addEventListener('load', bindEvents);

let isXTurn = true;


const isWinner = () => {
    
    const squares = document.querySelectorAll('.square');
    
    const winner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [3, 4, 6],
    ];
    
    for(let index = 0; index < winner.length; index++) {
        
        [a, b, c] = winner[index];
                
        if(squares[a].innerText && squares[a].innerText === squares[b].innerText && squares[a].innerText === squares[c].innerText) {
            
            return squares[a].innerText;
        }
            
    }

    return null;
}

const clearBoard = function() {

    const squares = document.querySelectorAll('.square');

    for(let index = 0; index < squares.length; index++) {

        squares[index].innerText = '';
    }
}

const isBoardFull = function() {

    const squares = document.querySelectorAll('.square');

    for(let index = 0; index < squares.length; index++) {

        if(squares[index].innerText === '') {

            return false;
        }
    }

    return true;
}

    
const move = function(event) {
        
    const square = event.target;
    const status = document.querySelector('#status > span');
    
    if(square.className != 'square') {
        
        return;
    }
        
    if(square.innerText === ''){
        
        if(isXTurn) {
            
            square.innerText = 'X';
            status.innerText = 'O';
            isXTurn = !isXTurn;
        }
        
        else {
            
            square.innerText = 'O';
            status.innerText = 'X';
            isXTurn = !isXTurn;
        }
    }

    const winner = isWinner();

    if(winner) {
        
        clearBoard();
        return document.querySelector("#winner").innerText = winner + ' is the winner!';
    }

    if(isBoardFull()) {
        
        clearBoard();
        return document.querySelector("#winner").innerText = 'Draw!';
    }
}

function bindEvents() {

    document.querySelector('#board').addEventListener('click', move);    
}