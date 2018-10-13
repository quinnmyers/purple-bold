<template>
  <div v-if="isMounted">
    <li v-for="(sub, index) in service.subCategories" class="services__content__container__item__container__right__subcategories__item">
      <div class="services__content__container__item__container__right__subcategories__item__title" @click="expandSubComponent(index)">
        <h3 class="services__content__container__item__container__right__subcategories__item__title__name" 
        :ref="`${serviceName}-sub-${index}`"> {{ sub.subName }} </h3>
        <div class="services__content__container__item__container__right__subcategories__item__title__arrow" :class="{ expanded: servicesArray[index].expanded }"></div>
      </div>
        <vue-slide-up-down :active="servicesArray[index].expanded" :duration="600" class="services__content__container__item__container__right__subcategories__item__description">
         <div class="services__content__container__item__container__right__subcategories__item__description">
          <p class="services__content__container__item__container__right__subcategories__item__description__text "> {{ sub.subDescription }} </p>
      </div>
      </vue-slide-up-down>
    </li>
  </div>
</template>

<script>
import VueSlideUpDown from "vue-slide-up-down";
import { eventBus } from "../../main";

export default {
  data() {
    return {
      isMounted: false,
      counter: 0,
      name: ""
    };
  },
  props: [
    "service",
    "services",
    "servicesIndex",
    "servicesArray",
    "serviceName"
  ],
  components: {
    VueSlideUpDown: VueSlideUpDown
  },
  methods: {
    expandSubComponent(index) {
      this.servicesArray[index].expanded = !this.servicesArray[index].expanded;
    },
    updateCreativeColor(hexColor) {
      // const limit = this.$refs[`${this.serviceName}` + counter]
      // console.log(limit);
      // let counter = 0;
      // if (this.$refs["title-true"]) {
      //   let limit = this.$refs["title-true"].length;
      //   if (counter < limit) {
      //     const el = this.$refs["title-true"][this.counter];
      //     el.style.color = color;
      //     counter++;
      //   } else {
      //     this.counter = limit - 1;
      //     while (this.counter >= 0) {
      //       this.$refs["title-true"][this.counter].style.color = "#000000";
      //       counter--;
      //     }
      //     counter = 0;
      //   }
      // }
      // const target = this.$refs["creative"];
      // console.log(target);
      //target.style.color = hexColor;
      if (this.name == "creative") {
        const limit = this.service.subCategories.length;
        if (this.counter < limit) {
          const target = this.$refs[
            `${this.serviceName}-sub-${this.counter}`
          ][0];
          console.log(target);
          target.style.color = hexColor;
          console.log(this.counter);
          this.counter++;
        } else if ((this.counter = limit - 1)) {
          while (this.counter >= 0) {
            const target = this.$refs[
              `${this.serviceName}-sub-${this.counter}`
            ][0];
            target.style.color = "black";
            this.counter--;
          }
          this.counter = 0;
        }
      } else {
        return;
      }
    },
    getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }
  },
  created() {
    eventBus.$on("colorWasEdited", hexColor => {
      this.updateCreativeColor(hexColor);
    });
  },
  mounted() {
    this.isMounted = true;
    this.name = this.serviceName;
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

.services__content__container__item__container__right__subcategories
  li, &__item
    &__title 
      display: flex
      justify-content: space-between 
      align-items: center
      margin-bottom: 5px
      cursor: pointer
      @include tablet-portrait 
        justify-content: space-between
        //background: pink
      h3, &__name
        font-family: 'Rubik', 'Avenir', sans-serif 
        font-weight: $normal 
        font-size: 1.5em
      &__arrow
        margin-left: 20px
        height: 20px 
        width: 20px
        //transform: rotate(0deg)
        //transition: transform 0.5s forwards
        background: 
          image: url('../../assets/images/services-title-arrow.svg')
          position: center 
          size: contain
          repeat: no-repeat
        &.expanded 
          animation: arrow-grow 0.5s forwards
    &__description
      //background: yellow
      overflow: hidden 
      height: auto
      width: 100%
      &.expanded 
        height: auto
      &__text
        display: flex
        font-family: 'Avenir', sans-serif
        margin-bottom: 20px
        font-size: 0.95em
        line-height: 1.25em
        overflow: hidden
        color: black
        height: auto
        transition: all .5s ease
        //removed for library testing
        //transform: translateY(-100%)
        &.expanded 
          color: red
          max-height: 600px
          transform: translateY(0px)
              
@keyframes arrow-grow 
  0% 
    transform: scale(1) rotate(0deg)
  50% 
    transform: scale(1.2)
  100%
    transform: scale(1) rotate(-180deg)
</style>