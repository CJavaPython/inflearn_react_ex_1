const express = require('express')
const app = express()
const port = 3001
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:0000@cluster0.zmvmf.mongodb.net/new?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('mongodb connected'))
    .catch(err => console.log(err))


app.get('/', (req, res) => res.send('hello world'))
app.listen(port, () => console.log('example app is listening on port ${port}!'))
