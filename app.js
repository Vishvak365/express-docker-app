const express = require('express')
const app = express()
app.get('/', async (req, res, next) => {
  res.status(200).send('Hello World! Docker Update')
})
app.get('/test', async (req, res, next) => {
  res.status(200).send('Test endpoint')
})
app.get('/anothertest', async (req, res, next) => {
  res.status(200).send('Test endpoint')
})
app.listen(3000, () => console.log('Server is running on port 3000'))
