const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const router = require('./routes/routes')  

// use
app.use(express.json())

app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))
app.use(router)
app.use('/*', (_, res) => res.sendStatus(404)) 

// set
app.set('views', path.resolve(__dirname, 'views/'))
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')


app.listen(5000, console.log(5000))