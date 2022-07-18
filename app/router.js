var express = require('express');
var router = express.Router();

/// Get news.json
const getNewsList = require('../news.json');

/// Get faq.json
const tableFaq = require('../faq.json')

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

module.exports = router;