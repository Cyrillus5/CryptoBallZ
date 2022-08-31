/// express module
const express = require("express");
const app = express();
const port = "3000";

/// express session
const session = require("express-session");

/// Middlewares
const userMiddleware = require("./app/middlewares/userMiddleware");

/// router - obtention des routes
const router = require("./app/router");

/// dayjs module
const dayjs = require("dayjs");
// const req = require("express/lib/request");
// const { response } = require("express");
dayjs().format();

/// ejs module
app.set("view engine", "ejs");
app.set("views","./views/");

/// Creation du dossier public
app.use(express.static("public"));

/// Current Year
const currentTime = new Date();
const year = currentTime.getFullYear();
app.locals.currentYear = year;

// on rajoute à la gestion des POST -> body
app.use(express.urlencoded({ extended: true }));

// Creation de la session
app.use(session({
  saveUninitialized: true, // creation d'une session vide même si l'utilisateur n'est pas connecté
  resave: true, // Je ré-enregistre les cookies à chaque requête
  secret: process.env.SESSION_SECRET,
}));

/// Middlewares
app.use(userMiddleware);

/// Implementation des routes via le router
app.use(router);

/// Page 404
app.use((request, response) => {
  response.status(404).render("404");
});

app.listen(port,() => {
  console.log(`Le port ${port} est ouvert ! `);
});



