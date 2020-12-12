'use strict'
const store = require('./../../store')
const failure = function (error) {
  $('#message').text(error.responseJSON.message)
}

const gameStartSuccess = function (response) {
  $('#message').html("<div><h2>Let's begin with player </h2><img src='public/letter-x-img.png'></div>")
  $('#game-restart').show()
  $('#game-start').hide()
  $('.container').show()
  store.game = response.game
}
const cellUpdateSuccess = function (response, player, event) {
  store.game = response.game
  const space = (store.game.cells)
  console.log(space)
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
    $('#message').html("<div><h2>It's your turn, player </h2><img src='public/letter-o-img.png'></div>")
    if (space[0] === 'X' && space[1] === 'X' && space[2] === 'X') {
      $('#message').html("<div><h2>The winner is Player </h2><img src='public/letter-x-img.png'></div>")
    } else if (space[3] === 'X' && space[4] === 'X' && space[5] === 'X') {
      $('#message').html("<div><h2>The winner is Player </h2><img src='public/letter-x-img.png'></div>")
    } else if (space[6] === 'X' && space[7] === 'X' && space[8] === 'X') {
      $('#message').html("<div><h2>The winner is Player </h2><img src='public/letter-x-img.png'></div>")
    } else if (space[0] === 'X' && space[3] === 'X' && space[6] === 'X') {
      $('#message').html("<div><h2>The winner is Player </h2><img src='public/letter-x-img.png'></div>")
    } else if (space[1] === 'X' && space[4] === 'X' && space[7] === 'X') {
      $('#message').html("<div><h2>The winner is Player </h2><img src='public/letter-x-img.png'></div>")
    } else if (space[2] === 'X' && space[5] === 'X' && space[8] === 'X') {
      $('#message').html("<div><h2>The winner is Player </h2><img src='public/letter-x-img.png'></div>")
    } else if (space[0] === 'X' && space[4] === 'X' && space[8] === 'X') {
      $('#message').html("<div><h2>The winner is Player </h2><img src='public/letter-x-img.png'></div>")
    } else if (space[2] === 'X' && space[4] === 'X' && space[6] === 'X') {
      $('#message').html("<div><h2>The winner is Player </h2><img src='public/letter-x-img.png'></div>")
    }
  }
  if (player === 'O') {
    $(myBox).css(picO)
    $('#message').html("<div><h2>It's your turn, player </h2><img src='public/letter-x-img.png'></div>")
    if (space[0] === 'O' && space[1] === 'O' && space[2] === 'O') {
      $('#message').html("<div><h2>The winner is Player </h2><img src='public/letter-o-img.png'></div>")
    } else if (space[3] === 'O' && space[4] === 'O' && space[5] === 'O') {
      $('#message').html("<div><h2>The winner is Player </h2><img src='public/letter-o-img.png'></div>")
    } else if (space[6] === 'O' && space[7] === 'O' && space[8] === 'O') {
      $('#message').html("<div><h2>The winner is Player </h2><img src='public/letter-o-img.png'></div>")
    } else if (space[0] === 'O' && space[3] === 'O' && space[6] === 'O') {
      $('#message').html("<div><h2>The winner is Player </h2><img src='public/letter-o-img.png'></div>")
    } else if (space[1] === 'O' && space[4] === 'O' && space[7] === 'O') {
      $('#message').html("<div><h2>The winner is Player </h2><img src='public/letter-o-img.png'></div>")
    } else if (space[2] === 'O' && space[5] === 'O' && space[8] === 'O') {
      $('#message').html("<div><h2>The winner is Player </h2><img src='public/letter-o-img.png'></div>")
    } else if (space[0] === 'O' && space[4] === 'O' && space[8] === 'O') {
      $('#message').html("<div><h2>The winner is Player </h2><img src='public/letter-o-img.png'></div>")
    } else if (space[2] === 'O' && space[4] === 'O' && space[6] === 'O') {
      $('#message').html("<div><h2>The winner is Player </h2><img src='public/letter-o-img.png'></div>")
    }
  }
}

module.exports = {
  failure,
  gameStartSuccess,
  cellUpdateSuccess
}
