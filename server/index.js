//REQUIREMENTS
const express = require('express')
const cors = require('cors')

//HANDLER FUNCTIONS
const { getRaces, getClasses, getAbilities } = require('./controllers/raceController')

//INVOCATIONS
const app = express()

//CONFIG
app.use(express.json())
app.use(cors())

//JSON CALLS
app.get('/api/races', getRaces)
app.get('/api/classes', getClasses)
app.get('/api/abilities', getAbilities)


app.listen(4050, () => console.log('Server up on 4050'))