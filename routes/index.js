const express = require('express')
const router = express.Router()

router.get('/',(req, res, next) => {
    res.send('Hello from Routes Folder!')
})

router.get('/json',(req, res, next) => {
    const data = {
        greeting: 'Hello!!',
        image: 'node_express.png'
    }
    res.json(data)
})

router.get('/home', (req, res, next) => {
    res.render('home', null)
})


module.exports = router