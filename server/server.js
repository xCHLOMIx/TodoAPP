const express = require('express')
const mongoose = require('mongoose')
const taskRoutes = require('./routes/taskRoutes')
const app = express()
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/TodoAPP')
    .then(res => {
        app.listen(3000, (req, res) => {
            console.log("Connected")
        })
    })

app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/tasks', taskRoutes)