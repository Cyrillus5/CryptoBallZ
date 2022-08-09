var express = require('express');
var router = express.Router();
const multer = require('multer');

// Get controllers
const userController = require('./controller/userController');
const adminController = require('./controller/adminController');

// Get middlewares
const adminMiddleware = require('./middlewares/adminMiddleware');

/// Get news.json
const getNewsList = require('../public/json/news.json');

/// Get faq.json
const tableFaq = require('../public/json/faq.json')

// Creation dossier stockage des images
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './stockageImages/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  }) 
  var upload = multer({ storage: storage });

router.get('/',(request, response) =>{
    response.render('index', {getNewsList});
});

router.get('/actualite',(request, response) =>{
    response.render('actualite', {getNewsList});
});

router.get('/actualite/:article',(request, response) =>{
    const getArticle = request.params.article;
    response.render(`articles/${getArticle}`);
});

router.get('/bitcoin',(request, response) =>{
    response.render('bitcoin');
});

router.get("/bitcoin/c'est-quoi-le-bitcoin",(request, response) =>{
    response.render("c'est-quoi-le-bitcoin" );
});

router.get("/bitcoin/c'est-quoi-le-minage-de-bitcoin",(request, response) =>{
    response.render("c'est-quoi-le-minage-de-bitcoin");
});

router.get("/bitcoin/comment-acheter-du-bitcoin",(request, response) =>{
    response.render("comment-acheter-du-bitcoin");
});

router.get("/bitcoin/comment-acheter-du-bitcoin/acheter-du-bitcoin-sur-Binance",(request, response) =>{
    response.render("bitcoin/acheter-bitcoin-binance");
});
router.get("/bitcoin/comment-acheter-du-bitcoin/acheter-du-bitcoin-sur-FTX",(request, response) =>{
    response.render("bitcoin/acheter-bitcoin-ftx");
});
router.get("/bitcoin/comment-acheter-du-bitcoin/acheter-du-bitcoin-sur-Crypto.com",(request, response) =>{
    response.render("bitcoin/acheter-bitcoin-crypto");
});

router.get("/faq",(request, response) =>{
    response.render("faq", {tableFaq});
});

/// ******Authentification********
router.get("/login", userController.showLogin);
router.post('/login', userController.doLogin);

router.get('/admin', adminMiddleware, adminController.showAdmin);
router.post('/admin', adminMiddleware, upload.array('vignetteAndArticleImages', 12), adminController.recordNews);

/// *** Erreur 403 *** ///
router.get('/403',(request, response) =>{
    response.render('403');
});

module.exports = router;