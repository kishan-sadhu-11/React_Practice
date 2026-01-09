const express = require('express')
const router = express.Router()
const citiesData = require('./city_api.json')

router.get('/list', (req, res) => {
  res.json(citiesData)
})


module.exports = router