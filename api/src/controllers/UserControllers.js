const { client } = require('../serviceLoader')

const signUp = ( req, res) => {
  client.signUp(req.body, (err, user) => {
    if (err) return res.json({err})
    res.json(user)
  })
}

const signIn = (req, res) => {
  client.signIn({user: req.body}, (err, { token }) => {
    if (err) throw new Error(err)
    client.authenticate({ token }, (err, user) => {
      if (err) throw new Error(err)
      res.json(user)
    })
  })
}

const list = (req, res) => {
  client.list({}, (err, users) => {
    if (err) throw new Error(err)
    res.json(users)
  })
}

module.exports = { signIn, signUp, list }