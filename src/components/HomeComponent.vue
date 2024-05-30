<template>
  <div>
    <header>
      <img src="../assets/image/favicon.jpg" @click="scrollToTop" alt="Logo" class="scroll-to-top" />
      <nav>
        <ul>
          <li class="nav-item">
            <router-link to="/presentation" class="nav-link" exact-active-class="active">Présentation</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/creations" class="nav-link" exact-active-class="active">Créations</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" exact-active-class="active">Contact</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  mounted() {
    // Sélectionne toutes les images avec la classe "scroll-to-top"
    const images = document.querySelectorAll(".scroll-to-top");
    images.forEach((image) => {
      image.addEventListener("click", function () {
        // Faire défiler jusqu'au haut de la page
        window.scrollTo({
          top: 0,
          behavior: "smooth" // Animation de défilement fluide
        });
      });
    });
  },
  // Position en haut de la page et Animation de défilement fluide
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>

<style scoped>
header {
  max-width: 1160px;
  margin: 0 auto 15px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  background: #333;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000;
}

header img {
  width: 100px;
  cursor: pointer;
}

header nav ul {
  list-style: none;
  display: flex;
}

header nav ul li {
  margin-right: 20px;
}

header nav ul li .nav-link {
  text-decoration: none;
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  position: relative;
}

header nav ul li .nav-link:hover {
  color: #ffd700;
}

.nav-link.active {
  text-decoration: underline;
  color: violet;
}

.nav-link:hover::before,
.nav-link:hover::after {
  width: 100%;
}

.nav-link::before,
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: violet;
  transition: width 0.3s ease;
}

.nav-link::before {
  transition-delay: 0.1s;
}

.nav-link::after {
  transition-delay: 0.2s;
}

.scroll-to-top {
  border-radius: 10px;
  box-shadow: 0px 9px 30px 0px rgba(144, 19, 254, 1);
}

.scroll-to-top:hover {
  transform: translateY(-10px);
}

@media screen and (max-width: 768px) {
  header {
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 20px;
  }

  nav {
    margin-top: 20px;
  }

  nav ul {
    flex-direction: column;
    align-items: center;
  }

  nav ul li {
    margin: 10px 0;
  }
}
</style>
