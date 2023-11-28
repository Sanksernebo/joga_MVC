const express = require('express');
const router = express.Router()
const articleControllerClass = require('../controllers/article')

const articleController = new articleControllerClass()

router.get('/', (req,res) => articleController.getAllArticles(req, res))
router.get('/article/:slug', (req,res) => articleController.getArticleBySlug(req, res))
// export article router for using in default application file
module.exports = router;