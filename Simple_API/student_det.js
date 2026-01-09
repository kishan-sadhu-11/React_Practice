const express = require('express')
const router = express.Router()

const studentData = {
    firstName: "Kishan",
    lastName: "Sadhu",
    university: "RK University",
    branch: "Computer Engineering",
    semester: 6
}



router.get('/details', (req, res) => {
    res.json(studentData)
})



router.post('/submit', (req, res) => {
    const { firstName, lastName } = req.body
    res.json({
        message: "Student data received",
        fullName: `${firstName} ${lastName}`
    })
})

module.exports = router