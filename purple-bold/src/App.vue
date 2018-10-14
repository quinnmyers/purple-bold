<template>
  <div id="app">
    <app-landing></app-landing>
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-about></app-about>
    <app-services></app-services>
    <app-portfolio></app-portfolio>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
  
  <!-- #app
    #nav 
      router-link(to='/') Home | 
      router-link(to='/about') About
      router-view -->

</template>

<script>
import Landing from "./components/Landing.vue";
import Navbar from "./components/Navbar/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About/About.vue";
import Services from "./components/Services/Services.vue";
import Portfolio from "./components/Portfolio/Portfolio.vue";

export default {
  components: {
    appLanding: Landing,
    appNavbar: Navbar,
    appHero: Hero,
    appAbout: About,
    appServices: Services,
    appPortfolio: Portfolio
  }
};
</script>

<style lang="sass">



</style>
