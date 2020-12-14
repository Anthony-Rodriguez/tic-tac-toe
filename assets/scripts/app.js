'use strict'

const authEvents = require('./authorized/events')
const gameEvents = require('./authorized/game/events')

$(() => {
  $('.authenticated').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#game').hide()
  $('#game-restart').hide()
  $('#game-restart').on('click', gameEvents.onGameRestart)
  $('#game-start').on('click', gameEvents.onGameStart)
  $('.col-4').on('click', gameEvents.onCellUpdate)
  $('#get-games').on('click', gameEvents.onGamesGet)
})
