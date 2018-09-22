<template lang="pug">
    div
      .landing__page
        button(
          @click="toggleLoad"
        ) Click Me
        .landing__page__content
          .landing__page__content__container
            .landing__page__content__container__top(
              :class="{loaded: isLoaded}"
              )
              h1 Purple
            .landing__page__content__container__middle
              .landing__page__content__container__middle__left(
                :class="{loaded: isLoaded}"
              )
                h1 +
              .landing__page__content__container__middle__right(
                :class="{loaded: isLoaded}"
              )
                h1 Bold
            .landing__page__content__container__bottom
              img.landing--arrow(src='../assets/images/icons/arrow.svg')
</template>

<script>
   export default {
        data() {
          return {
            isLoaded: false
          }
        },
        methods: {
          toggleLoad() {
            this.isLoaded = !this.isLoaded;
          }
        }
    }
</script>

<style lang="sass">
@import '../normalize.scss'
@import '../base.sass'

$arrow-margin-bottom: 20px 

.landing__page
  display: flex
  flex-direction: column
  width: 100vw
  height: 100vh
  background: $blue-grey
  font-family: 'Rubik', 'Avenir', sans-serif
  &__content
    display: flex
    flex-direction: column
    align-self: center
    align-items: flex-end
    width: 1100px
    margin: auto 0
    color: white
    &__container
      display: flex
      flex-direction: column
      height: 100vh
      justify-content: center
      &__top.loaded
        animation:
        transform: translateX(0px)
      &__top
        margin-bottom: 10px
        text-align: right
        transform: translateX(-100vw)
        h1 
          font-size: 7em
          letter-spacing: .15em
          margin-right: -.15em
          font-weight: $light
      &__middle
        display: flex
        justify-content: space-between
        h1
          font-size: 6em
        &__left.loaded
          transform: translateX(0px)
        &__left
          transform: translateX(-100vw)
        &__right.loaded
          transform: translateX(0px)
        &__right
          transform: translateX(-100vw)
      &__bottom
        display: flex
        align-self: flex-end
        position: absolute
        bottom: 0
        justify-content: flex-end
        img
          height: 70px
          margin-bottom: $arrow-margin-bottom
          animation: landing-arrow 4s ease-in-out infinite

@keyframes landing-arrow
  0%
  10%
  20%
  30%
  40%
  50%
    transform: translateY(-20px)
  60%
  70%
  80% 
  90%
  100%
    

@keyframes landing-top-load
  0%
  10%
  20%
  30%
  40%
  50%
  60%
  70%
  80% 
  90%
  100%

@keyframes landing-middle-load
  0%
  10%
  20%
  30%
  40%
  50%
  60%
  70%
  80% 
  90%
  100%

  @keyframes landing-bottom-load
  0%
  10%
  20%
  30%
  40%
  50%
  60%
  70%
  80% 
  90%
  100%
  
  
  


</style>


