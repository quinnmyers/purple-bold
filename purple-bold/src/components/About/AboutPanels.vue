<template>
    <div>
      <ul>
        <li
        v-for="(heroImg, index) in heroImages"
        >
          <img :src="getImgSrc(index + 1)" :alt="heroImg.src">
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
        ]
      }
    },
    methods: {
      getImgSrc(index) {
          return require("../../assets/images/hero-iso/iso-" + index + ".svg");
      }
    }
  }
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'


</style>