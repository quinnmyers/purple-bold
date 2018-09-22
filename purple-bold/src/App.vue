<template lang="pug">
  #app
    app-landing

  
  
  
  //#app
    #nav 
      router-link(to='/') Home | 
      router-link(to='/about') About
      router-view

</template>

<script>
import Landing from './components/Landing.vue'

export default {
  components: {
    appLanding: Landing
  }
}
</script>

<style lang="sass">



</style>
