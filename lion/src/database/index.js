const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { auth } = require('../config/auth')
const { promisify } = require('util')

mongoose.connect('mongodb://localhost:27017/userGrpc')

const UserSchema = new mongoose.Schema({
  id: { type:mongoose.Types.ObjectId, auto: true },
  name: String,
  email: String,
  password: String
})

UserSchema.pre('save', async function(next) {
  if ( !this.isModified('password') ) return next()

  this.password = await bcrypt.hash(this.password, 8)
})

UserSchema.methods = {
  compareHash(hash) {
    return bcrypt.compare(hash, this.password)
  }
}

UserSchema.statics = {
  generateToken(id) {
    return jwt.sign({ id }, auth.secret, {
      expiresIn: '7d'
    })
  },
  verifyToken(token) {
    return promisify(jwt.verify)(token, auth.secret)
  }
}

module.exports = mongoose.model('User', UserSchema)

