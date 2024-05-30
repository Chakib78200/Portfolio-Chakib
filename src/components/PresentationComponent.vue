<template>
  <div>
    <div id="debut-page-presentation">
      <article>
        <div class="container">
          <div>
            <img src="../assets/image/Photo.jpg" alt="Photo" class="img1 animated-image" />
          </div>
          <div>
            <img src="../assets/image/Image.jpg" alt="Image" class="img2 animated-image" />
          </div>
          <div class="txt">
            <h1 class="colored-text" id="coloredText">Chakib Goussaira</h1>
            <h3 class="colored-text" id="coloredText">Développeur Front End</h3>
            <div class="header">
              <h2>Je suis Chakib Goussaira</h2>
              <h2>Développeur Web spécialisé dans la création de sites modernes et réactifs</h2>
              <p>J'utilise diverses technologies front-end pour concevoir des solutions complètes et performantes.</p>
            </div>
            <div class="section">
              <h2>DEV-TEC</h2>
              <p>DEV.TEC est une entreprise dédiée au développement de solutions Web sur mesure pour toutes les
                entreprises. Nous nous engageons à fournir des services de haute qualité pour aider nos clients à
                atteindre leurs objectifs en ligne.</p>
              <ul class="list">
                <li><strong>Mission :</strong> Aider les entreprises à réussir en ligne avec des solutions web
                  innovantes.</li>
                <li><strong>Vision :</strong> Devenir le partenaire de choix pour les entreprises sur le web.</li>
                <li><strong>Valeurs :</strong> Innovation, qualité, service client, collaboration.</li>
              </ul>
            </div>
            <div class="section services-section">
              <div class="services-text">
                <h2>Services</h2>
                <ul class="list">
                  <li><strong>Développement Front-end :</strong>
                    <ul>
                      <li>Conception UI/UX</li>
                      <li>Développement HTML/CSS</li>
                      <li>JavaScript & Frameworks (Vue.js, React)</li>
                    </ul>
                  </li>
                  <li><strong>Développement Back-end :</strong>
                    <ul>
                      <li>Node.JS & Express</li>
                      <li>Bases de données (MySQL, PostgreSQL, MongoDB)</li>
                      <li>Sécurité</li>
                    </ul>
                  </li>
                  <li><strong>Déploiement :</strong>
                    <ul>
                      <li>Hébergement & serveurs</li>
                      <li>CI/CD</li>
                      <li>Maintenance & Support</li>
                    </ul>
                  </li>
                  <li><strong>Optimisation et Performance :</strong>
                    <ul>
                      <li>Optimisation du code</li>
                      <li>SEO</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="dev-tec">
                <img src="../assets/image/Dev-Tec.png" alt="Image Dev-tec" class="dev-tec-image">
              </div>
              <div class="cv">
                <h4 class="txt-cv">Mon CV</h4>
                <a href="/assets/pdf/Mon-CV.pdf" target="_blank"><img src="/assets/image/Téléchargement.png"
                    alt="Image Téléchargement" class="download" /></a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
    <FooterComponent />
    <ScrollToTop />
  </div>
</template>
<script>
import FooterComponent from '@/components/FooterComponent.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
export default {
  name: "PresentationComponent",
  components: {
    FooterComponent,
    ScrollToTop,
  },
  mounted() {
    // Appel de la méthode scrollToPresentation lorsque le composant est monté
    this.scrollToPresentation();

    // Appel de la méthode animatePresentationText lorsque le composant est monté
    this.animatePresentationText();

    const images = document.querySelectorAll(".scroll-to-top");
    // Sélection des images et ajout d'écouteurs de clic
    images.forEach((image) => {
      image.addEventListener("click", () => {
        this.scrollToTop();
      });
    });
  },
  methods: {
    scrollToPresentation() {
      const anchor = document.getElementById("debut-page-presentation");
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    // Animation texte de présentation
    async animatePresentationText() {
      const h1 = document.querySelector("h1");
      const h3 = document.querySelector("h3");
      // Enregistrer les couleurs initiales
      const h1OriginalColor = window.getComputedStyle(h1).color;
      const h3OriginalColor = window.getComputedStyle(h3).color;

      // Masquer l'élément h3 au débu
      h3.style.display = 'none';

      // Fonction pour générer une couleur aléatoire
      function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      // Fonction pour faire défiler le texte de gauche à droite avec une couleur différente pour chaque lettre
      function scrollText(element, originalColor) {
        return new Promise((resolve) => {
          const text = element.textContent;
          element.textContent = ""; // Efface le texte original
          let index = 0;
          const interval = setInterval(function () {
            if (index === text.length) {
              clearInterval(interval); // Arrête l'intervalle lorsque tout le texte est affiché
              resolve(); // Résout la promesse lorsque le défilement est terminé
              return;
            }
            element.textContent += text[index];
            element.style.color = getRandomColor(); // Applique une couleur différente à chaque lettre
            index++;
          }, 100); // Vitesse de défilement en milliseconde = (0,001 seconde)
        }).then(() => {
          element.style.color = originalColor; // Restaurer la couleur d'origine une fois le défilement terminé
        });
      }

      // Fonction pour démarrer le défilement de h3 après que celui de h1 soit terminé
      async function startScrolling() {
        await scrollText(h1, h1OriginalColor); // Attend que le défilement de h1 soit terminé
        h1.style.color = "white"; // Mettre le texte de h1 en blanc une fois le défilement terminé
        h3.style.display = 'block'; // Affiche h3 une fois que le défilement de h1 est terminé
        await scrollText(h3, h3OriginalColor); // Démarrer le défilement de h3
        h3.style.color = "white"; // Mettre le texte de h3 en blanc une fois le défilement terminé
      }

      // Appeler la fonction startScrolling
      await startScrolling();
    },
    // Méthode pour faire défiler vers le haut de la page
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1140px;
  margin: 0 auto 15px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  background: #333;
}

.txt {
  background: #333;
}

.colored-text {
  color: white;
  text-transform: uppercase;
  background-image: linear-gradient(-225deg,
      #ef91ed 0%,
      #f1eef4 29%,
      #ff1361 67%,
      #fff800 100%);
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 24px;
}

@keyframes textclip {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.img1,
.img2 {
  width: 300px;
  height: 300px;
  float: left;
  border-radius: 50%;
  margin: 20px;
  shape-outside: margin-box;
  margin: 0 20px 5 0;
  box-shadow: 0px 9px 30px 0px rgb(242, 242, 245);
  transition: transform .1s;
}

.img2 {
  width: 300px;
  height: 300px;
  float: right;
  border-radius: 50%;
  margin: 20px;
  shape-outside: margin-box;
  margin: 0 20px 5 0;
  box-shadow: 0px 9px 30px 0px rgb(242, 242, 245);
  transition: transform .1s;
}

.img1:hover {
  transform: translateY(-10px);
}

.img2:hover {
  transform: translateY(-10px);
}

.dev-tec-image:hover {
  transform: translateY(-30px);
}

h1 {
  color: #fff;
  font-size: 2em;
  margin-bottom: 10px;
  background: #333;
}

h2 {
  color: #fff;
  font-size: 1.5em;
  margin-bottom: 10px;
  background: #333;
}

h3 {
  color: #fff;
  font-size: 1.5em;
  margin-bottom: 10px;
  background: #333;
}

p {
  color: #fff;
  line-height: 1.5;
  font-size: 18px;
  background: #333;
}

li {
  color: #fff;
  line-height: 1.5;
  font-size: 18px;
  background: #333;
}

.slide-right {
  animation: slideRight 0.5s forwards;
  opacity: 1;
}

@keyframes slideRight {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.services-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

.services-text {
  flex: 1;
  padding-right: 20px;
}

.dev-tec {
  flex: 0 0 600px;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}

.dev-tec-image {
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0px 9px 30px 0px rgb(242, 242, 245);
  transition: transform .1s;
}

.cv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 50px;
  flex-wrap: wrap;
  width: 100%;
}

.txt-cv {
  font-size: 24px;
  color: white;
  text-transform: uppercase;
  background-image: linear-gradient(-225deg,
      #ef91ed 0%,
      #f1eef4 29%,
      #ff1361 67%,
      #fff800 100%);
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
}

@keyframes textclip {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.download:hover {
  transform: translateY(-30px);
  border-radius: 50%;
}

@media only screen and (max-width: 768px) {
  .container {
    padding: 10px;
    margin: 20px;
  }

  .img1,
  .img2 {
    width: 25%;
    height: 25%;
    margin: 10px 0;
  }

  .colored-text {
    font-size: 20px;
  }

  h1 {
    font-size: 1.2em;
  }

  h3 {
    font-size: 1em;
  }

  p {
    font-size: 14px;
  }

  .services-section {
    flex-direction: column;
  }
}

cv {
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: center;
  color: white;
  font-size: 18px;
  padding: 20px 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  flex-wrap: wrap;
}

@media only screen and (max-width: 480px) {
  .container {
    padding: 10px;
    margin: 20px;
  }

  .img1,
  .img2 {
    width: 25%;
    height: 25%;
    margin: 10px 0;
  }

  .colored-text {
    font-size: 20px;
  }

  h1 {
    font-size: 1.2em;
  }

  h3 {
    font-size: 1em;
  }

  p {
    font-size: 14px;
  }

  .services-section {
    flex-direction: column;
  }

  cv {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    color: white;
    font-size: 18px;
    padding: 20px 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
  }
}

cv {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  font-size: 18px;
  padding: 20px 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
}
</style>