<template>
    <div>
      <section class="about">
        <div class="about__content">
          <div class="about__content__container">
            <div class="about__content__container__left">
              <app-about-panels></app-about-panels>
            </div>
            <div class="about__content__container__right">
              <img src="../../assets/images/about-text.svg" alt="" class="about__content__container__right__image">
              <p>Amet excepteur consectetur cupidatat commodo enim esse fugiat fugiat et consectetur officia Lorem fugiat sit. Officia laborum laboris consectetur nisi tempor duis elit. Excepteur fugiat in exercitation consequat incididunt officia ad commodo tempor non velit quis. Incididunt et sit eu laborum nisi officia tempor dolor laboris amet enim dolore cillum incididunt.</p>
            </div>
          </div>
        </div>
      </section>
      <br><br><br><br><br><br><br><br><br><br>
    </div>
</template>

<script>
import AboutPanels from "./AboutPanels.vue";

export default {
  components: {
    appAboutPanels: AboutPanels
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

.about
  display: flex
  justify-content: center
  height: auto
  padding: 150px 0px
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
        //animation: panel-entry-animation 2s forwards
        z-index: 1
        display: flex
        justify-content: center
        //align-items: center
        //background: lightskyblue
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
        
@keyframes panel-entry-animation
  from 
    transform: scale(0)
  to 
    transform: scale(1)

</style>