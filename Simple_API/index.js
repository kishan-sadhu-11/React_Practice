//using node create server side scripting

//npm start index.js or npm start

//comand npm i express to download run module


//-----------------------------------------------------------------------
//1).create n point for food and foods

//2).student detailes , student university,std branch

//3).create end point uisng post which will except student first name and last name and provide the output


//4).put json in body













// const express = require('express')
// const app = express()
// const port = 3000
// app.use(express.json())




// const cityApi = require('./city_api_js')
// app.use('/city', cityApi)




// const bird = require('./birds')//import birds file
// app.use('/b',bird)
// app.use('/birds', bird)





// const std = require('./student_det')
// app.use('/student', std)





// app.get('/', (req, res) => res.send('Hello World!'))
// app.get('/food', (req, res) => res.send('food or foods'))
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// app.post('/', (req, res) => res.send('kishan sadhu'))





const express = require('express')
const app = express()
const port = 3000

// Ye line sabse important hai body read karne ke liye
app.use(express.json())

const bird = require('./birds')
const std = require('./student_det')
const cityApi = require('./city_api_js')

// Routes mapping
app.use('/birds', bird)
app.use('/student', std)
app.use('/city', cityApi)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Server running on port ${port}!`))