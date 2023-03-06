const router = require('express').Router();
const db = require('../sequelize')

router.post('/post', async (req, res) => {
    try {
        const { title } = req.body;
        const LoginId = req.user;

        db.Post.create({ title, LoginId }, { returning: true })
            .then(post => res.json(post))
            .catch(err => res.status(400).send(err))


    } catch (error) {
        res.status(500).send(error?.message)
    }
})

router.put('/like/:id', async (req, res) => {
    try {
        const { id } = req.params;
        db.Post.increment(
            { likes: +1 },
            { where: { id } },
        )
        res.json('likes updated')

    } catch (error) {
        res.status(500).send(error?.message)
    }
})

module.exports = router