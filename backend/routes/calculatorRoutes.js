// Slide 32 Example

// const express = require('express')
// const router = express.Router()

// router.get('/add', (req, res) => {
//     res.send('add')
// })

// module.exports = router

//Slide 33 example

// const express = require('express')
// const router = express.Router()

// router.get('/add', (req, res) => {
//     console.log(req.query)
//     res.send(req.query)
// })

// module.exports = router

//Slide 34 Example

// const express = require('express')
// const router = express.Router()

//Route for adding two numbers

// router.get('/add', (req, res) => {
//     let number1 = parseInt(req.query.num1)
//     let number2 = parseInt(req.query.num2)
//     let sum = number1 + number2
//     console.log(sum)
//     res.status(200)
//     res.json({result:sum})
   
// })

//Slide 36 - Exercise 2

//Route for subtracting two numbers

// router.get('/subtract', (req, res) => {
//     let number1 = parseInt(req.query.num1)
//     let number2 = parseInt(req.query.num2)
//     let difference = number1 - number2
//     console.log(difference)
//     res.status(200)
//     res.json({result:difference})

// })

//Route for dividing two numbers

// router.get('/divide', (req, res) => {
//     let number1 = parseInt(req.query.num1)
//     let number2 = parseInt(req.query.num2)
//     let fraction = number1 / number2
//     console.log(fraction)
//     res.status(200)
//     res.json({result:fraction})
// })

//Route for multiplying two numbers

// router.get('/multiply', (req, res) => {
//     let number1 = parseInt(req.query.num1)
//     let number2 = parseInt(req.query.num2)
//     let product = number1 * number2
//     console.log(product)
//     res.status(200)
//     res.json({result:product})
// })

// module.exports = router


//Slide 47 Example

const express = require('express')
const router = express.Router()

//Route for adding two numbers

router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)
    let sum = number1 + number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
   
})

//Slide 36 - Exercise 2

//Route for subtracting two numbers

router.get('/subtract', (req, res) => {
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)
    let difference = number1 - number2
    console.log(difference)
    res.status(200)
    res.json({result:difference})

})

//Route for dividing two numbers

router.get('/divide', (req, res) => {
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)
    let fraction = number1 / number2
    console.log(fraction)
    res.status(200)
    res.json({result:fraction})
})

//Route for multiplying two numbers

router.get('/multiply', (req, res) => {
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)
    let product = number1 * number2
    console.log(product)
    res.status(200)
    res.json({result:product})
})

module.exports = router