const express = require('express')
const app = express()
const port = 3025
const configureDB = require('./config/database')
const router = require('./config/routes')
const cors = require('cors')

configureDB()

app.use(cors())
app.use(express.json())

// ROute Handlers || Request Handlers
app.get('/', (req,res) => {
    res.send('Welcome to the page')
})

app.use('/',router)

app.listen(port, () => {
    console.log('listening to port,',port)
})
