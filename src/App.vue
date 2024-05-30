<template>
  <!-- <HomeComponent /> -->
  <!-- <PresentationComponent /> -->
  <!-- <CreationComponent /> -->
  <!-- <ContactComponent /> -->
  <!-- <FooterComponent /> -->
  <!-- <Page404Component /> -->
  <router-view />
</template>

<script>
//import HomeComponent from "./components/HomeComponent";
//import PresentationComponent from "./components/PresentationComponent";
//import CreationComponent from "./components/CreationComponent";
//import ContactComponent from "./components/ContactComponent";
//import FooterComponent from "./components/FooterComponent";
//import Page404Component from "./components/Page404Component";

export default {
  name: "App",
  components: {
    //HomeComponent,
    //PresentationComponent,
    //CreationComponent,
    //ContactComponent,
    //FooterComponent,
    //Page404Component,
  },
};
</script>

<style>
html {
  scroll-padding-top: 130px;
}

@media (max-width: 768px) {
  html {
    scroll-padding-top: 350px;
  }
}

@media (max-width: 480px) {
  html {
    scroll-padding-top: 350px;
  }
}

body {
  padding: 0;
  margin: 0;
  background: black;
}
</style>
