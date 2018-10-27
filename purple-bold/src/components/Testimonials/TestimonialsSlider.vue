<template>
  <div class="testimonials__slider__container" v-if="isMounted">
    <tiny-slider class="tiny__slider" ref="slider"  :mouse-drag="true" :autoplay="true" :autoplay-hover-pause="true" :slideBy='1' :speed="1000" :controls="false" :useLocalStorage="false" :autoplayText="['play', 'play']" :loop="true" :autoplayTimeout="2400" :items="slidesInView"  :gutter="50">
 <div class="testimonials__slider__container__slide"
      v-for="(testimonial, index) in testimonials"
      :key="index"
      ref="testimonialslide">
        <p class="description">{{ testimonial.testimonial }}</p>
        <div class="bottom">
          <h4>{{ testimonial.name }}</h4>
          <p class="position">{{ testimonial.position }}</p>
        </div>
      </div>
    </tiny-slider>
    <!-- <button class="test-button" ref="testbutton">testButton</button> -->
  </div>
</template>

<script>
import VueTinySlider from "vue-tiny-slider";

export default {
  components: {
    tinySlider: VueTinySlider
  },
  props: ["isPaused", "buttonClicked"],
  data() {
    return {
      isMounted: false,
      slidesInView: 3,
      sliderButton: "",
      testimonials: [
        {
          id: 1,
          name: "Dima Duchet 1",
          position: "Artist",
          testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, temporibus iste. Iusto, tenetur voluptatum placeat repellendus, iure, neque numquam ullam suscipit eos voluptates nobis laudantium libero earum qui odit totam. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 2,
          name: "Jim Jackson 2",
          position: "CEO, BluHare Studios",
          testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, temporibus iste. Iusto, tenetur voluptatum placeat repellendus, iure, neque numquam ullam suscipit eos voluptates nobis."
        },
        {
          id: 3,
          name: "Jared Bonnell 3",
          position: "Broker/Owner, One Commercial",
          testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, temporibus iste. Iusto, tenetur voluptatum placeat repellendus, iure, neque numquam ullam suscipit eos voluptates nobis laudantium libero earum qui odit totam. Lorem ipsum dolor sit amet consectetur adipisicing elit, repellendus."
        },
        {
          id: 4,
          name: "Jared Bonnell 4",
          position: "Broker/Owner, One Commercial",
          testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, temporibus iste. Iusto, tenetur voluptatum placeat repellendus, iure, neque numquam ullam suscipit eos voluptates nobis laudantium libero earum qui odit totam. Lorem ipsum dolor sit amet consectetur adipisicing elit, repellendus."
        },
        {
          id: 5,
          name: "Jared Bonnell 5",
          position: "Broker/Owner, One Commercial",
          testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, temporibus iste. Iusto, tenetur voluptatum placeat repellendus, iure, neque numquam ullam suscipit eos voluptates nobis laudantium libero earum qui odit totam. Lorem ipsum dolor sit amet consectetur adipisicing elit, repellendus."
        },
        {
          id: 6,
          name: "Jared Bonnell 6",
          position: "Broker/Owner, One Commercial",
          testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, temporibus iste. Iusto, tenetur voluptatum placeat repellendus, iure, neque numquam ullam suscipit eos voluptates nobis laudantium libero earum qui odit totam. Lorem ipsum dolor sit amet consectetur adipisicing elit, repellendus."
        }
      ]
    };
  },
  methods: {
    handlePausePlay() {
      let el = document.querySelectorAll('[data-action="stop"]');
      el = el[0];
      this.sliderButton = el;
      console.log(this.sliderButton);
      if (this.buttonClicked === "play") {
        console.log("play button clicked, also clicked the button");
        let el = document.querySelectorAll('[data-action="start"]');
        el = el[0];
        this.sliderButton = el;
        this.sliderButton.click();
      } else if (this.buttonClicked === "pause") {
        console.log("pause button clicked, also clicked the button");
        this.sliderButton.click();
      }
    }
  },
  mounted() {
    this.isMounted = true;
    if (window.matchMedia("(max-width: 650px)").matches) {
      this.slidesInView = 1;
    } else if (window.matchMedia("(max-width: 900px)").matches) {
      this.slidesInView = 2;
    }
  },
  watch: {
    buttonClicked: function() {
      this.handlePausePlay();
      // console.log("from Slider: " + this.isPaused);
    }
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'
@import '../../tnsCss.sass'

.testimonials__slider__container 
  position: relative
  background: pink
  height: auto
  width: 75% 
  font-family: "Avenir", sans-serif
  z-index: 1
  @include testimonial-snap 
    width: 65%
  @include tablet-phone 
    width: 60%
  @include phone-large 
    width: 75%
  &__slide 
    display: flex
    height: 300px 
    width: 260px 
    padding: 0px 15px
    background: khaki
    flex-direction: column
    border-left: 1px solid black
    @include edgesnap 
      width: 33%
    @include testimonial-snap 
      width: 26%
    @include phone-large 
      width: 90%
    .bottom
      position: absolute 
      bottom: 0
    .description 
      font-size: 0.95em
      line-height: 1.3em
      @include edgesnap 
        font-size: 0.9em
    h4 
      color: black
      font-size: 1.1em
      @include edgesnap 
        font-size: 1em
    .position 
      font-size: .75em 
      color: grey
  // .testimonials__controls
  //   display: flex 
  //   position: absolute
  //   right: 0 
  //   top: 0
  //   height: 150% 
  //   width: 25%
  //   background: $blue-grey 
  //   z-index: 10 
  //   @include testimonial-snap 
  //     width: 35%
  //   @media (max-width: 710px)
  //     height: 120%
  //   @include tablet-phone 
  //     width: 40%
  //   @include phone-large 
  //     height: 110px 
  //     width: 100%
  //   &__container 
  //     &__play, &__pause, &__rewind
  //     &__play
  //     &__pause
  //     &__rewind


@keyframes moving-forward 
  0% 
    transform: translateX(0)
  100%
    transform: translateX(-900px)
 

</style>