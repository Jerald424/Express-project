const express = require('express')
const app = express()
const cors = require('cors')

//middlewhere
app.use(express.json()) // access req.body
app.use(cors()) // return value to client

app.listen(5000, () => {
    console.log('app was running port 5000')
})