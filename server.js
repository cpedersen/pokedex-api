//console.log('hello')

const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.use((req, res) => {
  res.send('Hello, world!')
})

/*function handleGetTypes(req, res) {

}

app.get('/types', handleGetTypes)*/

const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
