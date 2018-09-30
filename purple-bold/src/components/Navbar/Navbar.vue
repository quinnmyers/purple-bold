<template lang="pug">
    div
      //ADD IN BOTTOM BOX SHADOW ON NAV WHEN MOBILE IS EXPANDED
      nav.navbar(
        :class="{ expanded: mobileNavExpanded }"
      )
        .navbar__content
          .navbar__content__brand
            h2 
              span.purple Purple 
              span.bold + Bold
          .navbar__content__desktopnav 
            ul.main__nav
              li.main__nav__item(
                @mouseenter="setFocus"
                @mouseleave="setFocus"
                v-for="navitem in navItems"
                ) 
                a(
                :href=" navitem.url "
                @mouseover.stop
                ) {{ navitem.name  }}
                template(
                  v-if="navitem.hasOwnProperty('subCategories')"
                )
                  .navbar__content__desktopnav__subcategory
                    ul.desktopnav__sub__menu 
                      li.desktopnav__sub__menu__item(
                        v-for="subCategory in navitem.subCategories"
                      ) {{ subCategory.name }}

          .navbar__content__mobilenav
            button.navbar__content__mobilenav__hamburger(
              @click="mobileNavExpanded = !mobileNavExpanded"
            )
              span.navbar__content__mobilenav__hamburger__line1
              span.navbar__content__mobilenav__hamburger__line2
              span.navbar__content__mobilenav__hamburger__line3
      app-mobile-nav(
        :navItems="this.navItems"
        :mobileNavExpanded="this.mobileNavExpanded"
      )
      //- nav.mobilenav
      //-   .mobilenav__container 
      //-      ul(
      //-        :class="{ expanded: mobileNavExpanded }"
      //-      )
      //-         li(
      //-           v-for="navitem in navItems"
      //-           ) 
      //-           a(:href=" navitem.url ") {{ navitem.name  }}
</template>

<script>
//subcategory LI are not getting a class may fix underline issue
import MobileNav from "./MobileNav.vue";

export default {
  data() {
    return {
      mobileNavExpanded: false,
      focus: false,
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
    elementCoords(event) {
      const coords = event.target.getBoundingClientRect();
      const xCoord = Math.floor(coords.x);
      const yCoord = Math.floor(coords.y);
      // console.log(`X: ${coords.x}, Y:${coords.y}`);
      console.log(`X: ${xCoord}, Y: ${yCoord}`);
      const el = event.target;
      el.style.color = "green";
    },
    setFocus(event) {
      console.log(event);
      this.focus = !this.focus;
      const el = event.target;
      const popoutMenu = el.childNodes[1];
      console.log(this.focus);
      if (this.focus) {
        popoutMenu.style.opacity = "1";
      } else {
        popoutMenu.style.opacity = "0";
      }
    }
  },
  components: {
    appMobileNav: MobileNav
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

//scoped variables 
$nav-height: 60px

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
          //border-bottom: 4px solid transparent
          //transition: border-color .25s ease-in-out
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
            background: #522E60
            transform: scaleX(1)
            border-radius: 2px
          &:after
            content: ''
            width: 100%
            height: 4px
            background: transparent
            transform: scaleX(0)
            transition: all 0.25s ease-in-out
          a
            color: $blue-grey
            cursor: pointer
            text-decoration: none
            //this needs to be set the same as the height
            //:after of the li's above to cancel it
            margin-bottom: -4px
          a:visited 
            color: $blue-grey
          &:last-child
            margin-right: 0px
            a 
              border: 1px solid $blue-grey
              padding: 6px 20px
              border-radius: 4px
              @include tablet-portrait 
                padding: 5px 16px
                border-radius: 3px
    .navbar__content__desktopnav 
      ul
        li
          .navbar__content__desktopnav__subcategory
            display: flex
            opacity: 0
            background: white
            border: 2px solid black
            padding: 30px 40px
            flex-direction: column
            position: absolute
            transform: translateY($nav-height)
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

</style>