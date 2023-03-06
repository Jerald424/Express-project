const express = require('express')
const app = express()
const cors = require('cors')
const { autherization } = require('./functions/jwtFunctions')
require('./sequelize')

//middlewhere
app.use(express.json()) // access req.body
app.use(cors()) // return value to client


//routes
app.use('/api', require('./routes/login'))

//authenticated routes
app.use(autherization);

app.use('/api', require('./routes/post'))


app.listen(5000, () => {
    console.log('app was running port 5000')
})