'use strict'
// const store = require('./../../store')

const failure = function (error) {
  $('#message').text(error.responseJSON.message)
}
const gameStartSuccess = function () {
  $('#game').show()
  $('#message').text("Let's Begin!")
}
const gameShowSuccess = function () {
  $('.container').show()
}

module.exports = {
  failure,
  gameStartSuccess,
  gameShowSuccess
}
