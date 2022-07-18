/// express module
const express = require("express");
const app = express();
const port = "3000";

/// router - obtention des routes
const router = require('./app/router');

/// dayjs module
const dayjs = require('dayjs');
const req = require("express/lib/request");
const { response } = require("express");
dayjs().format();

/// ejs module
app.set('view engine', 'ejs');
app.set('views','./views/');

/// Get faq.json
const tableFaq = require('./faq.json')

/// Creation du dossier public
app.use(express.static('public'));

/// Current Year
const currentTime = new Date()
const year = currentTime.getFullYear()
app.locals.currentYear = year;

/// Get news.json
const getNewsList = require('./news.json');

/// Implementation des routes via le router
app.use(router);

/// Page 404
app.use((request, response) => {
    response.status(404).render("404");
  })

app.listen(port,() => {
    console.log(`Le port ${port} est ouvert ! `)
});