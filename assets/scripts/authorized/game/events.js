'use strict'
const api = require('./api')
// const getFormFields = require('./../../../../lib/get-form-fields')
const ui = require('./ui')

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


module.exports = {
  onGameStart,
  onBoardReveal
}
