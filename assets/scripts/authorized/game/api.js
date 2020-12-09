'use strict'
const config = require('./../../config')
const store = require('./../../store')

const gameStart = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  gameStart
}