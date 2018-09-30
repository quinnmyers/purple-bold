<template>
  <div>
    <section class="hero">
      <div class="hero__content">
        <div class="hero__content__container">
          <p>thisdhflkjasjdklfajsasdfasfasfasfkjfsj</p>
          <div class="hero__content__container__left"></div>
          <div class="hero__content__container__right"></div>
        </div>
      </div>
      <div class="hero__img__container">
        <img src="../assets/images/hero-monitor.svg" alt="" class="hero__img"> 
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
  align-items: center
  justify-content: center
  //take this off make it auto height after you add in the text content
  background: $blue-grey
  height: 550px
  overflow: hidden
  z-index: 1
  &__img__container 
    position: relative
    float: right
    margin-bottom: 1350px
    margin-left: calc(100% + 300px)
  img.hero__img
    position: absolute
    right: 0
  &__content 
    display: flex 
    background: red
    width: 1100px
    overflow: hidden 
    position: absolute
    &__container 
      &__left
      &__right

</style>