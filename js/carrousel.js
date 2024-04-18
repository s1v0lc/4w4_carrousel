(function () {
    let carrousel = document.querySelector('.carrousel');
    let bouton = document.querySelector('.bouton__ouvrir');
    let carrousel__x = document.querySelector('.carrousel__x');

    let galerie = document.querySelector('.galerie');

    let carrousel__figure = document.querySelector('.carrousel__figure');
    let galerie__img = document.querySelectorAll(".galerie img"); // collection d'image de la galerie
    let carrousel__form = document.querySelector('.carrousel__form');

    for (let i = 0; i < galerie__img.length; i++) {
        // Images du carrousel
        const elm = galerie__img[i];
        let carrousel__img = document.createElement("img");
        carrousel__img.classList.add("carrousel__img");
        carrousel__img.src = elm.src;
        carrousel__figure.appendChild(carrousel__img);
        // Boutons radios
        let form__input = document.createElement("input");
        form__input.setAttribute("type", "radio");
        form__input.setAttribute("name", "carrousel__radio");
        form__input.setAttribute("data-test", i);
        form__input.classList.add("desactive");
        form__input.addEventListener("change", changerImgCarrousel);
        carrousel__form.appendChild(form__input);
    }
    // Activation du premier bouton radio par défaut
    carrousel__form.firstChild.setAttribute("checked", "checked");

    // Fonction appelée quand un bouton radio change
    // Elle change ensuite le zindez correspondant à l'index du bouton cliqué
    function changerImgCarrousel(event) {
        let i = event.target.dataset.test;
        for (const img of carrousel__figure.children) { img.style.zIndex = "10"; }
        let carrousel_enfants = carrousel__figure.children;
        carrousel_enfants[Number(i)].style.zIndex = "100";
    }

    bouton.addEventListener("mousedown", function () {
        carrousel.classList.add("carrousel--ouvrir");
    })
    carrousel__x.addEventListener("mousedown", function () {
        carrousel.classList.remove("carrousel--ouvrir");
    })
})()