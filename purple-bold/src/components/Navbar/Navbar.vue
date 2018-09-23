<template lang="pug">
    div
      .navbar
        .navbar__content
          .navbar__content__brand
            h2 
              span.purple Purple 
              span.bold + Bold
          .navbar__content__desktopnav 
            ul
              li(
                v-for="navitem in navItems"
                @mouseenter="hasBorder"
                @mouseleave="removeBorder"
                ) 
                a(:href=" navitem.url ") {{ navitem.name  }}
      br
      br
      br
      br
      br
      br
      br  
      br
      br
      br
      br
      br
      br
      br       
</template>

<script>
    export default {
      data() {
        return {
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
        // hasBorder(event) {
        //   const el = event.target
        //   el.style.borderBottom = "4px solid #522E60";
        // },
        // removeBorder(event) {
        //   const el = event.target
        //   el.style.borderBottom = "4px solid transparent"
        // }
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
  &__content
    display: flex
    align-items: center
    justify-content: space-between
    width: 1100px
    height: 100%
    &__brand
      font-family: 'Rubik', 'Avenir', sans-serif
      color: $blue-grey
      h2
        font-size: 2.3em
        letter-spacing: .025em
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

</style>