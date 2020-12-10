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
  $('#message').html("<div><h2>Let's Begin! You are player</h2><img src='public/letter-x-img.png'></div>")
    store.game = response.game
}

module.exports = {
  failure,
  gameStartSuccess,
  boardRevealSuccess
}
