// application packages
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

const articleControllerClass = require('./controllers/article')
const articleController = new articleControllerClass()

const articleRoutes = require('./routes/articles')
app.use('/', articleRoutes)
//app start point
app.listen(3000, () => {
    console.log('app is started at http://localhost:3000');
});