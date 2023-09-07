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
    layoutDir:__dirname +'views/layouts/',
}))
// setup static public directory
app.use(express.static('public'));

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

const articleRoutes = require('./routes/articles'); // import article route

// to use article routes
app.use('/', articleRoutes);
app.use('/article', articleRoutes);

const authorRoutes = require('./routes/author'); // import author route

// to use author route
app.use('/author', authorRoutes);

//app start point
app.listen(3000, () => {
    console.log('app is started at http://localhost:3000');
});