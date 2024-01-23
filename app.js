const express = require('express')
const app = express();
const tasks = require('./routes/taskRoutes')
const mysql = require('mysql2')
const dotenv = require('dotenv').config()
const db = require('./utils/database')
const PORT = process.env.PORT || 4001

app.use(express.json())

app.get("/hello", (req, res) => {
    res.send('ERMMM NIGGER')
})

app.use('/api/v1/tasks', tasks)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})


