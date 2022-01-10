//REQUIREMENTS
const express = require('express')
const cors = require('cors')

//HANDLER FUNCTIONS
const {getRaces} = require('./controllers/raceController')

//INVOCATIONS
const app = express()

//CONFIG
app.use(express.json())
app.use(cors())

//RACES
app.get('/api/races', getRaces)



app.listen(4050, () => console.log('Server up on 4050'))