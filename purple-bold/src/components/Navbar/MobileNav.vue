<template>
    <div v-if='isMounted'>
      <nav class="mobilenav">
        <div class="mobilenav__container">
          <vue-slide-up-down :active="expandMobileNav" :duration="600">
            <ul :class="[{expanded: mobileNavExpanded}, mobilenavCollapsed]" ref="mobile-nav-ul">
            <li v-for="navitem in navItems">
              <a :class="[`mobilenav__item`, textInView]" href="navitem.url">
                {{ navitem.name }}
              </a>
            </li>
          </ul>
          </vue-slide-up-down>
        </div>
      </nav>
    </div>

  
</template>

<script>
import VueSlideUpDown from "vue-slide-up-down";
// { expanded: mobileNavExpanded }
export default {
  components: {
    VueSlideUpDown: VueSlideUpDown
  },
  data() {
    return {
      textInView: "",
      isMounted: false,
      mobilenavCollapsed: ""
      //expandMobileNav: true
    };
  },
  props: ["navItems", "mobileNavExpanded", "expandMobileNav"],
  watch: {
    mobileNavExpanded: function() {
      if (!this.mobileNavExpanded) {
        this.mobilenavCollapsed = "mobilenav-collapse";
        console.log("collapsing");
      } else if (this.mobileNavExpanded) {
        this.mobilenavCollapsed = "";
        console.log("is expanded");
      }
      if (this.textInView === "") {
        setTimeout(() => {
          this.textInView = "in-view";
        }, 1100);
      } else {
        this.textInView = "";
      }
    }
  },
  methods: {},
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

.mobilenav
  overflow: hidden
  position: absolute
  width: 100%
  z-index: 500
  text-align: right
  &__container
    // ul 
    //   //dark
    //   display: flex 
    //   flex-direction: column
    //   list-style: none 
    //   height: 100vh 
    //   background: rgba(50, 50, 50, 0.8)
    //   transform: translateY(-100%)
    //   transition: transform 0.5s ease-in-out
    ul 
      //light
      display: flex 
      flex-direction: column
      list-style: none 
      height: 100vh 
      background: rgba(255, 255, 255, 0.6)
      //transform: translateY(-100%)
      //opacity: 0
      //animation: mobile-menu-out 1s ease-out
      &.expanded 
        //animation: expand-mobilenav-menu 1s forwards ease-in-out
      &.mobilenav-collapse 
        //animation: collapse-mobilenav 0.5s forwards ease-out
      .mobilenav__item, a 
        //light
        display: block
        text-decoration: none
        font-family: 'Rubik', "Avenir", sans-serif 
        font-weight: 300
        font-size: 1.2em 
        letter-spacing: .1em
        padding: 20px 10px
        text-decoration: none
        color: $blue-grey
        transform: translateX(100px)
        //transition: all 0.3s ease-in-out
        &.in-view 
          transform: translateX(0px)
          animation: load-mobilenav-text 1.5s forwards
        &:visited 
          color: $blue-grey
      // .mobilenav__item, a
      //   //dark
      //   display: block
      //   text-decoration: none
      //   font-family: 'Rubik', "Avenir", sans-serif 
      //   font-weight: 300
      //   font-size: 1.2em 
      //   letter-spacing: .1em
      //   padding: 20px 10px
      //   text-decoration: none
      //   color: white
        &:visited 
          color: white

@keyframes expand-mobilenav-menu
  from
    transform: translateY(-100%)
    opacity: 1
  to
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)
    transform: translateY(0%)
    opacity: 1

  20%
    transform: translateY(0%)
  53%
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06)
    transform: translateY(-25%)
  90%

@keyframes collapse-mobilenav
  0% 
    opacity: 1
  100% 
    transform: translateY(-100%)
    opacity: 0

@keyframes load-mobilenav-text
  0%
    letter-spacing: 1.2em
  35% 
    transform: translateX(-20px)
  90%
    letter-spacing: .005em
  100%
    letter-spacing: .05em
    transform: translateX(0px)


//need to pass the truthiness of "expanded" so the UL knows if it should be 
//grown or not
</style>
