<template lang="pug">
    div
      .landing__page
        .landing__page__content
          .landing__page__content__container
            .landing__page__content__container__top
              h1 Purple
            .landing__page__content__container__middle
              .landing__page__content__container__middle__left
              h1 +
              .landing__page__content__container__middle__right
              h1 Bold
            .landing__page__content__container__bottom
              img.landing--arrow(src='../assets/images/icons/arrow.svg')
</template>

<script>
    export default {
        
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
      &__top h1
        font-size: 7em
        letter-spacing: .15em
        margin-right: -.15em
        font-weight: $light
      &__middle
        display: flex
        justify-content: space-between
        h1
          font-size: 6em
        &__left 
        &__right
      &__bottom
        display: flex
        align-self: flex-end
        position: absolute
        bottom: 0
        justify-content: flex-end
        img
          height: 70px
          margin-bottom: $arrow-margin-bottom
          animation: arrow 4s ease-in-out infinite

@keyframes arrow
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
    
  


</style>


