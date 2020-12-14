'use strict'
const store = require('./../../store')
const api = require('./api')

let gamesPlayed = 0

const failure = function (error) {
  $('#message').text(error.responseJSON.message)
}
const gamesGetSuccess = function (response) {
  $('#getGamesTotal').text(response.games.length)
}
const gameStartSuccess = function (response) {
  $('#message').html("<div><h2>Let's begin with player <img src=public/letter-x-img.png></h2></div>")
  $('#game-restart').show()
  $('#game-start').hide()
  $('.container').show()
  $('#game-counter').html(`<div><h2>Game Streak: ${gamesPlayed}</h2></div>`)
  store.game = response.game
}
const cellUpdateSuccess = function (response, player, event, cellIndex) {
  store.game = response.game
  const space = (store.game.cells)
  const picX = ({
    'background-image': "url('public/letter-x-img.png')",
    'background-position': 'center',
    'background-repeat': 'no-repeat',
    'background-size': 'contain'
  })
  const picO = ({
    'background-image': "url('public/letter-o-img.png')",
    'background-position': 'center',
    'background-repeat': 'no-repeat',
    'background-size': 'contain'
  })
  const myBox = event.target
  if (player === 'X') {
    $(myBox).css(picX)
    $('#message').html("<div><h2>It's your turn, player <img src='public/letter-o-img.png'></h2></div>")
    if (space[0] === 'X' && space[1] === 'X' && space[2] === 'X') {
      $('#message').html("<div><h2>Winner: <img src='public/letter-x-img.png'></h2></div>")
      api.gameOver(cellIndex, player)
      $('.col-4').unbind('click')
    } else if (space[3] === 'X' && space[4] === 'X' && space[5] === 'X') {
      $('#message').html("<div><h2>Winner: <img src='public/letter-x-img.png'></h2></div>")
      api.gameOver(cellIndex, player)
      $('.col-4').unbind('click')
    } else if (space[6] === 'X' && space[7] === 'X' && space[8] === 'X') {
      $('#message').html("<div><h2>Winner: <img src='public/letter-x-img.png'></h2></div>")
      api.gameOver(cellIndex, player)
      $('.col-4').unbind('click')
    } else if (space[0] === 'X' && space[3] === 'X' && space[6] === 'X') {
      $('#message').html("<div><h2>Winner: <img src='public/letter-x-img.png'></h2></div>")
      api.gameOver(cellIndex, player)
      $('.col-4').unbind('click')
    } else if (space[1] === 'X' && space[4] === 'X' && space[7] === 'X') {
      $('#message').html("<div><h2>Winner: <img src='public/letter-x-img.png'></h2></div>")
      api.gameOver(cellIndex, player)
      $('.col-4').unbind('click')
    } else if (space[2] === 'X' && space[5] === 'X' && space[8] === 'X') {
      $('#message').html("<div><h2>Winner: <img src='public/letter-x-img.png'></h2></div>")
      api.gameOver(cellIndex, player)
      $('.col-4').unbind('click')
    } else if (space[0] === 'X' && space[4] === 'X' && space[8] === 'X') {
      $('#message').html("<div><h2>Winner: <img src='public/letter-x-img.png'></h2></div>")
      api.gameOver(cellIndex, player)
      $('.col-4').unbind('click')
    } else if (space[2] === 'X' && space[4] === 'X' && space[6] === 'X') {
      $('#message').html("<div><h2>Winner: <img src='public/letter-x-img.png'></h2></div>")
      api.gameOver(cellIndex, player)
      $('.col-4').unbind('click')
      // check for draw by looking for any empty strings left in the space (store.game.cells) array
    } else if (space.includes('') === false) {
      $('#message').html('<div><h2>DRAW GAME!</h2></div>')
      api.gameOver(cellIndex, player)
      $('.col-4').unbind('click')
    }
  }
  if (player === 'O') {
    $(myBox).css(picO)
    $('#message').html("<div><h2>It's your turn, player <img src='public/letter-x-img.png'></h2></div>")
    if (space[0] === 'O' && space[1] === 'O' && space[2] === 'O') {
      $('#message').html("<div><h2>Winner: <img src='public/letter-o-img.png'></h2></div>")
      api.gameOver(cellIndex, player)
      $('.col-4').unbind('click')
    } else if (space[3] === 'O' && space[4] === 'O' && space[5] === 'O') {
      $('#message').html("<div><h2>Winner: <img src='public/letter-o-img.png'></h2></div>")
      api.gameOver(cellIndex, player)
      $('.col-4').unbind('click')
    } else if (space[6] === 'O' && space[7] === 'O' && space[8] === 'O') {
      $('#message').html("<div><h2>Winner: <img src='public/letter-o-img.png'></h2></div>")
      api.gameOver(cellIndex, player)
      $('.col-4').unbind('click')
    } else if (space[0] === 'O' && space[3] === 'O' && space[6] === 'O') {
      $('#message').html("<div><h2>Winner: <img src='public/letter-o-img.png'></h2></div>")
      api.gameOver(cellIndex, player)
      $('.col-4').unbind('click')
    } else if (space[1] === 'O' && space[4] === 'O' && space[7] === 'O') {
      $('#message').html("<div><h2>Winner: <img src='public/letter-o-img.png'></h2></div>")
      api.gameOver(cellIndex, player)
      $('.col-4').unbind('click')
    } else if (space[2] === 'O' && space[5] === 'O' && space[8] === 'O') {
      $('#message').html("<div><h2>Winner: <img src='public/letter-o-img.png'></h2></div>")
      api.gameOver(cellIndex, player)
      $('.col-4').unbind('click')
    } else if (space[0] === 'O' && space[4] === 'O' && space[8] === 'O') {
      $('#message').html("<div><h2>Winner: <img src='public/letter-o-img.png'></h2></div>")
      api.gameOver(cellIndex, player)
      $('.col-4').unbind('click')
    } else if (space[2] === 'O' && space[4] === 'O' && space[6] === 'O') {
      $('#message').html("<div><h2>Winner: <img src='public/letter-o-img.png'></h2></div>")
      api.gameOver(cellIndex, player)
      $('.col-4').unbind('click')
    } else if (space.includes('') === false) {
      $('#message').html('<div><h2>DRAW GAME!</h2></div>')
      api.gameOver(cellIndex, player)
      $('.col-4').unbind('click')
    }
  }
}
const gameRestartSuccess = function (cellIndex, player) {
  $('.col-4').removeAttr('style')
  gamesPlayed += 1
  $('#message').html("<div><h2>Let's begin with player <img src='public/letter-x-img.png'></h2></div>")
  api.gameOver(cellIndex, player)
}

module.exports = {
  failure,
  gamesGetSuccess,
  gameStartSuccess,
  cellUpdateSuccess,
  gamesPlayed,
  gameRestartSuccess
}
