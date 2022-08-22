const fs = require('fs');
const buffer = require('buffer');
const dayjs = require("dayjs");
const datePublished = dayjs().toISOString();


const adminController = {
  showAdmin(req, res) {
    res.render("admin");
  },
  recordNews(req,res){
    const {metaDescription, pageTitle, vignetteTitle,vignetteIntro, vignetteImageName, altVignetteImage, articleImageName, altArticleImage, articleTitle1, articleIntro, articleAuthor, articleDate, articleTitle2,articleContainer1, binance, crypto, ftx, articleTitle3, articleContainer2, binance2, crypto2, ftx2} = req.body;

    /// On selectionne le fichier existant
    var data = fs.readFileSync("./public/json/articles.json");
    var myObject = JSON.parse(data);

    const article = {
      seoMetaDescription : metaDescription,
      seoTitle : pageTitle,

      titleVignette : vignetteTitle,
      introVignette : vignetteIntro,
      imageVignette : vignetteImageName,
      altImageVignette : altVignetteImage,

      imageArticle : articleImageName,
      altImageArticle : altArticleImage,
      titleArticle : articleTitle1,
      introArticle : articleIntro,
      authorArticle : articleAuthor,
      dateArticle : articleDate,
      title1Article : articleTitle2,
      container1Article : articleContainer1,
      binanceLink1 : binance,
      cryptoLink1 : crypto,
      ftxLink1 : ftx,
      title2Article : articleTitle3,
      container2Article : articleContainer2,
      binanceLink2 : binance2,
      cryptoLink2 : crypto2,
      ftxLink2 : ftx2
    };

    /// unshift permet comme push d'inserer dans un tableau mais au debut de celui-ci
    myObject.unshift(article);

    const jsonString = JSON.stringify(myObject, null, 2);
    const virgule = `${jsonString}`;
    /// { flag: 'r' } permet d'éviter de rewrite les données existantes dans le fichier json
    fs.writeFile("./public/json/articles.json", virgule,{flag: "r+"},err => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log("Successfully wrote file");
      }
    });

    // creation automatique du fichier ejs
    fs.writeFile(`${pageTitle}.ejs`,
    // contenu du fichier
      `
        <!DOCTYPE html>
        <html lang="fr-FR">
        <head>
            <%- include('partials/header') %>
        <title>${pageTitle} _ CryptoBallZ </title>
        <meta name="description" content=${metaDescription} />
        
        <!-- Données structurées pour SEO -->
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://cryptoballz.com/${pageTitle}"
            },
            "headline": "${pageTitle}",
            "image": [
            "https://cryptoballz.com/img/news/${articleImageName}"
            
            ],
            "datePublished": "${datePublished}",
            "dateModified": "${datePublished}",
            "description":"${vignetteIntro}",
            "author": {
            "@type": "Person",
            "name": "Cyrillus",
             },
            "publisher": {
            "@type": "Organization",
            "name": "CryptoBallZ",
            "logo": {
            "@type": "ImageObject",
            "url": "https://cryptoballz.com/img/CryptoballZ_logo.png"
            }
            }
        }
        </script>
        
        <!-- Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
        </head>
        <body>
            <article class="newActu">
                <img src="..." class="img-fluid" alt="...">
                <h1 class="text-warning">${articleTitle1}</h1>
                <p class="newActu_author">${articleAuthor}</p>
                <p class="text-justify font-weight-bold">${articleIntro}</p>
                <section>
                    <h2 class="text-secondary">${articleTitle2}</h2>
                    <p class="text-justify">${articleContainer1}</p>
                    
                </section>
                <section>
                    <h2 class="text-secondary">${articleTitle3}</h2>
                    <p class="text-justify">${articleContainer2}</p>    
                </section>
            </article>
            <footer>
                <%- include ('partials/footer') %>
                
            </footer>
        </body>    
        </html>       
        
`,err => {
        if (err) {
          console.log("Error writing file", err);
        } else {
          console.log("Successfully wrote file");
        }
      });

  }

};

module.exports = adminController;
