const jwt = require('jsonwebtoken')
require('dotenv').config()

const jwtTokenGeneretor = (user_id) => {
    if (!user_id) throw new Error('user id not send')
    const payload = { user_id }

    return jwt.sign(payload, process.env.jwtsecret, { expiresIn: '28d' })

}

const autherization = (req, res, next) => {
    try {
        const token = req.header('token');
        if (!token) return res.status(401).send('Send token')
        const payload = jwt.verify(token, process.env.jwtsecret)
        req.user = payload.user_id
        next()


    } catch (error) {
        res.status(401).send(error?.message)
    }
}

module.exports = { jwtTokenGeneretor, autherization }