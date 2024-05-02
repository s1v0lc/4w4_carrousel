(function () {
    let carrousel = document.querySelector('.carrousel');

    // Sélection des images de la galerie pour leur affecter la classe ".bouton__ouvrir" 
    let imagesboutons = document.querySelectorAll('.carte>figure>figure');
    for (const image of imagesboutons) {
        image.classList.add("bouton__ouvrir");

    }
    let boutons = document.querySelectorAll('.bouton__ouvrir');
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
        carrousel__img.classList.remove(".carte");
        carrousel__img.src = elm.src;
        carrousel__figure.appendChild(carrousel__img);
        // Boutons radios
        let form__input = document.createElement("input");
        form__input.setAttribute("type", "radio");
        form__input.setAttribute("name", "carrousel__radio");
        form__input.setAttribute("data-id", i);

        form__input.addEventListener("change", determinerIndex);
        carrousel__form.appendChild(form__input);
    }

    // Observe quelle image a été cliquée
    function determinerIndex(event) {
        let i = event.target.dataset.id;
        changerImgCarrousel(i);
    }
    // Fonction appelée quand un bouton radio change
    // Elle change ensuite le z-index correspondant à l'index du bouton cliqué
    function changerImgCarrousel(i) {
        // Activation du bouton radio correspondant
        for (const elm of carrousel__form) {elm.removeAttribute("checked", false);}
        carrousel__form[i].setAttribute("checked", true);
        console.log(carrousel__form);
        for (const img of carrousel__figure.children) { img.style.opacity = "0"; }
        let carrousel_enfants = carrousel__figure.children;
        carrousel_enfants[Number(i)].style.opacity = "1";
    }

    // Boucle qui met des event listeners pour ouvrir le carrousel avec la bonne image selon son index
    for (let i = 0; i < boutons.length; i++) {
        boutons[i].addEventListener("mousedown", function () {
            ouvrirCarrousel(i);
        })
    }

    // Boutons X
    carrousel__x.addEventListener("mousedown", function () {
        carrousel.classList.remove("carrousel--ouvrir");
    })

    /** Ouverture du carrousel
     * @param {int} index Index de l'image cliquée
     */
    function ouvrirCarrousel(index) {
        // ajout de la classe pour scale up le conteneur
        carrousel.classList.add("carrousel--ouvrir");
        // Affichage de la bonne image
        changerImgCarrousel(index);
    }
})()