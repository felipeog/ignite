const express = require('express')
const { v4: uuid } = require('uuid')

const app = express()
const repositories = []

app.use(express.json())

app.get('/repositories', (request, response) => {
  return response.json(repositories)
})

app.post('/repositories', (request, response) => {
  const { title, url, techs } = request.body

  const newRepository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  }

  repositories.push(newRepository)

  return response.status(201).json(newRepository)
})

app.put('/repositories/:id', (request, response) => {
  const { id } = request.params
  const { title, url, techs } = request.body

  const repositoryToUpdate = repositories.find((repository) => {
    return repository.id === id
  })

  if (!repositoryToUpdate) {
    return response.status(404).json({ error: 'Repository not found' })
  }

  const updatedRepository = { ...repositoryToUpdate, title, url, techs }

  repositories.splice(repositoryToUpdate, 1, updatedRepository)

  return response.json(updatedRepository)
})

app.delete('/repositories/:id', (request, response) => {
  const { id } = request.params

  const repositoryIndex = repositories.findIndex((repository) => {
    return repository.id === id
  })

  if (repositoryIndex < 0) {
    return response.status(404).json({ error: 'Repository not found' })
  }

  repositories.splice(repositoryIndex, 1)

  return response.status(204).send()
})

app.post('/repositories/:id/like', (request, response) => {
  const { id } = request.params

  const repositoryToUpdate = repositories.find((repository) => {
    return repository.id === id
  })

  if (!repositoryToUpdate) {
    return response.status(404).json({ error: 'Repository not found' })
  }

  const newLikesCount = Number(repositoryToUpdate.likes) + 1
  const updatedRepository = { ...repositoryToUpdate, likes: newLikesCount }

  repositories.splice(repositoryToUpdate, 1, updatedRepository)

  return response.json(updatedRepository)
})

module.exports = app
