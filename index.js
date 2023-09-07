// application packages
const express = require('express')
const app = express()

const path = require('path')
//add template engine
const hbs = require('express-handlebars');
//setup template engine directory and files extension
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
    extname:'hbs',
    defaultLayout: 'main',
    layoutDir:__dirname+'views/layouts/',
}))


const mysql = require('mysql')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

// create database connection
var con = mysql.createConnection({
    host: "localhost",
    user: "Sanks",
    password:"qwerty",
    database: "mydb"
})
con.connect(function (err){
    if (err) throw err;
    console.log("connected to mydb");
})

//app stat point
app.listen(3005, () => {
    console.log('app is started at http://localhost:3005');
});