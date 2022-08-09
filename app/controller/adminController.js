const fs = require('fs');
const buffer = require('buffer');

const adminController = {
    showAdmin(req, res) {
        res.render('admin');
    },
    recordNews(req,res){
        const {metaDescription, vignetteTitle,vignetteIntro, vignetteImageName, altVignetteImage, articleImageName, altArticleImage, articleTitle1, articleIntro, articleAuthor, articleDate, articleTitle2,articleContainer1, binance, crypto, ftx, articleTitle3, articleContainer2, binance2, crypto2, ftx2} = req.body;

        /// On selectionne le fichier existant
        var data = fs.readFileSync("./public/json/articles.json");
        var myObject = JSON.parse(data);

        const article = {
            seoMetaDescription : metaDescription,
            
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
        fs.writeFile('./public/json/articles.json', virgule,{flag: 'r+'},err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        });
    }

}

module.exports = adminController;