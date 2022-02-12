window.addEventListener('load', init)

function init() {
  initState()
  bindEvents()
}

function bindEvents() {
  document.querySelector('button').addEventListener('click', initGame)
  document.querySelector('table').addEventListener('click', playMove)
}

const state = {
  players: null,
  move: null,
  x: null,
  o: null,
  table: null,
}

//move: 0 -> 'O' | 1 -> 'X'
function initState() {
  state.move = 'O'
  state.table = [].fill(null)
  state.players = []
  state.player = 0
}

const changeMove = function () {
  const prevMove = state.move

  if (state.move === 'X') state.move = 'O'
  else state.move = 'X'

  return prevMove
}

const getPlayer = function (move) {
  if (move === 'X') {
    return state.x
  } else {
    return state.o
  }
}

const playMove = function (e) {
  if (e.target.tagName != 'TD') return

  const cell = e.target

  if (state.table[parseInt(cell.id)] != null) return

  const currMove = changeMove()

  cell.innerText = currMove
  state.table[parseInt(cell.id)] = currMove
  const winner = isWin(state.table)

  if (winner) {
    console.log(winner)
    displayWinner(winner)
  }
}

const isWin = function (table) {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let outer = 0; outer < winConditions.length; outer++) {
    const [a, b, c] = winConditions[outer]

    if (table[a] && table[a] === table[b] && table[b] === table[c]) {
      return table[a]
    }
  }
}

const displayWinner = function (winner) {
  document.querySelector('#winner').innerText = `Winner is ${getPlayer(winner)}`
}

const getInput = function () {
  const players = document.querySelectorAll('input')
  const firstMove = document.querySelector('select').value
  const p1 = players[0].value
  const p2 = players[1].value

  const data = { p1, p2, firstMove }

  console.log(data)
  return data
}

const initGame = function () {
  const data = getInput()

  state.move = data.firstMove

  if (state.move === 'X') {
    state.x = data.p1
    state.o = data.p2
  } else {
    state.x = data.p2
    state.o = data.p1
  }

  state.players.push(data.p1)
  state.players.push(data.p2)

  document.querySelector('#game').style.display = 'block'
}
