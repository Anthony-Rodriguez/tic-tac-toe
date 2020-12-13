'use strict'
const api = require('./api')
const ui = require('./ui')
// const events = require('./events')
// const store = require('./../../store')
let numberOfTurns = 0

const onGameStart = function (event) {
  numberOfTurns = 0
  event.preventDefault()
  api.gameStart()
    .then(ui.gameStartSuccess)
    .then(ui.boardRevealSuccess)
    .catch(ui.failure)
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
      .then(function (response) {
        ui.cellUpdateSuccess(response, player, event, cellIndex)
        numberOfTurns++
      })
  } else {
    $('#message').html('<div><h2>Choose an empty tile!</h2></div>')
  }
}

const onGameRestart = function (event) {
  event.preventDefault()
  const cellIndex = 10
  const player = 'restart'
  numberOfTurns = 0
  api.gameStart()
    .then(ui.gameStartSuccess)
    .then(ui.gameRestartSuccess(cellIndex, player))
    .catch(ui.failure)
  $('.col-4').bind('click', onCellUpdate)
}
module.exports = {
  onGameStart,
  onCellUpdate,
  numberOfTurns,
  onGameRestart
}
