<template lang="pug">
  //- div
  //-   nav(role='navigation').mobilenav
  //-     .mobilenav__container 
  //-         ul(
  //-           :class="{ expanded: mobileNavExpanded }"
  //-         )
  //-           li(
  //-             v-for="navitem in navItems"
  //-             ) 
  //-             a(:href=" navitem.url ") {{ navitem.name  }}
</template>

<script>
    export default {
      data() {
        return {
        
        }
      },
      props: ['navItems', 'mobileNavExpanded']
    }
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

.mobilenav
  overflow: hidden
  position: absolute
  width: 100%
  a 
    text-decoration: none
    color: $blue-grey
  ul 
    background: red
    transform: translateY(-100%)
    transition: transform 0.5s ease-in-out
    &.expanded 
      transform: translateY(0)

//need to pass the truthiness of "expanded" so the UL knows if it should be 
//grown or not
</style>
