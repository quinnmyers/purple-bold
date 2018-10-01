<template>
  <div>
    <section class="hero">
      <div class="hero__content">
        <div class="hero__content__container">
          <h3>A modern <span>creative agency.</span></h3>
          <h3>If you're starting something new,<br>
              let's make sure it's not already old.</h3>
          <button class="hero__content__container__ctabutton">
            Get A Free Quote
          </button>
        </div>
      </div>
      <div class="hero__image__container">
        <img src="../assets/images/hero-monitor.svg" alt="">
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='sass'>
@import '../normalize.scss'
@import '../base.sass'

.hero
  display: flex
  height: auto
  background: $blue-grey
  overflow: hidden
  @include tablet-phone 
    flex-direction: column
  &__image__container
    display: flex
    justify-content: center
    position: relative
    img
      transition: all 1s ease-in-out
      position: absolute
      right: 0
      bottom: 0 
      margin-right: -120px
      margin-bottom: -50px
      @include edgesnap
        height: 160%
        margin-right: -250px
      @include tablet-portrait 
        height: 160% 
        margin-bottom: -20px
        margin-right: -180px
      @include navsnap
        height: 140% 
        margin-right: -220px
      @include tablet-phone
        position: relative
        width: 100% 
        padding: 0px 20px
        margin-right: 0px
        margin-bottom: -200px
  &__content 
    display: flex
    height: 100%
    width: 1100px
    margin: auto
    z-index: 1
    padding: 100px 0px
    @include edgesnap 
      width: 100% 
      padding: 100px 20px
    @include tablet-portrait 
      padding: 70px 20px
    @include tablet-phone
    &__container
      height: 100%
      display: flex 
      flex-direction: column 
      justify-content: space-around
      font-family: 'Rubik', 'Avenir', sans-serif
      h3 
        font-size: 2.15em
        font-weight: $light
        color: white
        margin-top: 70px
        @include tablet-portrait 
          font-size: 1.75em
          margin-top: 40px
        &:nth-child(1)
          margin-top: 0px
        &:nth-child(2)
          margin-bottom: 70px
      span 
        font-style: italic
        border-bottom: 1px solid white
      button
        display: flex 
        flex-direction: column 
        justify-content: center
        align-items: center
        color: rgb(240,129,148)
        height: 45px
        width: 160px
        border: .08em solid rgb(240,129,148)
        border-radius: 3px
        font-size: .9em
        letter-spacing: .05em
        font-weight: $light
        @include tablet-portrait
          font-size: .85em
          height: 36px 
          width: 145px
</style>