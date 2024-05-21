(function () {
    let carrousel = document.querySelector('.carrousel');
    if (carrousel) {
        // Sélection des images de la galerie pour leur affecter la classe ".bouton__ouvrir" 
        let imagesboutons = document.querySelectorAll('.carte>figure>figure');
        for (const image of imagesboutons) {
            image.classList.add("bouton__ouvrir");
        }
        // Sélection des boutons
        let boutons = document.querySelectorAll('.bouton__ouvrir');
        let carrousel__x = document.querySelector('.carrousel__x');
        let carrousel__droite = document.querySelector('.carrousel__droite');
        let carrousel__gauche = document.querySelector('.carrousel__gauche');
        let indexFleches; // variables extérieures aux fonctions pour permettre aux flèches de le changer

        // Sélection des autres éléments du carrousel
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
            indexFleches = Number(i);
            changerImgCarrousel(i);
        }
        // Fonction appelée quand un bouton radio change
        // Elle change ensuite le z-index correspondant à l'index du bouton cliqué
        function changerImgCarrousel(i) {
            // S'assurer que c'est un nombre
            let index = Number(i);
            // "Uncheck" les boutons radio 
            for (const elm of carrousel__form) { elm.removeAttribute("checked", false); }
            // Activation du bouton radio correspondant
            carrousel__form[index].setAttribute("checked", true);
            // console.log(carrousel__form);
            for (const img of carrousel__figure.children) { img.style.opacity = "0"; }
            let carrousel_enfants = carrousel__figure.children;
            carrousel_enfants[index].style.opacity = "1";
        }

        // Boucle qui met des event listeners pour ouvrir le carrousel avec la bonne image selon son index
        for (let i = 0; i < boutons.length; i++) {
            boutons[i].addEventListener("mousedown", function () {
                ouvrirCarrousel(i);
            })
        }

        // Bouton X
        carrousel__x.addEventListener("mousedown", function () {
            carrousel.classList.remove("carrousel--ouvrir");
        })
        // Flèches
        carrousel__droite.addEventListener("mousedown", function () {
            if (indexFleches == galerie__img.length-1) {
                indexFleches = 0;
            } else {
                indexFleches += 1;
            }
            changerImgCarrousel(indexFleches)
        })
        carrousel__gauche.addEventListener("mousedown", function () {
            if (indexFleches == 0) {
                indexFleches = galerie__img.length-1;
            } else {
                indexFleches -= 1;
            }
            changerImgCarrousel(indexFleches);
        })

        /** Ouverture du carrousel
         * @param {int} index Index de l'image cliquée
         */
        function ouvrirCarrousel(index) {
            if (carrousel.classList.contains("carrousel--ouvrir")) {
                // retrait de la classe pour scale down le conteneur
                carrousel.classList.remove("carrousel--ouvrir");
            } else {
                // ajout de la classe pour scale up le conteneur
                carrousel.classList.add("carrousel--ouvrir");
                // Affichage de la bonne image
                indexFleches = index;
                changerImgCarrousel(index);
            }
        }
    }
})()