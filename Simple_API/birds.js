const express = require('express')
const router = express.Router()

//sequnce metter = means log fnction ko jaha pe use karnea uske uper hi rakho tabhi vo chalega


// its given history of each logs of users
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)



// define the home page route(path)
router.get('/', (req, res) => {
  res.send('Birds home page')
})



// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})



module.exports = router
