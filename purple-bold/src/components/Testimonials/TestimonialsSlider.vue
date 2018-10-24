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
     
  </div>
  <!-- <div class="testimonials__slider__container">
    <div class="testimonials__slider__container__slide"
    v-for="(testimonial, index) in testimonials"
    :key="index">
      <p class="description">{{ testimonial.testimonial }}</p>
      <div class="slide__bottom">
        <h4>{{ testimonial.name }}</h4>
        <p class="position">{{ testimonial.position }}</p>
      </div>
    </div>
  </div> -->
</template>

<script>
import VueTinySlider from "vue-tiny-slider";

export default {
  components: {
    tinySlider: VueTinySlider
  },
  data() {
    return {
      isMounted: false,
      slidesInView: 3,
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
    // moveSlidesForward() {
    //   const testimonialSlides = [...this.$refs["testimonial--slide"]];
    //   testimonialSlides.forEach(slide => {
    //     slide.classList.add("moving-forward");
    //   });
    //   console.log(testimonialSlides);
    // },
    // moveSlidesForward() {
    // const testimonialSlides = [...this.$refs["testimonial--slide"]];
    // this.slides = testimonialSlides;
    // testimonialSlides[0].classList.add("is-visible");
    //   setTimeout(() => {
    //     this.$refs.testimonialslide[0].classList.add("is-visible");
    //   }, 1000);
    //   setTimeout(() => {
    //     this.$refs.testimonialslide[1].classList.add("is-visible");
    //   }, 5000);
    //   setTimeout(() => {
    //     this.$refs.testimonialslide[2].classList.add("is-visible");
    //   }, 9000);
    // }
  },
  mounted() {
    this.isMounted = true;
    if (window.matchMedia("(max-width: 650px)").matches) {
      this.slidesInView = 1;
    } else if (window.matchMedia("(max-width: 900px)").matches) {
      this.slidesInView = 2;
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


@keyframes moving-forward 
  0% 
    transform: translateX(0)
  100%
    transform: translateX(-900px)
 

</style>