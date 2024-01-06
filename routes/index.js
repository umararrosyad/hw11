const express = require('express')
const app = express()
const todoRouter = require('./todo')

app.use('/todo',todoRouter)

module.exports = app