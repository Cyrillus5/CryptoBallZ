var buyBitcoin = [
    {    
        title : "Acheter du Bitcoin sur Binance",
        image : "/img/le bitcoin/Acheter-bitcoin-Binance.jpg", 
        synopsis : "Binance est l’une des plateformes les plus simples et sécurisées pour acheter facilement du Bitcoin.",
        link : "/bitcoin/comment-acheter-du-bitcoin/acheter-du-bitcoin-sur-Binance",
        tag : "",
        alt :"Acheter du Bitcoin sur Binance",
    },
    {        
        title : "Acheter du Bitcoin sur Crypto.com",
        image : "/img/le bitcoin/Acheter-bitcoin-Crypto.com.jpg",
        synopsis : "Crypto.com est l’une des plateformes les plus prometteuses du moment afin d’acquérir facilement du Bitcoin.",
        link :"/bitcoin/comment-acheter-du-bitcoin/acheter-du-bitcoin-sur-Crypto.com",
        tag : "",
        alt :"Acheter du Bitcoin sur Crypto.com",
    },
    {
        title : "Acheter du Bitcoin sur FTX",
        image : "/img/le bitcoin/Acheter-bitcoin-FTX.jpg",
        synopsis : "FTX est l’une des plateformes les plus sécurisées et innovantes du moment pour acheter facilement du Bitcoin.",
        link :"/bitcoin/comment-acheter-du-bitcoin/acheter-du-bitcoin-sur-FTX",
        tag : "",
        alt :"Acheter du Bitcoin sur FTX",
    },
];

/// creation d'une vignette
function createVignette (){
    var getBuyBitcoinMiniature = document.getElementById("buyBitcoinMiniature");

    for (let x = 0; x < 3; x++){
        var createBuyBitcoinMiniatureVignette = document.createElement("div");
        createBuyBitcoinMiniatureVignette.className = "buyBitcoinMiniature_vignette";
        
        var createBuyBitcoinMiniatureVignetteLink = document.createElement("a");
        createBuyBitcoinMiniatureVignetteLink.href = buyBitcoin[x].link;
        createBuyBitcoinMiniatureVignetteLink.title = buyBitcoin[x].title;
        createBuyBitcoinMiniatureVignette.appendChild(createBuyBitcoinMiniatureVignetteLink);

        var createBuyBitcoinMiniatureVignettePicture = document.createElement("img");
        createBuyBitcoinMiniatureVignettePicture.className = "buyBitcoinMiniature_vignette-img";
        createBuyBitcoinMiniatureVignettePicture.src = buyBitcoin[x].image;
        createBuyBitcoinMiniatureVignettePicture.alt = buyBitcoin[x].alt;
        createBuyBitcoinMiniatureVignetteLink.appendChild(createBuyBitcoinMiniatureVignettePicture);

        var createBuyBitcoinMiniatureVignetteTitle = document.createElement("h3");
        createBuyBitcoinMiniatureVignetteTitle.className = "buyBitcoinMiniature_vignette-title";
        createBuyBitcoinMiniatureVignetteTitle.textContent = buyBitcoin[x].title;
        createBuyBitcoinMiniatureVignetteLink.appendChild(createBuyBitcoinMiniatureVignetteTitle);

        var createBuyBitcoinMiniatureVignetteText = document.createElement("p");
        createBuyBitcoinMiniatureVignetteText.className = "buyBitcoinMiniature_vignette-text";
        createBuyBitcoinMiniatureVignetteText.textContent = buyBitcoin[x].synopsis;
        createBuyBitcoinMiniatureVignetteLink.appendChild(createBuyBitcoinMiniatureVignetteText);

        getBuyBitcoinMiniature.appendChild(createBuyBitcoinMiniatureVignette);

    }
}

createVignette();