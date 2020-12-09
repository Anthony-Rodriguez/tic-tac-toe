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
  $('#new-game').on('click', gameEvents.onGameShow)
  $('#game-start').on('click', gameEvents.onGameStart)

})
