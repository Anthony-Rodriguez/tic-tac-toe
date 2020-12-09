'use strict'
const store = require('./../store')

const failure = function (error) {
  $('#message').text(error.responseJSON.message)
}
const signUpSuccess = function (response) {
  $('#message').text('Signed Up Successfully!')
  $('form').trigger('reset')
}
const signInSuccess = function (response) {
  $('#message').text('Signed In Successfully!')
  $('form').trigger('reset')
  store.user = response.user
  $('.unauthenticated').hide()
  $('.authenticated').show()
}
const changePasswordSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Password Changed Successfully!')
}
const signOutSuccess = function () {
  $('#message').text('Signed Out Successfully!')
  $('form').trigger('reset')
  $('.unauthenticated').show()
  $('.authenticated').hide()
  $('.container').hide()
}

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess
}
