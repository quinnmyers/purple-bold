<template lang="pug">
  #app
    app-landing
    app-navbar
    app-hero

  
  
  
  //#app
    #nav 
      router-link(to='/') Home | 
      router-link(to='/about') About
      router-view

</template>

<script>
import Landing from './components/Landing.vue'
import Navbar from './components/Navbar/Navbar.vue'
import Hero from './components/Hero.vue'

export default {
  components: {
    appLanding: Landing,
    appHero: Hero,
    appNavbar: Navbar
  }
}
</script>

<style lang="sass">



</style>
