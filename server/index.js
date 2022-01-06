//REQUIREMENTS
const express = require('express')
const cors = require('cors')

//INVOCATIONS
const app = express()

//CONFIG
app.use(express.json())
app.use(cors())




app.listen(4050, () => console.log('Server up on 4050'))