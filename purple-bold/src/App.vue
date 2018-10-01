<template lang="pug">
  #app
    app-landing
    app-navbar
    app-hero
    app-about
    app-services

  
  
  
  //#app
    #nav 
      router-link(to='/') Home | 
      router-link(to='/about') About
      router-view

</template>

<script>
import Landing from "./components/Landing.vue";
import Navbar from "./components/Navbar/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About/About.vue";
import Services from "./components/Services/Services.vue";

export default {
  components: {
    appLanding: Landing,
    appNavbar: Navbar,
    appHero: Hero,
    appAbout: About,
    appServices: Services
  }
};
</script>

<style lang="sass">



</style>
