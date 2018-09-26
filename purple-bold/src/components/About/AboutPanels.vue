<template>
    <div>
      <ul>
        <li class="hero__image"
        v-for="(heroImg, index) in heroImages"
        >
          <img :src="getImgSrc(index + 1)" :class="`hero__panel__image__${index + 1}`" :alt="heroImg.alt" :style="stylePanel(index)">
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        heroImages: [
          {
              src: "./src/assets/images/hero-iso/iso-1.svg",
              alt: ""
          },
           {
              src: "./src/assets/images/hero-iso/iso-2.svg",
              alt: ""
          },
           {
              src: "./src/assets/images/hero-iso/iso-3.svg",
              alt: ""
          },
           {
              src: "./src/assets/images/hero-iso/iso-4.svg",
              alt: ""
          },
           {
              src: "./src/assets/images/hero-iso/iso-5.svg",
              alt: ""
          },
           {
              src: "./src/assets/images/hero-iso/iso-6.svg",
              alt: ""
          },
           {
              src: "./src/assets/images/hero-iso/iso-7.svg",
              alt: ""
          },
           {
              src: "./src/assets/images/hero-iso/iso-8.svg",
              alt: ""
          },
        ],
        display: 'none',
        panelCount: 0
      }
    },
    methods: {
      getImgSrc(index) {
          return require("../../assets/images/hero-iso/iso-" + index + ".svg");
      },
      stylePanel(index) {
        let scale = index;
        scale = Math.random();
        // return { transform: 'scale(' + scale + ')' };
        return { transform: `scale(${scale})` };
      }
    }
  }
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'


//IMPORTANT 
  //in order to reorder these images later or recolor them, if you set the display of the UL/LI
  //to make all panel images show  in a line on top of each other the order is correct, 1 is 1, 2 is 2, etc.

ul 
  display: flex
  align-items: center
  justify-content: center 
  height: 100% 
  list-style: none
  li
    //remove this for reordering, or recoloring
    position: absolute
    img
  .hero__panel__image
    &__1 
      // display: none
    


</style>