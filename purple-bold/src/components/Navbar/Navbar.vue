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
            ul
              li(
                v-for="navitem in navItems"
                ) 
                a(:href=" navitem.url ") {{ navitem.name  }}

          .navbar__content__mobilenav
            button.navbar__content__mobilenav__hamburger(
              @click="mobileNavExpanded = !mobileNavExpanded"
            )
              span.navbar__content__mobilenav__hamburger__line1
              span.navbar__content__mobilenav__hamburger__line2
              span.navbar__content__mobilenav__hamburger__line3
      app-mobile-nav(
        :navItems="this.navItems"
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
      p Consectetur nulla sunt incididunt eu exercitation. Enim nulla ex anim occaecat. Nulla proident laborum ullamco nisi aliqua id tempor incididunt pariatur consequat nostrud deserunt. Occaecat exercitation esse et eiusmod. Laborum laborum nulla mollit laboris laborum irure ex exercitation excepteur do.
      p Consectetur nulla sunt incididunt eu exercitation. Enim nulla ex anim occaecat. Nulla proident laborum ullamco nisi aliqua id tempor incididunt pariatur consequat nostrud deserunt. Occaecat exercitation esse et eiusmod. Laborum laborum nulla mollit laboris laborum irure ex exercitation excepteur do.
      p Consectetur nulla sunt incididunt eu exercitation. Enim nulla ex anim occaecat. Nulla proident laborum ullamco nisi aliqua id tempor incididunt pariatur consequat nostrud deserunt. Occaecat exercitation esse et eiusmod. Laborum laborum nulla mollit laboris laborum irure ex exercitation excepteur do.
      br
      br
      br
      br
      br     
</template>

<script>
import MobileNav from './MobileNav.vue'

    export default {
      data() {
        return {
          mobileNavExpanded: false,
          navItems: [
          {
            name: 'About',
            url: 'https://www.google.com', 
          },
          {
            name: 'Services',
            url: '#', 
          },
          {
            name: 'Portfolio',
            url: '#', 
          },
          {
            name: 'Contact',
            url: '#', 
          }
        ]
        }
      },
      methods: {
        
      },
      components: {
        appMobileNav: MobileNav
      }
        
    }
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'


.navbar
  display: flex
  justify-content: center
  align-items: center
  height: 60px
  background: lightgrey
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
      ul
        display: flex
        justify-content: center
        align-items: center
        list-style: none
        font-family: 'Rubik', 'Avenir', sans-serif
        height: 100%
        li
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
          background: pink
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
    &__mobilenav
      display: flex
      height: 28px
      width: 40px 
      background: red
      &__hamburger
        display: flex
        flex-direction: column 
        justify-content: space-between
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