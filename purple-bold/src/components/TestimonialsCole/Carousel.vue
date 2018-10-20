<template>
    <div class="wraper">
        <div class="image__box">
           <tiny-slider class="slide" ref="slider"  :mouse-drag="true" :autoplay="true" :autoplay-hover-pause="true" :speed="2000" :controls="false" :autoplayButton="'.playbtn'" :useLocalStorage="false" :autoplayText="['play', 'play']" :animateIn="'zoomin'" :loop="true" :autoplayTimeout="2400" :items="slidesInView"  :gutter="50">
          <div v-for="slide in testimonials" v-bind:key="slide.id">
              
                    <div class="slide__card">
                        <div class="slide__card--content">
                            <p>"{{ slide.review }}"</p>
                        </div>
                        <div class="slide__card--person">
                            <p>
                                -{{ slide.name }}
                            </p>
                            <p class="Slide__card--title"> {{ slide.title }} </p>
                        </div>
                    </div>        
          </div>
           </tiny-slider>
        </div>
         <div class="controls">
            <button ref="playbtn" class="playbtn" data-action="stop">play</button>
            <button  @click="pausebtn" data-action="stop">pause</button>
        </div>
    </div>
</template>

<script>
import VueTinySlider from "vue-tiny-slider";
import controls from "./controls.vue";
export default {
  data() {
    return {
      testimonials: [
        {
          name: "John Smith",
          title: "From Xyz.com",
          link: "www.colesmith.gq",
          id: 1,
          review:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enieur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          name: "sally Smith",
          title: "From abc.com",
          link: "www.colesmith.gq",
          id: 2,
          review:
            " Lorem ipsum dolor sit  minim veniae cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          name: "quinn Smith",
          title: "From tinydoges.com",
          link: "www.colesmith.gq",
          id: 3,
          review:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          name: "cole Smith",
          title: "From whatyoulookinat.com",
          link: "www.colesmith.gq",
          id: 4,
          review:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. U enim ad minim veniae cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          name: "Parker Smith",
          title: "From bigDs.com",
          link: "www.colesmith.gq",
          id: 5,
          review:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  culpa qui officia deserunt mollit anim id est laborum."
        }
      ],
      slidesInView: 3,
      playbtn: this.$refs.playbtn
    };
  },
  //this created hook checks what screen size you are on and changes how many slides will be shown in the view port
  created() {
    if (window.matchMedia("(max-width: 650px)").matches) {
      this.slidesInView = 1;
    } else if (window.matchMedia("(max-width: 768px)").matches) {
      this.slidesInView = 2;
    }
  },
  methods: {
    // this clickes on the play btn given to us by vts when you click on the pause btn
    pausebtn() {
      this.$refs.playbtn.click();
    }
  },
  components: {
    "tiny-slider": VueTinySlider,
    appControlls: controls
  }
};
</script>

<style lang="sass" scoped>
    @import '../../normalize.scss'
    @import '../../base.sass'
    @import './tnsCss.sass'
    .wraper
        display: flex
        height: 300px
        justify-content: space-between
        @include tablet-portrait
            justify-content: flex-start
        .image__box
            width: 73%
            overflow: hidden
            @include edgesnap 
                width: 100% 
            @include tablet-portrait
                width: 80%
    .slide__card
        border-left: 1px solid black
        width: 250px
        height: 300px
        display: flex
        flex-direction: column
        justify-content: space-between
        .slide__card--content
            padding: 15px
            display: flex
        .slide__card--person
            width: 100%
            display: flex
            flex-direction: column
            padding: 15px
            .Slide__card--title
                color: #ccc
    .controls
        display: flex
        flex-direction: column
        background-color: $blue-grey
        border-radius: 3px
        box-shadow: 0px 0px 29px -4px rgba(16,43,63,1)
        align-items: center
        justify-content: space-around
        width: 25%
        height: 155%
        transform: translateY(-14%)
        @include tablet-phone 
            display: none
        @include tablet-portrait
            width: 20%
        button
            width: 100px
            height: 100px
            background: red
</style>