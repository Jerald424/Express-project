const jwt = require('jsonwebtoken')
require('dotenv').config()

const jwtTokenGeneretor = (user_id) => {
    if (!user_id) throw new Error('user id not send')
    const payload = { user_id }

    return jwt.sign(payload, process.env.jwtsecret, { expiresIn: '28d' })

}

module.exports = { jwtTokenGeneretor }