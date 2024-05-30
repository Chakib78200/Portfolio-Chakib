<template>
    <div>
        <div class="btn-top">
            <img src="../assets/image/icone/icone scroll.png" alt="Scroll" class="scrollbutton">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ScrollToTop',
    mounted() {
        //Sélectionne le bouton avec la classe 'scrollbutton' et le stocke dans la constante 'btn' 
        const btn = document.querySelector('.scrollbutton');
        // Ajoute un écouteur d'événement pour l'événement de défilement (scroll) sur la fenêtre
        window.addEventListener('scroll', function () {
            // Vérifie si la position de défilement vertical du document est supérieure à 20 pixels
            if (document.documentElement.scrollTop > 20) {
                // Si oui, affiche le bouton en modifiant son style pour le rendre visible
                btn.style.display = 'block';
            } else {
                // Sinon, cache le bouton en modifiant son style pour le rendre invisible
                btn.style.display = 'none';
            }
        });
        // Ajoute un écouteur d'événement pour l'événement de clic sur le bouton
        btn.addEventListener('click', function (event) {
            // Empêche le comportement par défaut de l'événement de clic 
            event.preventDefault();
            // Fait défiler la fenêtre jusqu'en haut de la page avec un effet de défilement fluide
            window.scrollTo({
                top: 0, // Position verticale cible (haut de la page)
                left: 0,  // Position horizontale cible (gauche de la page)
                behavior: 'smooth' // Défilement fluide
            });
        });
    }
}
</script>

<style scoped>
.scrollbutton {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    cursor: pointer;
    z-index: 1000;
}
</style>