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

const cellUpdate = function (cellIndex, player) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: cellIndex,
          value: player
        },
        over: false
      }
    },
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const gameOver = function (cellIndex, player) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: cellIndex,
          value: player
        },
        over: true
      }
    },
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
module.exports = {
  gameStart,
  cellUpdate,
  gameOver
}
