const express = require('express')
const bodyParser = require('body-parser')
const fortunes = require('./data/fortunes.json')

const app = express()

app.use(bodyParser.json())

app.get('/fortunes', (req, res) => {
  res.send(fortunes)
})

app.get('/fortunes/random', (req, res) => {
  const random_index = Math.floor(Math.random() * fortunes.length)
  const r_fortunes = fortunes[random_index]
  res.json(r_fortunes)
})

app.get('/fortunes/:id', (req, res) => {
  res.json(fortunes.find((f) => f.id == req.params.id))
})

app.post('/fortunes', (req, res) => {
  res.send(req.body)
})

module.exports = app
