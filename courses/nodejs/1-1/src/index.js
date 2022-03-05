const express = require('express')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')

const app = express()
const users = []

app.use(cors())
app.use(express.json())

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers

  const currentUser = users.find((user) => {
    return user.username === username
  })

  if (!currentUser) {
    return response.status(400).send()
  }

  request.user = currentUser

  next()
}

app.post('/users', (request, response) => {
  const { name, username } = request.body

  const isUsernameTaken = users.some((user) => {
    return user.username === username
  })

  if (isUsernameTaken) {
    return response.status(400).send({ error: 'Username already taken.' })
  }

  const newUser = {
    id: uuidv4(),
    name,
    username,
    todos: [],
  }

  users.push(newUser)

  response.status(201).json(newUser)
})

app.get('/todos', checksExistsUserAccount, (request, response) => {
  response.json(request.user.todos)
})

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const { title, deadline } = request.body

  const newTodo = {
    id: uuidv4(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date(),
  }

  request.user.todos.push(newTodo)

  response.status(201).json(newTodo)
})

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { title, deadline } = request.body
  const { id } = request.params
  const { todos } = request.user

  const todoExists = todos.some((todo) => {
    return todo.id === id
  })

  if (!todoExists) {
    return response.status(404).json({ error: 'Not found.' })
  }

  const todoToUpdate = todos.find((todo) => {
    return todo.id === id
  })
  const updatedTodo = {
    ...todoToUpdate,
    title,
    deadline,
  }

  todos.splice(todoToUpdate, 1, updatedTodo)

  response.json(updatedTodo)
})

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  const { id } = request.params
  const { todos } = request.user

  const todoExists = todos.some((todo) => {
    return todo.id === id
  })

  if (!todoExists) {
    return response.status(404).json({ error: 'Not found.' })
  }

  const todoToUpdate = todos.find((todo) => {
    return todo.id === id
  })
  const updatedTodo = {
    ...todoToUpdate,
    done: true,
  }

  todos.splice(todoToUpdate, 1, updatedTodo)

  response.json(updatedTodo)
})

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { id } = request.params
  const { todos } = request.user

  const todoExists = todos.some((todo) => {
    return todo.id === id
  })

  if (!todoExists) {
    return response.status(404).json({ error: 'Not found.' })
  }

  const todoToRemove = todos.find((todo) => {
    return todo.id === id
  })

  todos.splice(todoToRemove, 1)

  response.status(204).send()
})

module.exports = app
