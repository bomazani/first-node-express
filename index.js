const express = require('express')
const app = express()

app.get('/',(req,res,next) => {
    res.send('Hello!!!')
})

app.get('/json',(req,res,next) => {
    const data = {
        greeting: 'Hello!!'
    }
    res.json(data)
})

app.listen(3000)