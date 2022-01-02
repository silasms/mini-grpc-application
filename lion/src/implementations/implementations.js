const User = require('../database/index')

module.exports = {
  signUp: async (call, callback) => {
    let user = call.request
    const { email } = user

    const isExist = await User.findOne( { email } )
    if (isExist) {
      callback(null, isExist)
      return
    }

    user = new User(user)
    await user.save()
    callback(null, { user })
  },

  signIn: async (call, callback) => {
    let user = call.request
    const { user: {email, password} } = user
    
    const isExist = await User.findOne( { email } )
    if ( isExist ) {
      if ( await isExist.compareHash(password) ) {
        const token = User.generateToken(isExist['_id'])
        return callback(null, { token })
      }
    }
    const userNotExist = {error: 'User not found'}
    callback(null, userNotExist)
  },

  authenticate: async (call, callback) => {
    const { token } = call.request
    if (!token) {
      return callback(null, { error: 'No token provided' })
    }
    
    try {
      const decoded = await User.verifyToken(token)
      
      const user = await User.findById(decoded.id)

      return callback(null, { user })
    } catch (err) {
      return callback(null, { error: 'Invalid token' })
    }
  },

  list: async (_, callback) => {
    const user = await User.find()
    callback(null, {user})
  }
}
