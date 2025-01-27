//REQUIREMENTS
import express from 'express';
import cors from 'cors'

//HANDLER FUNCTIONS
import { getRaces, getClasses, getAbilities } from './controllers/raceController.js'

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