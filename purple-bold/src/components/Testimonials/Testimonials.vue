<template>
  <section class="testimonials">
    <div class="testimonials__content">
        <div class="testimonials__content__container">
          <h2 class="section--header">Testimonials</h2>
          <div class="testimonials__content__container__middle">
             <app-testimonials-slider></app-testimonials-slider>
          <app-testimonials-controls></app-testimonials-controls>
          </div>
         
          <div class="testimonials__content__container__cta"> <p>this is a test</p></div>
        </div>
      </div>
  </section>
</template>

<script>
import TestimonialsSlider from "./TestimonialsSlider.vue";
import TestimonialsControls from "./TestimonialsControls.vue";

export default {
  components: {
    appTestimonialsSlider: TestimonialsSlider,
    appTestimonialsControls: TestimonialsControls
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

.testimonials 
  display: flex
  flex-direction: column
  height: 600px
  width: 100%
  background: $light-grey
  &__content 
    display: flex
    flex-direction: column
    align-self: center
    width: 1100px
    height: 100%
    background: lightskyblue
    &__container
      display: flex
      flex-direction: column
      justify-content: space-around
      height: 100% 
      width: 100%
      h2 
        height: 40px
        widht: 100% 
        background: orange
        margin: 0px 0px
        margin-top: 30px 
        padding: 0px 0px
      &__middle
        display: flex
        justify-content: center 
        align-items: center 
        width: 100% 
        height: 55%
        background: red
      &__cta
        margin-bottom: 30px
        background: green
        height: 30px 
        width: 100%
    

</style>