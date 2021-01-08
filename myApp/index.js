// 1/8/20
// Purpose: getting familiar with an express.js backend
// Summary: restaraunt analogy (hiring a manager, seating guests, taking orders, giving checks)
// tutorial: https://medium.com/free-code-camp/going-out-to-eat-and-understanding-the-basics-of-express-js-f034a029fb66


const express = require('express')
const app = express()
const port = 3000

const seatingRouter = express.Router()

// if missing a path, it will run on every request
seatingRouter.use(function (req, res, next) {
    var shirt = req.shirt;
    var shoes = req.shoes;
    if (shirt && shoes) {
        next()
    }
})

seatingRouter.use('/bar', function (req, res, next) {
    var age = req.age;
    if (age >= 21) {
        next()
    }
})

// adding a GET route, goes above the last statement 
//           where routes are assigned to the router
seatingRouter.get('/bar/:amount', function (req, res) {
    var party = req.params.amount
    res.send('We are searching for a spot at the bar for '+party+'!')
})

seatingRouter.get('/table/:amount', function (req, res) {
    var party = req.params.amount
    res.send('We are searching for your table for ' + party + '!')
})

app.use('/seating', seatingRouter)

app.use(express.static('public'))

// ****** Basic HTTP requests
// do not modify or add to database, just retrive information


app.post('/', function (req, res) {
    res.send('Got a POST request')
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})
// ******





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})