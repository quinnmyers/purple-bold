<template>
<div class="testimonials__controls">
    <div class="testimonials__controls__container">
      <div class="testimonials__controls__container__play"></div>
      <div class="testimonials__controls__container__pause"></div>
      <div class="testimonials__controls__container__rewind"></div>
    </div> 
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

.testimonials__controls
  display: flex 
  position: relative
  height: 150% 
  width: 25%
  background: $blue-grey 
  z-index: 10 
  @include testimonial-snap 
    width: 35%
  @media (max-width: 710px)
    height: 120%
  @include tablet-phone 
    width: 40%
  @include phone-large 
    height: 110px 
    width: 100%
  &__container 
    &__play, &__pause, &__rewind
    &__play
    &__pause
    &__rewind
</style>