'use strict'
const store = require('./../../store')
const failure = function (error) {
  $('#message').text(error.responseJSON.message)
}
const boardRevealSuccess = function () {
  $('.container').show()
  $('#game-start').show()
  $('#board-reveal').hide()
}
const gameStartSuccess = function (response) {
  $('#message').html("<div><h2>Let's begin with player </h2><img src='public/letter-x-img.png'></div>")
  store.game = response.game
}
const cellUpdateSuccess = function (player) {
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
  } else if (player === 'O') {
    $(myBox).css(picO)
    $('#message').html("<div><h2>It's your turn, player </h2><img src='public/letter-x-img.png'></div>")
  }
}

module.exports = {
  failure,
  gameStartSuccess,
  boardRevealSuccess,
  cellUpdateSuccess
}
