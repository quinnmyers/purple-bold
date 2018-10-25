<template>
    <div :class="{ fixed: fixedNavClass }">
    <!--ADD IN BOTTOM BOX SHADOW ON NAV WHEN MOBILE IS EXPANDED-->
    <nav class="navbar" ref="navbar" :class="{ expanded: mobileNavExpanded, fixed: fixedNavClass }">
      <div class="navbar__content">
        <div class="navbar__content__brand">
          <img src="../../assets/images/brand.svg" alt="Purple and Bold Logo">
          <!-- <h2>
            <span class="purple">Purple</span>
            <span class="bold">+ Bold</span>
          </h2> -->
        </div>
          <div class="navbar__content__desktopnav">
            <ul class="main__nav">
              <li class="main__nav__item" v-for="(navitem, index) in navItems"@mouseenter="setFocus" @mouseleave="setFocus" > 
                <a :href=" navitem.url ">{{ navitem.name  }}</a>
                  <!-- <template v-if="navitem.hasOwnProperty('subCategories')">
                  <div class="navbar__content__desktopnav__subcategory">
                    <ul class="desktopnav__sub__menu"> 
                      <li class="desktopnav__sub__menu__item" 
                          v-for="subCategory in navitem.subCategories">{{ subCategory.name }}
                      </li>
                    </ul>
                  </div>
                  </template> -->
                </li>
              </ul>
          </div>
          <div class="navbar__content__mobilenav">
            <button class="navbar__content__mobilenav__hamburger" @click="mobileNavExpanded = !mobileNavExpanded">
              <span class="navbar__content__mobilenav__hamburger__line1"></span>
              <span class="navbar__content__mobilenav__hamburger__line2"></span>
              <span class="navbar__content__mobilenav__hamburger__line3"></span>
            </button>
          </div>
      </div>
    </nav>
    <app-mobile-nav :navItems="this.navItems" :mobileNavExpanded="this.mobileNavExpanded"></app-mobile-nav>
</div>
      <!-- //- nav.mobilenav
      //-   .mobilenav__container 
      //-      ul(
      //-        :class="{ expanded: mobileNavExpanded }"
      //-      )
      //-         li(
      //-           v-for="navitem in navItems"
      //-           ) 
      //-           a(:href=" navitem.url ") {{ navitem.name  }} -->
</template>

<script>
//subcategory LI are not getting a class may fix underline issue
import MobileNav from "./MobileNav.vue";

export default {
  components: {
    appMobileNav: MobileNav
  },
  data() {
    return {
      mobileNavExpanded: false,
      focus: false,
      fixedNavClass: false,
      navItems: [
        {
          name: "About",
          url: "#"
        },
        {
          name: "Services",
          url: "#",
          subCategories: [
            {
              name: "Web Development",
              url: "#",
              icon: "#",
              desc:
                "Commodo quis qui excepteur exercitation elit cillum voluptate enim veniam fugiat consequat.",
              subSubCategories: [
                {
                  name: "Lorem Ipsum Dolor",
                  url: "#"
                },
                {
                  name: "Lorem Ipsum Dolor",
                  url: "#"
                },
                {
                  name: "Lorem Ipsum Dolor",
                  url: "#"
                }
              ]
            },
            {
              name: "Creative",
              url: "#",
              icon: "#",
              desc:
                "Commodo quis qui excepteur exercitation elit cillum voluptate enim veniam fugiat consequat.",
              subSubCategories: [
                {
                  name: "Lorem Ipsum Dolor",
                  url: "#"
                },
                {
                  name: "Lorem Ipsum Dolor",
                  url: "#"
                },
                {
                  name: "Lorem Ipsum Dolor",
                  url: "#"
                }
              ]
            },
            {
              name: "Branding",
              url: "#",
              icon: "#",
              desc:
                "Commodo quis qui excepteur exercitation elit cillum voluptate enim veniam fugiat consequat.",
              subSubCategories: [
                {
                  name: "Lorem Ipsum Dolor",
                  url: "#"
                },
                {
                  name: "Lorem Ipsum Dolor",
                  url: "#"
                },
                {
                  name: "Lorem Ipsum Dolor",
                  url: "#"
                }
              ]
            },
            {
              name: "Marketing",
              url: "#",
              icon: "#",
              desc:
                "Commodo quis qui excepteur exercitation elit cillum voluptate enim veniam fugiat consequat.",
              subSubCategories: [
                {
                  name: "Lorem Ipsum Dolor",
                  url: "#"
                },
                {
                  name: "Lorem Ipsum Dolor",
                  url: "#"
                },
                {
                  name: "Lorem Ipsum Dolor",
                  url: "#"
                }
              ]
            }
          ]
        },
        {
          name: "Portfolio",
          url: "#"
        },
        {
          name: "Contact",
          url: "#"
        }
      ]
    };
  },
  methods: {
    setFocus(event) {
      console.log(event);
      this.focus = !this.focus;
      const el = event.target;
      const popoutMenu = el.childNodes[1];
      console.log(this.focus);
      // if (this.focus) {
      //   // popoutMenu.style.opacity = "1";
      //   // popoutMenu.style.visibility = "visible";
      //   popoutMenu.classList.add("submenu-expanded");
      // } else {
      //   // popoutMenu.style.opacity = "0";
      //   // popoutMenu.style.visibility = "hidden";
      //   popoutMenu.classList.remove("submenu-expanded");
      // }
    },
    expandSubMenu() {
      console.log(event.target);
    },
    removeSubMenu() {
      console.log("lext the LI");
    },
    handleResize() {
      this.windowOffset = window.innerHeight;
    },
    fixedNav() {
      console.log(this.topOfNav);
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    const topOfNavb = this.$refs.navbar.offsetTop;
    window.addEventListener("scroll", e => {
      if (window.scrollY >= topOfNavb) {
        console.log("bingo");
        this.fixedNavClass = true;
      } else {
        this.fixedNavClass = false;
      }
    });
  }
};

// elementCoords(event) {
//   const coords = event.target.getBoundingClientRect();
//   const xCoord = Math.floor(coords.x);
//   const yCoord = Math.floor(coords.y);
//   // console.log(`X: ${coords.x}, Y:${coords.y}`);
//   console.log(`X: ${xCoord}, Y: ${yCoord}`);
//   const el = event.target;
//   el.style.color = "green";
// },
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

//scoped variables 
$nav-height: 60px

.fixed
  position: fixed
  width: 100%
  display: flex
  z-index: 999
.fixed.navbar
  position: fixed
  z-index: 999
  background: white
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75)
  &__content
    z-index: 999
    &__desktopnav
      z-index: 999


.navbar
  display: flex
  position: relative
  justify-content: center
  align-items: center
  height: $nav-height
  z-index: 999
  @include tablet-portrait 
    height: 50px
  &.expanded
    background: pink
  &__content
    display: flex
    align-items: center
    justify-content: space-between
    width: 1100px
    height: 100%
    @include edgesnap 
      width: 100%
      padding: 0px 10px
    &__brand
      display: flex
      font-family: 'Rubik', 'Avenir', sans-serif
      color: $blue-grey
      h2
        font-size: 2.3em
        letter-spacing: .025em
        @include tablet-portrait
          font-size: 2em
        .purple
            font-weight: $normal
        .bold
          font-weight: 900
    &__desktopnav
      display: flex
      justify-content: center
      align-items: center
      width: auto
      height: 100%
      @include navsnap
        display: none
      ul.main__nav
        display: flex
        justify-content: center
        align-items: center
        list-style: none
        font-family: 'Rubik', 'Avenir', sans-serif
        height: 100%
        li.main__nav__item
          display: flex
          flex-direction: column
          justify-content: space-between
          margin: 0px 15px
          font-size: 1.05em
          font-weight: $light
          letter-spacing: .025em
          height: 100%
          //removes hover effect of the contact button -- may want to remove this
          @include tablet-portrait 
            font-size: .9em
          &:last-child
            &:before
              content: ''
            &:after
              content: ''
              background: none
          &:before
            content: ''
            transform: scaleX(0)
          &:hover:after
            background: $accent
            transform: scaleX(1)
            //margin-bottom: 10px
            // border-radius: 2px
          &:after
            content: ''
            width: 100%
            height: 1px
            background: transparent
            transform: scaleX(0)
            transition: all 0.2s ease-in-out
          a
            color: $blue-grey
            cursor: pointer
            text-decoration: none
            transition: all .2s ease
            //this needs to be set the same as the height
            //:after of the li's above to cancel it
            margin-bottom: -2px
          a:visited 
            color: $blue-grey
          &:last-child
            display: flex 
            flex-direction: column
            justify-content: center
            //always needs to be the same as the li:after (-)
            //in order to cancel out the hover effect :after sizing
            margin-bottom: 2px
            margin-right: 0px
            height: 100% 
            &:after 
              display: none
            a 
              border: 1px solid $blue-grey
              border-radius: 4px
              padding: 6px 20px
              &:hover 
                border: 1px solid $accent
              @include tablet-portrait 
                padding: 5px 16px
                border-radius: 3px
    .navbar__content__desktopnav 
      ul
        li
          // position: relative 
          // z-index: -1
          .navbar__content__desktopnav__subcategory
            display: flex
            opacity: 0
            background: white
            border: 2px solid black
            padding: 30px 40px
            flex-direction: column
            transform: translateY($nav-height)
            position: absolute
            //visibility: hidden
            //z-index: -100
            &.submenu-expanded 
              animation: expand-submenu 1s cubic-bezier(.36,.19,.11,-0.38) forwards
              transform-origin: top
            ul.desktopnav__sub__menu 
              display: flex 
              flex-direction: column
              li.desktopnav__sub__menu__item
                &:after 
                  content: ''
                  border: none
               

    &__mobilenav
      display: none
      height: 28px
      width: 40px 
      background: red
      @include navsnap 
        display: flex
      &__hamburger
        display: flex
        flex-direction: column 
        justify-content: space-between
        cursor: pointer
        //height: 3px
        &__line1, &__line2, &__line3
          display: flex
          height: 3px
          border-radius: 2px
          width: 40px
          background: yellow
        &__line1
        &__line2
        &__line3


@keyframes expand-submenu 
  from 
    opacity: 0
    transform: rotateY(0deg) scale(0.3) translateY($nav-height)
    //transform: scale(1) rotateX(-90deg) translateY($nav-height)
  to 
    opacity: 1
    transform: rotateY(1080deg) scale(1) translateY($nav-height)
    //transform: scale(1) rotateX(0deg) translateY($nav-height)


</style>