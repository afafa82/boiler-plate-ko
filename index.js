const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://BOILERPLATE:qwer1234@cluster0.brjrk.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log('MongoDB connected...'))
.catch(err => console.log(err))

app.get('/', (req,res) => res.send('Hello World'))

app.listen(port,() => console.log(`This app is listening on port ${port}`))