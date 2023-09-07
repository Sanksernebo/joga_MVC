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
app.use('/article', articleRoutes)


// show author articles
app.get('/author/:author_id', (req, res) => {
    const author_id = req.params.author_id;

    let sql = `SELECT * FROM article WHERE author_id = ${author_id}`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        const articles = result;
        sql = `SELECT * FROM author WHERE id = ${author_id}`
        con.query(sql, (err, result) => {
            let author = result
            console.log(articles)
            console.log(author)
            res.render('author', {
                articles: articles,
                author: author
            });
        })
    });
});

//app start point
app.listen(3000, () => {
    console.log('app is started at http://localhost:3000');
});