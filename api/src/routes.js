const express = require('express')
const route = express.Router()
const { signUp, signIn, list } = require('./controllers/UserControllers')

route.post('/signup', signUp)
route.get('/list', list)
route.post('/signin', signIn)

module.exports = route