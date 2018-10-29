<template>
    <div>
      <section class="about" id="about">
        <div class="about__content">
          <div class="about__content__container">
            <div class="about__content__container__left">
              <app-about-panels></app-about-panels>
            </div>
            <div class="about__content__container__right">
              <img src="../../assets/images/brand.svg" alt="" class="about__content__container__right__image">
              <p>Ideas, goals, and aspirations. The moment one is said aloud, the timeline starts. For most, getting to step one never even happens. Why? Because there are too many steps to take before you can even start: you need a logo, you need a website,  you don’t even have a name or brand, a business card is crucial, a Facebook page is a must, you also need to show up on Google, where do you start? Does this sound familiar?  We want to handle those tasks for you, the right way,  so you can focus on what really matters, your business and life. We enjoy and obsess over the large and small details of a business and brand and know that attention to detail early on in the process of opening a business or revamping one can make a dramatic difference later.  Our goal is to provide everything our clients need to start their next venture, or revamp one that needs a little attention. We are committed to providing quality work, clear and frequent communication, and delivering quality products on time, after all, we want to do this for a long time,  it’s what we love.</p>
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
  color: black
  font-family: 'Avenir', sans-serif
  @include edgesnap 
    padding: 120px 0px
  @include tablet-portrait 
    padding: 80px 0px
  @include phone-large 
    height: 750px
    padding: 0px 0px
  @include phone 
    height: 790px
  @include phone-small
    height: 800px
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
        position: relative
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
          margin-left: 15px
      &__right
        display: flex
        flex-direction: column
        justify-content: center
        width: 76%
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
          display: flex 
          width: 60%
          margin-bottom: 20px
          @include edgesnap 
            width: 90%
          @include tablet-portrait 
            width: 70%
            margin-bottom: 15px
          @include phone-large 
            width: 75%
            align-self: center
        
@keyframes panel-entry-animation
  from 
    transform: scale(0)
  to 
    transform: scale(1)

</style>