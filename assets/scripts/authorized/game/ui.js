'use strict'
// const store = require('./../../store')

const failure = function (error) {
  $('#message').text(error.responseJSON.message)
}
const gameShowSuccess = function () {
  $('.container').show()
  $('#game-start').show()
  $('#new-game').hide()
}
const gameStartSuccess = function () {
  $('#message').html("<div><h2>Let's Begin! you are player</h2><img src ='public/letter-x-img.png'></div>")
}

module.exports = {
  failure,
  gameStartSuccess,
  gameShowSuccess
}
