<template>
  <div class="testimonials__slider__container" v-if="isMounted">
    <tiny-slider class="tiny__slider" ref="slider"  :mouse-drag="true" :autoplay="true" :autoplay-hover-pause="true" :speed="2000" :controls="false" :autoplayButton="'.playbtn'" :useLocalStorage="false" :autoplayText="['play', 'play']" :animateIn="'zoomin'" :loop="true" :autoplayTimeout="2400" items="3"  :gutter="50">
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
          name: "Dima Duchet",
          position: "Artist",
          testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, temporibus iste. Iusto, tenetur voluptatum placeat repellendus, iure, neque numquam ullam suscipit eos voluptates nobis laudantium libero earum qui odit totam. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 2,
          name: "Jim Jackson",
          position: "CEO, BluHare Studios",
          testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, temporibus iste. Iusto, tenetur voluptatum placeat repellendus, iure, neque numquam ullam suscipit eos voluptates nobis."
        },
        {
          id: 3,
          name: "Jared Bonnell",
          position: "Broker/Owner, One Commercial",
          testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, temporibus iste. Iusto, tenetur voluptatum placeat repellendus, iure, neque numquam ullam suscipit eos voluptates nobis laudantium libero earum qui odit totam. Lorem ipsum dolor sit amet consectetur adipisicing elit, repellendus."
        },
        {
          id: 4,
          name: "Jared Bonnell",
          position: "Broker/Owner, One Commercial",
          testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, temporibus iste. Iusto, tenetur voluptatum placeat repellendus, iure, neque numquam ullam suscipit eos voluptates nobis laudantium libero earum qui odit totam. Lorem ipsum dolor sit amet consectetur adipisicing elit, repellendus."
        },
        {
          id: 5,
          name: "Jared Bonnell",
          position: "Broker/Owner, One Commercial",
          testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, temporibus iste. Iusto, tenetur voluptatum placeat repellendus, iure, neque numquam ullam suscipit eos voluptates nobis laudantium libero earum qui odit totam. Lorem ipsum dolor sit amet consectetur adipisicing elit, repellendus."
        },
        {
          id: 6,
          name: "Jared Bonnell",
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
    // this.$nextTick(this.moveSlidesForward);
    if (window.matchMedia("(max-width: 650px)").matches) {
      this.slidesInView = 1;
    } else if (window.matchMedia("(max-width: 768px)").matches) {
      this.slidesInView = 2;
    }
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'
@import './tnsCss.sass'

.testimonials__slider__container 
  .tiny__slider
    .testimonials__slider__container__slide
      width: 200px


.testimonials__slider__container 
  position: relative
  background: pink
  height: 100% 
  width: 75% 
  font-family: "Avenir", sans-serif
  z-index: 1
  &__slide 
    display: flex
    //margin-right: -260px
    height: 300px 
    width: 260px 
    padding: 0px 15px
    // margin-left: 100%
    // margin-right: -100%
    //margin: 0px 25px
    background: khaki
    flex-direction: column
    border-left: 1px solid black
    // &.moving-forward 
    //   animation: moving-forward 10s linear infinite
    // &.is-visible 
    //   display: flex
    //   animation: moving-forward 10s linear forwards
    .bottom
      position: absolute 
      bottom: 0
    .description 
      font-size: 0.95em
      line-height: 1.3em
    h4 
      color: black
      font-size: 1.1em
    .position 
      font-size: .75em 
      color: grey


@keyframes moving-forward 
  0% 
    transform: translateX(0)
  100%
    transform: translateX(-900px)
  // &-content
  //   display: flex 
  //   position: relative
  //   background: yellow
  //   height: 100% 
  //   width: 75% 
  //   font-family: "Avenir", sans-serif
  //   z-index: 1
  //   overflow: hidden 
  //   animation: marquee 10s linear infinite running
  //   &:hover
  //     animation-play-state: paused
  // &-tag
  //   display: flex 
  //   height: 100% 
  //   width: 260px 
  //   padding: 0px 15px
  //   margin: 0px 25px
  //   background: khaki
  //   flex-direction: column 
  //   justify-content: space-between
  //   border-left: 1px solid black
  //   .testimonial__description 
  //     font-size: 0.95em
  //     line-height: 1.3em
  //   h4 
  //     color: black
  //     font-size: 1.1em
  //   .testimonial__position 
  //     font-size: .75em 
  //     color: grey



</style>