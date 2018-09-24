<template>
    <div>
      <section class="hero">
        <div class="hero__content">
          <div class="hero__content__container">
            <div class="hero__content__container__left">
              <app-about-panels></app-about-panels>
            </div>
            <div class="hero__content__container__right">
              <img src="../../assets/images/hero-text.svg" alt="" class="hero__content__container__right__image">
              <p>Amet excepteur consectetur cupidatat commodo enim esse fugiat fugiat et consectetur officia Lorem fugiat sit. Officia laborum laboris consectetur nisi tempor duis elit. Excepteur fugiat in exercitation consequat incididunt officia ad commodo tempor non velit quis. Incididunt et sit eu laborum nisi officia tempor dolor laboris amet enim dolore cillum incididunt.</p>
            </div>
          </div>
        </div>
      </section>
      <br><br><br><br><br><br><br><br><br><br>
    </div>
</template>

<script>
import AboutPanels from './AboutPanels.vue'

    export default {
      components: {
        appAboutPanels: AboutPanels
      }   
    }
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

.hero
  display: flex
  justify-content: center
  height: 525px
  background: $light-grey
  color: $grey
  font-family: 'Avenir', sans-serif
  &__content
    display: flex
    width: 1100px
    //background: lightskyblue
    &__container 
      display: flex
      justify-content: space-between
      width: 100%
      &__left, &__right
      &__left
        background: red
        width: 60%
        margin-right: 50px
      &__right
        display: flex
        flex-direction: column
        justify-content: center
        width: 40%
        //background: green
        font-size: .9em
        line-height: 1.75em
        font-weight: $light
        img 
          width: 100%
          margin-bottom: 20px
        

</style>
