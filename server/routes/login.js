const router = require('express').Router()
const { jwtTokenGeneretor } = require('../functions/jwtFunctions');
const db = require('../sequelize')

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!(Boolean(username) && Boolean(password))) return res.status(400).send('required fields are missing')

        const userExist = await db.Login.findOne({
            where: { username }
        })

        if (!userExist) return res.status(403).send('username does not exist')
        if (userExist?.password !== password) return res.status(403).send('username and password are not match')

        res.json({ token: jwtTokenGeneretor })

    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const userExist = await db.Login.findOne({
            where: { username }
        })
        if (userExist) return res.status(403).send('username already exist')
        const createsUser = await db.Login.create({ username, password }, { returning: true })

        res.json({ token: jwtTokenGeneretor(createsUser?.id) })
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router