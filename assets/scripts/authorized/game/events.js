'use strict'
const api = require('./api')
const ui = require('./ui')
const store = require('./../../store')
let numberOfTurns = 0

const onGameStart = function (event) {
  event.preventDefault()
  api.gameStart()
    .then(ui.gameStartSuccess)
    .catch(ui.failure)
}
const onBoardReveal = function (event) {
  event.preventDefault()
  ui.boardRevealSuccess()
}
const onCellUpdate = function (event) {
  const cellIndex = $(this).data('cell-index')
  const cell = event.target
  let player
  const players = {
    player1: 'X',
    player2: 'O'
  }
  if (numberOfTurns % 2 === 0) {
    player = players.player1
  } else {
    player = players.player2
  }
  if (($(cell).css('background-image') === 'none')) {
    api.cellUpdate(cellIndex, player)
      .then(ui.cellUpdateSuccess(player))
    numberOfTurns++
    console.log(store.game.cells)
  } else {
    $('#message').html('<div><h2>Choose an empty tile!</h2></div>')
  }
}

module.exports = {
  onGameStart,
  onBoardReveal,
  onCellUpdate,
  numberOfTurns
}
