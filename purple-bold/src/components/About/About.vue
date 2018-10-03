<template>
    <div>
      <section class="about">
        <div class="about__content">
          <div class="about__content__container">
            <div class="about__content__container__left">
              <app-about-panels></app-about-panels>
            </div>
            <div class="about__content__container__right">
              <img src="../../assets/images/hero-text.svg" alt="" class="about__content__container__right__image">
              <p>Amet excepteur consectetur cupidatat commodo enim esse fugiat fugiat et consectetur officia Lorem fugiat sit. Officia laborum laboris consectetur nisi tempor duis elit. Excepteur fugiat in exercitation consequat incididunt officia ad commodo tempor non velit quis. Incididunt et sit eu laborum nisi officia tempor dolor laboris amet enim dolore cillum incididunt.</p>
            </div>
          </div>
        </div>
      </section>
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
  @include edgesnap 
    padding: 120px 0px
  @include tablet-portrait 
    padding: 80px 0px
  @include phone-large 
    height: 590px
    padding: 0px 0px
  &__content
    display: flex
    width: 1100px
    @include edgesnap 
      width: 100% 
      padding: 0px 20px
    &__container 
      display: flex
      justify-content: space-between
      width: 100%
      @include phone-large 
        flex-direction: column

      &__left, &__right
      &__left
        //animation: panel-entry-animation 2s forwards
        z-index: 1
        display: flex
        justify-content: center
        //align-items: center
        // background: lightskyblue
        width: 60%
        margin-right: 50px
        @include edgesnap 
          width: 30%
          margin-left: 100px
        @include phone-large 
          width: 100%
          margin-top: 175px 
          margin-left: 25px
      &__right
        display: flex
        flex-direction: column
        justify-content: center
        width: 40%
        font-size: .9em
        line-height: 1.75em
        font-weight: $light
        @include edgesnap 
          width: 50%
          margin-right: 20px
        @include tablet-portrait
          font-size: .8em
          line-height: 1.45em
        @include phone-large 
          width: 100%
          margin-bottom: 40px
        p 
          @include tablet-portrait
            width: 100%
        img 
          width: 100%
          margin-bottom: 20px
          @include edgesnap 
            width: 90%
          @include tablet-portrait 
            width: 100%
            margin-bottom: 15px
        
@keyframes panel-entry-animation
  from 
    transform: scale(0)
  to 
    transform: scale(1)

</style>