<template>
    <div>
      <ul>
        <li class="about__image"
        v-for="(heroImg, index) in heroImages"
        >
          <img :src="getImgSrc(index + 1)" :class="`about__panel__image__${index + 1}`" :ref="index" :alt="heroImg.alt" :style="stylePanel(index)">
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
        }
      ],
      panelArray: [],
      display: "none"
    };
  },
  methods: {
    getImgSrc(index) {
      return require("../../assets/images/hero-iso/iso-" + index + ".svg");
    },
    stylePanel(index) {
      //offsets
      const minOffset = 20;
      const maxOffset = 50;
      const offset = this.getRandomNumber(minOffset, maxOffset);
      //console.log(offset);
      //translateX
      const minTranslateX = 100;
      const maxTranslateX = 800;
      let translateX = this.getRandomNumber(minTranslateX, maxTranslateX);
      // console.log(translateX);
      // translateX = translateX * -1;
      // console.log(translateX);
      if (Math.random() > 0.5) {
        translateX = translateX;
      } else {
        translateX = translateX * -1;
      }
      //translateY
      const translateY = translateX * 0.57;
      //scale
      const scale = Math.random();
      return {
        transform: `rotate(-145deg) translateX(${translateX}px) translateY(${translateY}px)`
        //   scale(${scale}) translateZ(-500px)
      };
    },
    getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    },
    selectListItem() {
      let id = 0;
      const limit = this.heroImages.length;
      while (id < limit) {
        const el = this.$refs[id];
        //console.log(el);
        id++;
        this.panelArray.push(el);
      }
      // console.log(this.panelArray);
      // console.log(this.panelArray[1]);
      // const pictureTwo = this.$refs[2][0]
      // console.log(pictureTwo)
      // console.log(this.panelArray)
      //pictureTwo.style.display = "flex"
    }
  },
  mounted() {
    this.selectListItem();
  }
};
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
  margin-right: 170px
  height: 100% 
  list-style: none
  li
    //remove this for reordering, or recoloring
    position: absolute
    perspective: 500px
    img
      animation: test-animation 2s forwards
      position: relative
      opacity: 0
  .about__panel__image
    &__1
      //large top right peach
      margin-left: 250px
      margin-bottom: 100px
      //transform: translateX(-800px) translateY(-456px)  scale(0.5) rotate(-90deg)
    &__2
      // pinkish on top of larger black middle bottom
      z-index: 2
      margin-top: 120px
      margin-right: 10px
    &__3
      //smaller black one
      z-index: 1
      margin-right: 210px
      margin-bottom: 130px
      //transform: translateX(-600px) translateY(-342px) rotate(-90deg)
    &__4
      //black below top right peach middle
      z-index: 1
      margin-left: 90px
      margin-top: 50px
    &__5
      // top left purple
      z-index: -1
      margin-left: 50px
      margin-bottom: 200px
    &__6
      //lower right purple
      margin-left: 390px
      margin-top: 330px
    &__7
      //small narrow pinkish top left
      margin-right: 150px
      margin-bottom: 190px
    &__8
      // display: none
      margin-right: 300px
      margin-bottom: 100px
      z-index: 1
    
    
@keyframes test-animation 
  0%
  30%
  50%
  60%
  75% 
  80%
  85%
  90%
  100%
    opacity: 1
    transform: rotate(0deg) scale(1) translateX(0px) translateY(0px)


</style>