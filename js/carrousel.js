(function() {
    console.log('début du carrousel');
    let carrousel = document.querySelector('.carrousel');
    let bouton = document.querySelector('.bouton__ouvrir');
    let carrousel__x = document.querySelector('.carrousel__x');

    let galerie = document.querySelector('.galerie');
    // let galerie__img = galerie.querySelector("img");
    let carrousel__img = document.createElement("img");
    carrousel__img.classList.add("carrousel__img");
    
    let carrousel__figure = document.querySelector('.carrousel__figure');
    carrousel__figure.appendChild(carrousel__img);
    
    let galerie__img = galerie.querySelectorAll("img"); // collection d'image de la galerie
    for (const elm of galerie__img) {
        carrousel__img.src = elm.src;
    }


    bouton.addEventListener("mousedown", function() {
        carrousel.classList.add("carrousel--ouvrir");
    })
    carrousel__x.addEventListener("mousedown", function() {
        carrousel.classList.remove("carrousel--ouvrir");
    })
})()