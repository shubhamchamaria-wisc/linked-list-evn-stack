const express = require('express')
var cors = require('cors')
const app = express()
const linked = require('./models/LLModel')
var morgan  = require('morgan')

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/get/:index', function (req, res) {
    var index = req.params.index
    res.json(linked.getElement(index))
})

app.get('/getAll', function (req, res) {
	res.json(linked.getAllElements())
})

app.post('/add', function (req, res) {
	var data = req.body.data
	res.json(linked.insertElement(data))

})

app.post('/update', function (req, res) {
	var data = req.body.data
	var index = req.body.index
	res.json(linked.updateElement(index, data))

})

app.post('/delete', function (req, res) {
	var index = req.body.index
	res.json(linked.deleteElement(index))
})

app.listen(8000)