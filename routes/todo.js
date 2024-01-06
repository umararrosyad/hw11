const express = require('express')
const app = express()
const TodoController = require('../controllers/todoController')


app.get('/', TodoController.getAll)
app.get('/:id', TodoController.getOne)
app.post('/', TodoController.create)
app.delete('/:id', TodoController.delete)


module.exports = app